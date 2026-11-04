import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "@/components/shared/EditorialImage";

export default function HomeCTA() {
  return (
    <section className="overflow-hidden bg-ink text-ivory">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* Content */}
        <div className="flex w-full flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 md:px-12 md:py-16 lg:w-[55%] lg:px-16 lg:py-24">
          <p className="editorial-label text-ochre">
            Your idea. A new possibility.
          </p>

          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[0.98] tracking-tight sm:text-5xl md:mt-5 md:text-6xl lg:mt-7 lg:text-7xl xl:text-8xl lg:leading-[0.93]">
            What story
            <br />
            could your
            <br />
            furniture
            <br />
            <span className="italic text-ochre">tell next?</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-ivory/65 sm:text-base md:mt-5 md:leading-7 lg:mt-8 lg:leading-8">
            Have a piece you'd love to transform? Let's explore the creative
            possibilities and imagine something entirely your own.
          </p>

          <Link
            href="/contact?type=commission"
            className="group mt-8 flex w-fit items-center gap-4 bg-ochre px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:bg-ivory md:mt-7 lg:mt-10 lg:gap-5 lg:px-7 lg:py-5"
          >
            Start your commission
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/contact"
            className="mt-6 w-fit text-xs text-ivory/60 underline underline-offset-4 transition-colors hover:text-ochre md:mt-5 lg:mt-7"
          >
            Have another question? Get in touch.
          </Link>
        </div>

        {/* Image */}
        <div className="relative h-[340px] w-full sm:h-[420px] md:h-[460px] lg:h-auto lg:min-h-[650px] lg:w-[45%]">
          <EditorialImage
            src="/images/home/featured-7.avif"
            alt="Featured artistic furniture transformation"
            label="Hero artwork for the commission call to action"
            aspectRatio="square"
            className="h-full w-full"
            showImage
          />

          <div className="absolute bottom-5 left-5 bg-ivory px-4 py-3 text-ink sm:bottom-8 sm:left-8 sm:px-5 sm:py-4">
            <p className="editorial-label text-terracotta">JustRestore</p>
            <p className="mt-1 font-display text-xl italic sm:text-2xl">
              Functional masterpieces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
