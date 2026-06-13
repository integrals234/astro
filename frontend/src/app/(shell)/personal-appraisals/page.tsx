import PersonalAppraisalsPageClient from "@/components/personal-appraisals/PersonalAppraisalsPageClient";
import { getDefaultDialCode } from "@/lib/phone/detect-country";

export default async function PersonalAppraisalsPage() {
  const defaultDialCode = await getDefaultDialCode();

  return <PersonalAppraisalsPageClient defaultDialCode={defaultDialCode} />;
}
