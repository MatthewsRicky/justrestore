import EditorialImage from "@/components/shared/EditorialImage";

const stages = [
  {
    number: "01",
    title: "Discover",
    description:
      "Every project begins with an idea, an object and an opportunity to create something distinctive.",
  },
  {
    number: "02",
    title: "Imagine",
    description:
      "Colour, patterns, textures and artistic direction bring a new vision to life.",
  },
  {
    number: "03",
    title: "Transform",
    description:
      "The creative process turns that vision into a unique piece of functional artwork.",
  },
];

export default function CreativeProcess() {
  return (
    <section className="section-padding bg-paper">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="editorial-label text-terracotta">
              Behind the artwork
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.98] sm:text-6xl">
              Every detail has
              <br />
              <span className="italic text-terracotta">a purpose.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-8 text-muted">
              An artistic transformation is more than a change in appearance. It
              is a creative journey shaped by imagination, technique and
              attention to detail.
            </p>

            <div className="mt-10">
              <EditorialImage
                src="/images/home/process-detail.jpg"
                alt="Close-up of furniture painting and artistic detail"
                label="Creative process and artistic detail"
                aspectRatio="5 / 4"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="grid grid-cols-[54px_1fr] gap-5 border-t border-ink/15 py-9 sm:grid-cols-[80px_1fr] sm:gap-8 sm:py-12"
              >
                <span className="font-display text-3xl italic text-terracotta sm:text-4xl">
                  {stage.number}
                </span>

                <div>
                  <h3 className="font-display text-4xl sm:text-5xl">
                    {stage.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-8 text-muted">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
