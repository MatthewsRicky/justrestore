import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="container-main grid min-h-[650px] items-center gap-12 py-16 lg:min-h-[760px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-20">
        {/* Hero copy */}
        <div className="relative z-10 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="editorial-label mb-7 text-terracotta"
          >
            Artistry meets everyday living
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-balance text-[clamp(4rem,8vw,7.5rem)] leading-[0.84] tracking-[-0.055em]"
          >
            Furniture
            <br />
            with a
            <br />
            <span className="text-terracotta italic">story to tell.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-9 max-w-md text-sm leading-8 text-muted sm:text-base"
          >
            Ordinary furniture, extraordinary possibilities. Discover the art of
            transforming forgotten pieces into functional masterpieces with
            personality, colour and character.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/gallery"
              className="group flex items-center gap-4 bg-ink px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-terracotta"
            >
              Explore the gallery
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/commission"
              className="flex items-center gap-2 border-b border-ink/30 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Commission a piece
            </Link>
          </motion.div>

          <p className="mt-14 text-[10px] uppercase tracking-[0.2em] text-muted">
            Functional masterpieces that tell a story.
          </p>
        </div>

        {/* Temporary artistic composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto aspect-[4/4.5] w-full max-w-[620px]"
        >
          <div className="absolute inset-4 rotate-[-4deg] bg-ochre/80" />

          <div className="absolute inset-0 overflow-hidden bg-paper">
            <div className="absolute -right-12 -top-12 size-64 rounded-full bg-terracotta/80 blur-[1px]" />

            <div className="absolute -bottom-20 -left-10 size-72 rounded-full bg-sage/80" />

            <div className="absolute left-[22%] top-[18%] h-[58%] w-[58%] rotate-[8deg] border-[12px] border-ink/15 bg-ivory/70 shadow-2xl">
              <div className="absolute inset-4 border border-terracotta/60" />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-7xl italic text-terracotta/90">
                Art
              </div>
            </div>

            <div className="absolute bottom-7 right-7 max-w-[150px] bg-ivory px-5 py-4 shadow-lg">
              <p className="editorial-label text-terracotta">JustRestore</p>

              <p className="mt-2 font-display text-2xl leading-tight">
                A different kind of beautiful.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 size-20 rounded-full border border-terracotta/60 lg:-left-8" />
        </motion.div>
      </div>

      <div className="container-main flex items-center justify-between border-t border-ink/10 py-5">
        <span className="editorial-label text-muted">
          Bespoke furniture transformation
        </span>

        <ArrowDown size={17} className="text-terracotta" />
      </div>
    </section>
  );
}
