import { aboutSections } from "@/data/about";

export default function AboutStory() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="max-w-2xl">
          <p className="editorial-label text-terracotta">
            The story behind the work
          </p>

          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            More than a
            <span className="italic text-terracotta"> makeover.</span>
          </h2>
        </div>

        <div className="mt-12">
          {aboutSections.map((section, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <article
                key={section.eyebrow}
                className="grid items-center gap-10 border-b border-ink/10 py-14 first:pt-0 last:border-b-0 lg:grid-cols-2 lg:gap-20 lg:py-20"
              >
                <div
                  className={`flex justify-center ${
                    imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-auto max-w-full"
                  />
                </div>

                <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
                  <p className="editorial-label text-terracotta">
                    {section.eyebrow}
                  </p>

                  <h3 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                    {section.title}
                  </h3>

                  <div className="mt-6 space-y-5 text-sm leading-8 text-muted sm:text-base">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
