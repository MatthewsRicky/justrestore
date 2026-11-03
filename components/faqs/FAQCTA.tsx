import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FAQCTA() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="bg-paper px-6 py-12 sm:px-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="editorial-label mb-4">Still have questions?</p>

            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Every piece has a story. Let's talk about yours.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted">
              If you haven't found the answer you're looking for, feel free to
              get in touch. I'd be happy to discuss your ideas and help you
              explore the possibilities.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-sm text-ink transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
