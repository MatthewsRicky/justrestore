"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { commissionLink, navigationItems } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-ivory/95 shadow-sm backdrop-blur-md"
          : "bg-ivory"
      }`}
    >
      <div className="container-main flex h-[76px] items-center justify-between lg:h-[88px]">
        {/* Brand */}
        <Link
          href="/"
          aria-label="JustRestore home"
          className="relative z-[60] flex flex-col"
        >
          <span className="font-display text-[32px] font-semibold leading-none tracking-[-0.04em]">
            JustRestore<span className="text-terracotta">.</span>
          </span>

          <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.25em] text-muted">
            Art. Furniture. Transformation.
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-2 text-[12px] font-medium transition-colors ${
                isActive(item.href)
                  ? "text-terracotta"
                  : "text-ink/75 hover:text-terracotta"
              }`}
            >
              {item.label}

              {isActive(item.href) && (
                <span className="absolute inset-x-0 -bottom-1 h-px bg-terracotta" />
              )}
            </Link>
          ))}

          <Link
            href={commissionLink.href}
            className="group flex items-center gap-3 bg-ink px-5 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-terracotta"
          >
            {commissionLink.label}

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="relative z-[60] flex size-11 items-center justify-center border border-ink/15 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex min-h-dvh flex-col bg-ivory px-6 pb-10 pt-28 lg:hidden"
          >
            <div className="mb-10">
              <p className="editorial-label text-terracotta">
                Explore JustRestore
              </p>

              <h2 className="mt-3 max-w-sm font-display text-5xl leading-[0.95]">
                A little more art in everyday life.
              </h2>
            </div>

            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.06,
                  }}
                  className="border-b border-ink/10"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between py-4 font-display text-3xl ${
                      isActive(item.href) ? "text-terracotta" : "text-ink"
                    }`}
                  >
                    {item.label}

                    <ArrowUpRight size={19} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <Link
                href={commissionLink.href}
                className="flex w-full items-center justify-between bg-ink px-6 py-5 text-sm uppercase tracking-widest text-ivory transition-colors hover:bg-terracotta"
              >
                {commissionLink.label}
                <ArrowUpRight size={19} />
              </Link>

              <p className="mt-6 text-center text-xs text-muted">
                Functional masterpieces that tell a story.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
