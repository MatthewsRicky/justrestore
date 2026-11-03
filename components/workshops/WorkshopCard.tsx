import type { Workshop } from "@/types/workshop";

type WorkshopCardProps = {
  workshop: Workshop;
  index: number;
};

export default function WorkshopCard({ workshop, index }: WorkshopCardProps) {
  const imageOnLeft = index % 2 === 0;

  return (
    <article
      id={workshop.slug}
      className="grid items-center gap-8 border-b border-ink/10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20"
    >
      <div
        className={`flex justify-center ${
          imageOnLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={workshop.image}
          alt={workshop.imageAlt}
          loading="lazy"
          decoding="async"
          className="block h-auto w-auto max-w-full"
        />
      </div>

      <div className={`${imageOnLeft ? "lg:order-2" : "lg:order-1"}`}>
        <p className="editorial-label text-terracotta">
          Workshop {String(index + 1).padStart(2, "0")}
        </p>

        <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {workshop.title}
        </h2>

        <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
          {workshop.description}
        </p>

        {workshop.highlights && (
          <ul className="mt-6 space-y-3">
            {workshop.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-7 text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {workshop.details && (
          <div className="mt-7 space-y-3 border-l-2 border-terracotta/40 pl-5">
            {workshop.details.date && (
              <p className="text-sm text-ink">
                <span className="font-medium">Date:</span>{" "}
                {workshop.details.date}
              </p>
            )}

            {workshop.details.time && (
              <p className="text-sm text-ink">
                <span className="font-medium">Time:</span>{" "}
                {workshop.details.time}
              </p>
            )}

            {workshop.details.venue && (
              <p className="text-sm text-ink">
                <span className="font-medium">Venue:</span>{" "}
                {workshop.details.venue}
              </p>
            )}

            {workshop.details.availability && (
              <p className="text-sm font-medium text-terracotta">
                {workshop.details.availability}
              </p>
            )}

            {workshop.details.contact && (
              <p className="text-sm text-ink">
                <span className="font-medium">Contact:</span>{" "}
                {workshop.details.contact}
              </p>
            )}
          </div>
        )}

        <a
          href={workshop.ctaHref}
          className="mt-8 inline-flex items-center gap-3 border-b border-terracotta pb-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
        >
          {workshop.ctaLabel}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
