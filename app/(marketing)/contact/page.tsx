import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact JustRestore",
  description:
    "Get in touch with Sabah Bardhan at JustRestore about bespoke furniture restoration commissions, furniture painting workshops and general enquiries.",
};

type ContactPageProps = {
  searchParams: Promise<{
    type?: string;
  }>;
};

async function ContactPageContentWrapper({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  const validTypes = [
    "commission",
    "workshop",
    "private-masterclass",
    "general",
  ];

  const initialType = validTypes.includes(params.type ?? "")
    ? params.type
    : "general";

  return <ContactPageContent initialType={initialType} />;
}

function ContactPageFallback() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <p className="editorial-label mb-4">Get in touch</p>

        <div className="h-10 w-64 animate-pulse bg-ink/10" />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-64 animate-pulse border border-ink/10 bg-paper"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <Suspense fallback={<ContactPageFallback />}>
      <ContactPageContentWrapper searchParams={searchParams} />
    </Suspense>
  );
}
