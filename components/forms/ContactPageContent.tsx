"use client";

import { useState } from "react";

import ContactIntroduction from "@/components/contact/ContactIntroduction";
import ContactOptions, {
  type EnquiryType,
} from "@/components/contact/ContactOptions";
import ContactDetails from "@/components/contact/ContactDetails";
import GeneralEnquiryForm from "@/components/forms/GeneralEnquiryForm";

type ContactPageContentProps = {
  initialType?: string;
};

const enquiryDescriptions: Record<
  EnquiryType,
  { title: string; description: string }
> = {
  commission: {
    title: "Tell me about your furniture.",
    description:
      "Share a little about the piece you have in mind. We'll use the details to understand your project and its possibilities.",
  },
  workshop: {
    title: "Let's plan something creative.",
    description:
      "Whether you're interested in a scheduled workshop or a private masterclass, let me know what you're looking for.",
  },
  general: {
    title: "What's on your mind?",
    description:
      "For general questions, collaborations, press enquiries and other conversations.",
  },
};

export default function ContactPageContent({
  initialType,
}: ContactPageContentProps) {
  const normalisedType: EnquiryType =
    initialType === "commission"
      ? "commission"
      : initialType === "workshop" || initialType === "private-masterclass"
        ? "workshop"
        : "general";

  const [selectedType, setSelectedType] = useState<EnquiryType>(normalisedType);

  const selectedEnquiry = enquiryDescriptions[selectedType];

  return (
    <>
      <ContactIntroduction />

      <section className="section-padding pt-4">
        <div className="container-main">
          <div className="mb-10 max-w-2xl">
            <p className="editorial-label mb-4">Start a conversation</p>

            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              What would you like to enquire about?
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              Choose the option that best describes what you have in mind. I'll
              guide you through the relevant details.
            </p>
          </div>

          <ContactOptions
            selectedType={selectedType}
            onSelect={setSelectedType}
          />

          <div
            id="contact-form"
            className="mt-16 scroll-mt-28 border-t border-ink/10 pt-10"
          >
            <p className="editorial-label mb-4">
              {selectedType === "commission"
                ? "Furniture commissions"
                : selectedType === "workshop"
                  ? "Workshops & masterclasses"
                  : "General enquiries"}
            </p>

            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              {selectedEnquiry.title}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              {selectedEnquiry.description}
            </p>

            {selectedType === "general" && <GeneralEnquiryForm />}

            {selectedType === "workshop" && (
              <p className="mt-8 text-sm text-muted">
                The workshop enquiry form is coming next.
              </p>
            )}

            {selectedType === "commission" && (
              <p className="mt-8 text-sm text-muted">
                The furniture commission form is coming next.
              </p>
            )}
          </div>
        </div>
      </section>

      <ContactDetails />
    </>
  );
}
