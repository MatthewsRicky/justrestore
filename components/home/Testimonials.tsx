import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="text-center">
          <p className="editorial-label text-terracotta">Kind words</p>

          <h2 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl">
            Stories from our clients.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">
            The most meaningful transformations are the ones that become part of
            someone's story.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col bg-paper p-7 sm:p-9"
            >
              <Quote size={30} strokeWidth={1} className="text-terracotta" />

              <blockquote className="mt-7 flex-1 font-display text-2xl leading-snug">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-8 border-t border-ink/15 pt-5">
                <p className="text-sm font-semibold">{testimonial.name}</p>

                {testimonial.location && (
                  <p className="mt-1 text-xs text-muted">
                    {testimonial.location}
                  </p>
                )}

                {testimonial.project && (
                  <p className="mt-2 text-[10px] uppercase tracking-widest text-terracotta">
                    {testimonial.project}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.13em] hover:text-terracotta"
          >
            Have a project in mind?
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
