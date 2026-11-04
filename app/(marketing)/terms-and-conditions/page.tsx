import type { Metadata } from "next";
import { getCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...getCanonicalMetadata("/terms-and-conditions"),
  title: "Terms and Conditions",
  description:
    "Read the JustRestore terms and conditions covering furniture restoration quotes, commissions, payments, transportation, cancellations and refunds.",
};

const termsSections = [
  {
    number: "01",
    title: "Quote Validity and Revision",
    paragraphs: [
      "The provided quote is valid for 15 days from the issue date. After this period, the quote is subject to revision due to changes in material costs, labour, or other relevant factors.",
      "Once accepted, the quote is final and non-negotiable.",
    ],
  },
  {
    number: "02",
    title: "Changes During Restoration",
    paragraphs: [
      "Upon receiving your furniture, I may suggest modifications to enhance the final result. These suggestions will be made in writing, and your explicit approval will be required before proceeding.",
      "If no response is received within 48 hours, the proposed changes will be considered approved.",
      "Any changes requested after the initial approval may incur additional charges, if feasible.",
    ],
  },
  {
    number: "03",
    title: "Payment Terms",
    paragraphs: [
      "A non-refundable 50% advance payment is required to start the work. Payments can be made via cash, bank transfer, Zelle, or Venmo. The advance must be received before work begins.",
      "The remaining 50% balance is due upon project completion, before the furniture is collected or delivered.",
      "Delayed payments will result in work suspension, and the furniture will not be released until full payment is made.",
      "For bank transfers, payments must be completed 5 business days prior to delivery to avoid delays. Any banking or payment delays are the client's responsibility.",
    ],
  },
  {
    number: "04",
    title: "Transportation",
    paragraphs: [
      "Transportation costs are not included in the quote. Clients are responsible for arranging and covering the cost of transporting furniture to and from the JustRestore workshop.",
      "If transportation is arranged by JustRestore, costs will vary based on location and furniture type. Confirmation of transportation must be provided in writing before work begins.",
      "JustRestore is not affiliated with any moving companies and is not liable for damage during transportation. Any issues must be reported immediately upon receipt. Repairs for such damage will incur additional costs, subject to availability.",
    ],
  },
  {
    number: "05",
    title: "Restoration Process",
    paragraphs: [
      "Progress photos will be shared at key stages, requiring client review and approval within 48 hours. Failure to respond will result in work proceeding as planned.",
      "Any additional changes requested after restoration has started are subject to approval and will incur extra charges.",
      "Chalk Paint is exclusively used for all restorations, offering a VOC-free, odourless, and non-toxic finish. However, all furniture is hand-painted, and factory-like finishes are not achievable. This adds to the character and appeal of the craftsmanship. No two furniture items will ever be the same, and therefore your furniture is unique and one of a kind.",
      "Structural repairs or major woodwork are not provided. If clients would like woodwork or structural fixes done to their furniture, they can use external carpenters for this purpose. If clients wish JustRestore to facilitate these repairs, this can be done at the workshop at an extra cost via external carpenters. JustRestore is not liable for how the carpenters fix the furniture.",
      "Minor scratches or surface imperfections may be addressed, but structural damage, severe chips, or repairs beyond surface touch-ups will incur extra costs or may be declined.",
    ],
  },
  {
    number: "06",
    title: "Colour Selection",
    paragraphs: [
      "Clients must select colours from the available Chalk Paint range. Please note, colours may vary slightly based on lighting, type and material of furniture, or environmental factors.",
      "Once confirmed, colour selection is final. Any changes after work begins will incur additional charges and may delay completion.",
    ],
  },
  {
    number: "07",
    title: "Liability",
    paragraphs: [
      "JustRestore is not responsible for damage, loss, or defects occurring during transportation.",
      "Dissatisfaction with the final appearance after project approval will not constitute grounds for liability.",
    ],
  },
  {
    number: "08",
    title: "Cancellations & Refunds",
    paragraphs: [
      "Advance payments are non-refundable.",
      "If the project is canceled after work begins, the client is responsible for all costs incurred up to that point, including labour, materials, and transportation.",
      "Refunds are not provided once work has commenced.",
    ],
  },
  {
    number: "09",
    title: "Confidentiality",
    paragraphs: [
      "At JustRestore, we value your privacy and respect your personal information. All contact details provided will remain private and will not be disclosed to any third parties. Your information is only used to communicate with you about your projects, workshops, or enquiries. We are committed to ensuring that your personal data is kept secure and confidential.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main>
      {/* Page introduction */}
      <section className="section-padding pb-12">
        <div className="container-main">
          <div className="max-w-3xl">
            <p className="editorial-label mb-5">
              JustRestore / Client Information
            </p>

            <h1 className="font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Terms & Conditions
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted">
              Every restoration is a collaboration. These terms outline how
              commissions are quoted, carried out, and completed, helping ensure
              a clear understanding between JustRestore and each client.
            </p>
          </div>
        </div>
      </section>

      {/* Terms content */}
      <section className="section-padding pt-8">
        <div className="container-main">
          <div className="grid gap-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20">
            {/* Section navigation */}
            <aside className="h-fit lg:sticky lg:top-32">
              <p className="editorial-label mb-5">On this page</p>

              <nav aria-label="Terms and conditions sections">
                <ol className="space-y-3">
                  {termsSections.map((section) => (
                    <li key={section.number}>
                      <a
                        href={`#section-${section.number}`}
                        className="group flex items-baseline gap-3 text-sm text-muted transition-colors hover:text-terracotta"
                      >
                        <span className="text-xs text-terracotta">
                          {section.number}
                        </span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Full terms */}
            <div className="max-w-3xl">
              {termsSections.map((section) => (
                <article
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-32 border-t border-ink/15 py-10 first:border-t-0 first:pt-0"
                >
                  <div className="mb-6 flex items-start gap-5">
                    <span className="pt-1 text-sm text-terracotta">
                      {section.number}
                    </span>

                    <h2 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-5 pl-10">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm leading-8 text-muted sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}

              <div className="border-t border-ink/15 pt-8">
                <p className="text-sm leading-7 text-muted">
                  By proceeding with a furniture restoration commission, you
                  acknowledge that you have read and understood these terms and
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
