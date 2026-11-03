"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import EditorialImage from "@/components/shared/EditorialImage";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="container-main grid min-h-[650px] items-center gap-12 py-14 lg:min-h-[760px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-20">
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
            <span className="italic text-terracotta">story to tell.</span>
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
              href="/contact?type=commission"
              className="border-b border-ink/30 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Commission a piece
            </Link>
          </motion.div>

          <p className="mt-14 text-[10px] uppercase tracking-[0.2em] text-muted">
            Functional masterpieces that tell a story.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="absolute -inset-3 rotate-[-3deg] bg-ochre/60" />

          <EditorialImage
            src="/images/home/hero-main.avif"
            alt="Featured artistic furniture by JustRestore"
            label="Main homepage furniture photograph"
            aspectRatio="4 / 4.5"
            className="relative"
            priority
            showImage
          />

          <div className="absolute -bottom-5 -left-3 bg-ivory p-5 shadow-lg sm:-left-8 sm:p-7">
            <p className="editorial-label text-terracotta">
              Art meets function
            </p>
            <p className="mt-2 max-w-[160px] font-display text-2xl leading-tight">
              A different kind of beautiful.
            </p>
          </div>
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
