import { z } from "zod";

export const interestOptions = [
  "Inbound customer support",
  "Outbound sales and lead qualification",
  "Payment reminders and collections",
  "Loyalty and membership support",
  "Appointment booking and reminders",
  "IVR replacement",
  "Something else / not sure yet",
] as const;

export const callVolumeOptions = [
  "Under 1,000 calls a month",
  "1,000 – 10,000",
  "10,000 – 100,000",
  "100,000+",
  "Not sure",
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  businessEmail: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(120, { message: "Email cannot exceed 120 characters." }),
  companyName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your company name." })
    .max(100, { message: "Company name cannot exceed 100 characters." }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone number cannot exceed 30 characters." })
    .optional()
    .or(z.literal("")),
  interest: z.enum(interestOptions, {
    errorMap: () => ({ message: "Please choose what you're interested in." }),
  }),
  callVolume: z.enum(callVolumeOptions).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please tell us a little more (at least 10 characters)." })
    .max(2000, { message: "Message cannot exceed 2000 characters." }),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please agree so we can contact you about your enquiry.",
    }),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
