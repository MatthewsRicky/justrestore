import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "The Artist", href: "/about-me" },
  { label: "Gallery", href: "/gallery" },
  { label: "Workshops", href: "/workshops" },
  { label: "Commission", href: "/commission" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-main py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr] lg:gap-16">
          <div>
            <p className="editorial-label text-ochre">
              Art. Furniture. Transformation.
            </p>

            <h2 className="mt-5 max-w-xl font-display text-5xl leading-[0.95] sm:text-6xl">
              Making everyday life a little more extraordinary.
            </h2>

            <Link
              href="/commission"
              className="mt-8 inline-flex items-center gap-3 border-b border-ochre pb-2 text-sm transition-colors hover:text-ochre"
            >
              Start a commission
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div>
            <h3 className="editorial-label text-ochre">Explore</h3>

            <nav className="mt-6 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-ivory/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="editorial-label text-ochre">Get in touch</h3>

            <p className="mt-6 max-w-xs text-sm leading-7 text-ivory/70">
              Have a piece of furniture with a story to tell? Let's explore what
              it could become.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm text-ivory transition-colors hover:text-ochre"
            >
              Contact JustRestore
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/15 pt-7 text-xs text-ivory/50 sm:flex-row">
          <p>© {new Date().getFullYear()} JustRestore. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>

          <p>Made with creativity.</p>
        </div>
      </div>
    </footer>
  );
}
