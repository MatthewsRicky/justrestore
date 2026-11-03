import {
  aboutIntroduction,
  aboutPortrait,
  aboutSocialLinks,
} from "@/data/about";

export default function AboutIntroduction() {
  return (
    <section className="section-padding bg-paper">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={aboutPortrait.image}
              alt={aboutPortrait.alt}
              className="block h-auto w-auto max-w-full"
              fetchPriority="high"
            />
          </div>

          <div>
            <p className="editorial-label text-terracotta">
              {aboutIntroduction.eyebrow}
            </p>

            <h1 className="mt-5 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
              {aboutIntroduction.title}
            </h1>

            <div className="mt-7 max-w-2xl space-y-5 text-sm leading-8 text-muted sm:text-base">
              {aboutIntroduction.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 border-t border-ink/10 pt-6">
              <p className="editorial-label text-terracotta">Find me online</p>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {aboutSocialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink transition-colors hover:text-terracotta"
                  >
                    {link.label}
                    <span className="ml-1" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
