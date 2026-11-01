import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "@/components/shared/EditorialImage";

export default function ArtistIntroduction() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-[520px]">
            <EditorialImage
              src="/images/home/artist-sabah.avif"
              showImage
              alt="Sabah Bardhan in her creative studio"
              label="Portrait of Sabah Bardhan"
              aspectRatio="4 / 5"
            />

            <div className="absolute -bottom-7 -right-4 max-w-[190px] bg-paper p-5 sm:-right-8 sm:p-7">
              <p className="font-display text-3xl italic leading-tight text-terracotta">
                Art is everywhere.
              </p>
              <p className="mt-2 text-[9px] uppercase tracking-widest text-muted">
                The JustRestore philosophy
              </p>
            </div>
          </div>

          <div className="py-6 lg:py-12">
            <p className="editorial-label text-terracotta">Meet the artist</p>

            <h2 className="mt-6 font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              A creative mind.
              <br />
              <span className="italic text-terracotta">An artistic soul.</span>
            </h2>

            <p className="mt-8 text-sm leading-8 text-muted sm:text-base">
              Behind every JustRestore transformation is a passion for
              creativity, colour and the stories that objects carry.
            </p>

            <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
              Through an individual artistic approach, Sabah reimagines
              furniture as something more than functional objects — creating
              distinctive pieces that bring personality and character into
              everyday spaces.
            </p>

            <Link
              href="/about-me"
              className="group mt-9 inline-flex items-center gap-4 border-b border-ink/30 pb-3 text-[11px] font-semibold uppercase tracking-[0.13em] transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Discover Sabah's story
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
