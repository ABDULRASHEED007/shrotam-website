import { redirect } from "next/navigation";

export default function TermsAndConditionsRedirect() {
  redirect("/legal/terms-of-service");
}
