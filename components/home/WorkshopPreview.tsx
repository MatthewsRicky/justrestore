import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "@/components/shared/EditorialImage";

export default function WorkshopPreview() {
  return (
    <section className="overflow-hidden bg-sage text-white">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <p className="editorial-label text-ochre">
            Learn. Create. Experiment.
          </p>

          <h2 className="mt-6 max-w-xl font-display text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            Creativity is
            <br />
            <span className="italic text-ochre">meant to be shared.</span>
          </h2>

          <p className="mt-7 max-w-lg text-sm leading-8 text-white/80 sm:text-base">
            Discover the creative side of furniture transformation through
            JustRestore workshops. Explore techniques, experiment with ideas and
            develop your own artistic approach.
          </p>

          <Link
            href="/workshops"
            className="group mt-9 inline-flex w-fit items-center gap-4 border-b border-white/50 pb-3 text-[11px] font-semibold uppercase tracking-[0.13em] transition-colors hover:border-ochre hover:text-ochre"
          >
            Explore workshops
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="min-h-[360px] lg:min-h-[650px]">
          <EditorialImage
            src="/images/home/workshop.jpg"
            alt="Creative furniture painting workshop"
            label="Workshop and creative learning photography"
            aspectRatio="4 / 5"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
