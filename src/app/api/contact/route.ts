import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";

/**
 * Delivery options (set any in the environment):
 *  - CRM_WEBHOOK_URL: JSON POST of the enquiry to your CRM / automation tool
 *  - RESEND_API_KEY + CONTACT_TO_EMAIL (+ optional CONTACT_FROM_EMAIL): email via Resend
 * With neither configured, the enquiry is acknowledged but NOT delivered anywhere.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the highlighted fields.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const submissionId = `SH-${Date.now().toString(36).toUpperCase()}`;
    const deliveries: Promise<Response>[] = [];

    if (process.env.CRM_WEBHOOK_URL) {
      deliveries.push(
        fetch(process.env.CRM_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ submissionId, source: "shrotam-website", ...data }),
        })
      );
    }

    if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
      deliveries.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.CONTACT_FROM_EMAIL ?? "SHROTAM Website <onboarding@resend.dev>",
            to: [process.env.CONTACT_TO_EMAIL],
            reply_to: data.businessEmail,
            subject: `New enquiry ${submissionId}: ${data.interest}`,
            text: [
              `Name: ${data.fullName}`,
              `Email: ${data.businessEmail}`,
              `Company: ${data.companyName}`,
              `Phone: ${data.phone || "-"}`,
              `Interest: ${data.interest}`,
              `Call volume: ${data.callVolume || "-"}`,
              "",
              data.message,
            ].join("\n"),
          }),
        })
      );
    }

    const delivered = deliveries.length > 0;
    if (delivered) {
      const results = await Promise.allSettled(deliveries);
      const anyOk = results.some((r) => r.status === "fulfilled" && r.value.ok);
      if (!anyOk) {
        console.error(`[Contact] ${submissionId} delivery failed`);
        return NextResponse.json(
          {
            success: false,
            message: "We couldn't send your enquiry just now. Please call or WhatsApp us instead.",
          },
          { status: 502 }
        );
      }
    } else {
      console.warn(`[Contact] ${submissionId} received but no delivery channel is configured.`);
    }

    return NextResponse.json({
      success: true,
      submissionId,
      delivered,
      message: "Thanks. Your enquiry is in.",
    });
  } catch (error) {
    console.error("[Contact API Error]", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or call us." },
      { status: 500 }
    );
  }
}
