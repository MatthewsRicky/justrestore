import AchievementCard from "@/components/about/AchievementCard";

import {
  aboutAchievements,
  aboutClosing,
  mediaRecognition,
} from "@/data/about";

export default function AboutAchievements() {
  return (
    <section className="section-padding bg-paper">
      <div className="container-main">
        <div className="max-w-2xl">
          <p className="editorial-label text-terracotta">
            Achievements & proud moments
          </p>

          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Milestones along
            <span className="italic text-terracotta"> the way.</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-muted sm:text-base">
            Every opportunity to create, share and inspire has been an important
            part of the JustRestore journey.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {aboutAchievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.slug}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        <div className="mt-24 border-t border-ink/10 pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mediaRecognition.image}
                alt={mediaRecognition.imageAlt}
                loading="lazy"
                className="block h-auto w-auto max-w-full"
              />
            </div>

            <div>
              <p className="editorial-label text-terracotta">
                In the spotlight
              </p>

              <h3 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                {mediaRecognition.title}
              </h3>

              <div className="mt-6 space-y-5 text-sm leading-8 text-muted sm:text-base">
                {mediaRecognition.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-3xl text-center">
          <p className="editorial-label text-terracotta">
            {aboutClosing.eyebrow}
          </p>

          <h3 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            {aboutClosing.title}
          </h3>

          <div className="mt-7 space-y-5 text-sm leading-8 text-muted sm:text-base">
            {aboutClosing.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
