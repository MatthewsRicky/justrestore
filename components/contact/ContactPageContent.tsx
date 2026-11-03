"use client";

import { useState } from "react";

import ContactIntroduction from "@/components/contact/ContactIntroduction";
import ContactOptions, {
  type EnquiryType,
} from "@/components/contact/ContactOptions";
import ContactDetails from "@/components/contact/ContactDetails";

import GeneralEnquiryForm from "@/components/forms/GeneralEnquiryForm";
import WorkshopEnquiryForm from "@/components/forms/WorkshopEnquiryForm";
import CommissionForm from "@/components/forms/CommissionForm";

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

  function handleSelect(type: EnquiryType) {
    setSelectedType(type);

    requestAnimationFrame(() => {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

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

          <ContactOptions selectedType={selectedType} onSelect={handleSelect} />

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

            <div className="mt-10">
              {selectedType === "general" && <GeneralEnquiryForm />}

              {selectedType === "workshop" && <WorkshopEnquiryForm />}

              {selectedType === "commission" && <CommissionForm />}
            </div>
          </div>
        </div>
      </section>

      <ContactDetails />
    </>
  );
}
