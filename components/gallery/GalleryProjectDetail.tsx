import Image from "next/image";
import Link from "next/link";
import type { GalleryCategory, GalleryProject } from "@/types/gallery";

type GalleryProjectDetailProps = {
  project: GalleryProject;
  category: GalleryCategory;
};

export default function GalleryProjectDetail({
  project,
  category,
}: GalleryProjectDetailProps) {
  const projectImages =
    project.images.length > 0 ? project.images : [project.thumbnail];

  return (
    <article className="section-padding bg-ivory">
      <div className="container-main">
        <Link
          href={`/gallery/${category.slug}`}
          className="editorial-label text-muted transition-colors hover:text-terracotta"
        >
          ← Back to {category.title}
        </Link>

        <header className="mt-12 max-w-3xl">
          <p className="editorial-label text-terracotta">{category.title}</p>

          <h1 className="mt-5 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          {project.description && (
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              {project.description}
            </p>
          )}
        </header>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {projectImages.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className={
                index === 0 && projectImages.length > 2 ? "sm:col-span-2" : ""
              }
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0 && projectImages.length > 2
                      ? "100vw"
                      : "(max-width: 640px) 100vw, 50vw"
                  }
                  className="object-cover"
                />
              </div>

              {image.caption && (
                <figcaption className="mt-3 text-xs text-muted">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        <div className="mt-20 border-t border-ink/15 pt-10">
          <p className="editorial-label text-terracotta">
            Have something in mind?
          </p>

          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Your piece could be next.
          </h2>

          <Link
            href="/commission"
            className="mt-7 inline-flex border-b border-ink/40 pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Enquire about a commission
          </Link>
        </div>
      </div>
    </article>
  );
}
