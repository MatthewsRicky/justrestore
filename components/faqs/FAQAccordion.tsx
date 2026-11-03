"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

import { faqs } from "@/data/faqs";
import type { FAQCategory } from "@/types/faq";

const categories: FAQCategory[] = [
  "All",
  "Furniture",
  "Commissions",
  "Care & Maintenance",
  "Products & Finishes",
];

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFAQs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  function handleCategoryChange(category: FAQCategory) {
    setActiveCategory(category);
    setOpenIndex(null);
  }

  return (
    <section className="section-padding pt-4">
      <div className="container-main">
        {/* Category filters */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              aria-pressed={activeCategory === category}
              className={`border px-4 py-2.5 text-xs transition-colors sm:text-sm ${
                activeCategory === category
                  ? "border-ink bg-ink text-ivory"
                  : "border-ink/15 text-muted hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="editorial-label">
              {activeCategory === "All" ? "All questions" : activeCategory}
            </p>

            <p className="text-xs text-muted">
              {filteredFAQs.length} questions
            </p>
          </div>

          <div className="border-t border-ink/15">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article key={faq.question} className="border-b border-ink/15">
                  <h2>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-xl leading-snug text-ink transition-colors sm:text-2xl">
                        {faq.question}
                      </span>

                      <span
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-all ${
                          isOpen
                            ? "rotate-180 border-terracotta bg-terracotta text-white"
                            : "text-ink"
                        }`}
                      >
                        <ChevronDown size={17} />
                      </span>
                    </button>
                  </h2>

                  <div
                    id={answerId}
                    hidden={!isOpen}
                    className="pb-7 pl-0 sm:pl-2"
                  >
                    <div className="max-w-3xl space-y-4 text-sm leading-8 text-muted sm:text-base">
                      {faq.answer.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}

                      {faq.bullets && (
                        <ul className="list-disc space-y-2 pl-6 marker:text-terracotta">
                          {faq.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}

                      {faq.question ===
                        "How can I get a quote for my furniture?" && (
                        <p>
                          If you're not sure exactly what you want, no worries!
                          I'd be happy to help brainstorm ideas based on your
                          style and decor.
                        </p>
                      )}

                      {faq.link && (
                        <a
                          href={faq.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-terracotta underline underline-offset-4 transition-colors hover:text-ink"
                        >
                          {faq.link.label}
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
