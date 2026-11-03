import FAQIntroduction from "@/components/faqs/FAQIntroduction";
import FAQAccordion from "@/components/faqs/FAQAccordion";
import FAQCTA from "@/components/faqs/FAQCTA";

export const metadata = {
  title: "Frequently Asked Questions | JustRestore",
  description:
    "Find answers to common questions about furniture restoration, commissions, Chalk Paint, finishes, delivery, and caring for your restored furniture.",
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
