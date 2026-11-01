import EditorialImage from "@/components/shared/EditorialImage";

const principles = [
  {
    number: "01",
    title: "Individuality",
    description:
      "Every transformation begins with a unique vision. No two pieces need to tell the same story.",
  },
  {
    number: "02",
    title: "Creativity",
    description:
      "Colour, texture and artistic expression turn familiar objects into unexpected works of art.",
  },
  {
    number: "03",
    title: "Reimagination",
    description:
      "Furniture can be given a new identity, extending its life and creating something worth keeping.",
  },
];

export default function ArtisticPhilosophy() {
  return (
    <section className="section-padding overflow-hidden bg-paper">
      <div className="container-main">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-24">
          <div>
            <p className="editorial-label text-terracotta">
              More than restoration
            </p>

            <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              The beauty is in
              <br />
              <span className="italic text-terracotta">
                the transformation.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-8 text-muted sm:text-base">
              What if furniture could become a form of self-expression? What if
              the pieces we live with reflected our imagination, individuality
              and appreciation for art?
            </p>

            <p className="mt-5 max-w-xl text-sm leading-8 text-muted sm:text-base">
              JustRestore explores those possibilities through artistic
              furniture transformations that celebrate character rather than
              conventional perfection.
            </p>

            <div className="mt-12 space-y-7">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid grid-cols-[42px_1fr] gap-4 border-t border-ink/15 pt-5"
                >
                  <span className="editorial-label text-terracotta">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="font-display text-3xl">{principle.title}</h3>

                    <p className="mt-2 max-w-lg text-sm leading-7 text-muted">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <EditorialImage
              src="/images/home/featured-9.avif"
              alt="Artistic detail of hand-painted furniture"
              label="Close-up of artistic furniture detailing"
              aspectRatio="4 / 5"
              showImage
            />

            <div className="absolute -bottom-5 -left-5 hidden h-36 w-36 items-center justify-center rounded-full border border-terracotta/60 bg-paper p-5 text-center sm:flex">
              <span className="font-display text-2xl italic leading-tight text-terracotta">
                Made to be different.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
