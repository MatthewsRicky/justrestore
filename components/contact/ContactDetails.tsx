import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/justrestore/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/15wfe983FZ/",
  },
  {
    label: "Pinterest",
    href: "https://pin.it/4tK0oGgG0",
  },
];

export default function ContactDetails() {
  return (
    <section className="section-padding border-t border-ink/10">
      <div className="container-main grid gap-10 md:grid-cols-2">
        <div>
          <p className="editorial-label mb-4">Stay connected</p>

          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Follow the creative process.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            Discover recent transformations, works in progress, creative
            inspiration and workshop updates.
          </p>
        </div>

        <div className="flex flex-col">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-ink/10 py-5 text-ink transition-colors hover:text-terracotta"
            >
              <span className="font-display text-2xl">{link.label}</span>

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
