import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "@/components/shared/EditorialImage";

export default function HomeCTA() {
  return (
    <section className="overflow-hidden bg-ink text-ivory">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <p className="editorial-label text-ochre">
            Your idea. A new possibility.
          </p>

          <h2 className="mt-7 max-w-2xl font-display text-5xl leading-[0.93] tracking-tight sm:text-6xl lg:text-8xl">
            What story
            <br />
            could your
            <br />
            furniture
            <br />
            <span className="italic text-ochre">tell next?</span>
          </h2>

          <p className="mt-8 max-w-md text-sm leading-8 text-ivory/65 sm:text-base">
            Have a piece you'd love to transform? Let's explore the creative
            possibilities and imagine something entirely your own.
          </p>

          <Link
            href="/commission"
            className="group mt-10 flex w-fit items-center gap-5 bg-ochre px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:bg-ivory"
          >
            Start your commission
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/contact"
            className="mt-7 w-fit text-xs text-ivory/60 underline underline-offset-4 transition-colors hover:text-ochre"
          >
            Have another question? Get in touch.
          </Link>
        </div>

        <div className="relative min-h-[400px] lg:min-h-full">
          <EditorialImage
            alt="Featured artistic furniture transformation"
            label="Hero artwork for the commission call to action"
            aspectRatio="4 / 5"
            className="h-full w-full"
          />

          <div className="absolute bottom-6 left-6 bg-ivory px-5 py-4 text-ink sm:bottom-10 sm:left-10">
            <p className="editorial-label text-terracotta">JustRestore</p>
            <p className="mt-1 font-display text-2xl italic">
              Functional masterpieces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
