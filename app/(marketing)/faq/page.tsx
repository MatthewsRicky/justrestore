import type { Metadata } from "next";
import { getCanonicalMetadata } from "@/lib/seo";
import FAQIntroduction from "@/components/faqs/FAQIntroduction";
import FAQAccordion from "@/components/faqs/FAQAccordion";
import FAQCTA from "@/components/faqs/FAQCTA";

export const metadata: Metadata = {
  ...getCanonicalMetadata("/faqs"),
  title: "Furniture Restoration FAQs",
  description:
    "Find answers to common questions about furniture restoration, bespoke commissions, Chalk Paint, decorative finishes, transportation and caring for restored furniture.",
};

export default function FAQsPage() {
  return (
    <main>
      <FAQIntroduction />
      <FAQAccordion />
      <FAQCTA />
    </main>
  );
}
