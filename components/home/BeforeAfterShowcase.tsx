import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "@/components/shared/EditorialImage";

const transformations = [
  {
    image: "/images/before-after/restoration-1.avif",
    title: "Transformation 01",
    description: "A new perspective on a familiar piece.",
  },
  {
    image: "/images/before-after/restoration-2.avif",
    title: "Transformation 02",
    description: "Giving character another chance to shine.",
  },
  {
    image: "/images/before-after/restoration-3.avif",
    title: "Transformation 03",
    description: "An individual expression through design.",
  },
  {
    image: "/images/before-after/restoration-4.avif",
    title: "Transformation 04",
    description: "A different story for an existing piece.",
  },
];

export default function BeforeAfterShowcase() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="editorial-label text-terracotta">
              The art of reinvention
            </p>

            <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
              Same piece.
              <br />
              <span className="italic text-terracotta">New perspective.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-muted">
            Sometimes all a piece needs is a different perspective. Explore the
            possibilities of artistic furniture transformation.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-x-8 gap-y-12 sm:grid-cols-2">
          {transformations.map((item) => (
            <Link href="/gallery" key={item.title} className="group block">
              <EditorialImage
                src={item.image}
                showImage
                alt={`${item.title}: furniture before and after artistic transformation`}
                label={`${item.title} before-and-after comparison`}
                aspectRatio="5 / 4"
                fit="cover"
                className="bg-[#e8dfd1]"
              />

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>

                <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-all group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 border-b border-ink/30 pb-3 text-[11px] font-semibold uppercase tracking-[0.13em] transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Discover more transformations
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
