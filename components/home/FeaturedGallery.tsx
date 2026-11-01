import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "@/components/shared/EditorialImage";

const featuredWorks = [
  {
    title: "Statement Sideboards",
    category: "Sideboards",
    image: "/images/home/featured-1.avif",
    aspect: "5 / 4",
  },
  {
    title: "Characterful Cabinets",
    category: "Cabinets",
    image: "/images/home/featured-2.avif",
    aspect: "5 / 4",
  },
  {
    title: "Unexpected Details",
    category: "Artistic Details",
    image: "/images/home/featured-3.avif",
    aspect: "5 / 4",
  },
  {
    title: "Furniture Reimagined",
    category: "Transformations",
    image: "/images/home/featured-4.avif",
    aspect: "5 / 4",
  },
];

export default function FeaturedGallery() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="editorial-label text-terracotta">Selected works</p>

            <h2 className="mt-5 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
              A collection of
              <br />
              <span className="italic text-terracotta">individuality.</span>
            </h2>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 border-b border-ink/30 pb-3 text-[11px] font-semibold uppercase tracking-[0.13em] transition-colors hover:border-terracotta hover:text-terracotta"
          >
            View the full gallery
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {featuredWorks.map((work) => (
            <Link href="/gallery" key={work.title} className="group block">
              <EditorialImage
                src={work.image}
                showImage
                alt={`${work.title} by JustRestore`}
                label={`${work.category} portfolio photograph`}
                aspectRatio={work.aspect}
              />

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="editorial-label text-terracotta">
                    {work.category}
                  </p>

                  <h3 className="mt-2 font-display text-3xl transition-colors group-hover:text-terracotta sm:text-4xl">
                    {work.title}
                  </h3>
                </div>

                <span className="mt-2 flex size-10 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-all group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
