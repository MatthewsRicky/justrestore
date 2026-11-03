import type { Metadata } from "next";

import WorkshopIntroduction from "@/components/workshops/WorkshopIntroduction";
import WorkshopCard from "@/components/workshops/WorkshopCard";
import WorkshopCTA from "@/components/workshops/WorkshopCTA";
import { workshops } from "@/data/workshops";

export const metadata: Metadata = {
  title: "Furniture Painting Workshops",
  description:
    "Discover furniture painting workshops and creative masterclasses with Sabah Bardhan at JustRestore. Explore opportunities to learn decorative painting techniques and transform furniture.",
};

export default function WorkshopsPage() {
  return (
    <>
      <WorkshopIntroduction />

      <section id="workshop-list" className="section-padding bg-ivory">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="editorial-label text-terracotta">
              Learn, experiment and create
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Find your creative
              <span className="italic text-terracotta"> spark.</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-muted sm:text-base">
              From playful painting sessions to personalized masterclasses,
              discover a creative experience that inspires you to try something
              new.
            </p>
          </div>

          <div className="mt-8">
            {workshops.map((workshop, index) => (
              <WorkshopCard
                key={workshop.slug}
                workshop={workshop}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <WorkshopCTA />
    </>
  );
}
