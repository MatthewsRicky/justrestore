"use client";

import { ArrowUpRight, Brush, MessageCircle, Palette } from "lucide-react";

export type EnquiryType = "commission" | "workshop" | "general";

type ContactOptionsProps = {
  selectedType: EnquiryType;
  onSelect: (type: EnquiryType) => void;
};

const options = [
  {
    id: "commission",
    number: "01",
    title: "Furniture commissions",
    description:
      "Have a piece of furniture you'd love to transform? Tell me about it and the vision you have in mind.",
    icon: Brush,
  },
  {
    id: "workshop",
    number: "02",
    title: "Workshops & masterclasses",
    description:
      "Interested in attending a workshop, arranging a private session, or organising a creative experience?",
    icon: Palette,
  },
  {
    id: "general",
    number: "03",
    title: "Something else",
    description:
      "For collaborations, press enquiries, partnerships, or anything else you'd like to discuss.",
    icon: MessageCircle,
  },
] as const;

export default function ContactOptions({
  selectedType,
  onSelect,
}: ContactOptionsProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {options.map((option) => {
        const isSelected = selectedType === option.id;
        const Icon = option.icon;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            aria-pressed={isSelected}
            className={`group flex h-full flex-col border p-6 text-left transition-colors duration-300 sm:p-8 ${
              isSelected
                ? "border-terracotta bg-terracotta/5"
                : "border-ink/10 bg-paper hover:border-terracotta/50"
            }`}
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="editorial-label text-muted">
                {option.number}
              </span>

              <Icon
                size={22}
                strokeWidth={1.4}
                className={isSelected ? "text-terracotta" : "text-ink"}
              />
            </div>

            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              {option.title}
            </h2>

            <p className="mt-4 flex-1 text-sm leading-7 text-muted">
              {option.description}
            </p>

            <div className="mt-8 flex items-center justify-between">
              <span
                className={`text-xs uppercase tracking-[0.16em] ${
                  isSelected ? "text-terracotta" : "text-muted"
                }`}
              >
                {isSelected ? "Selected" : "Choose this enquiry"}
              </span>

              <ArrowUpRight
                size={18}
                className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  isSelected ? "text-terracotta" : "text-muted"
                }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
