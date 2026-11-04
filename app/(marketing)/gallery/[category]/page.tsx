import type { Metadata } from "next";
import { getCanonicalMetadata } from "@/lib/seo";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { galleryCategories } from "@/data/gallery/categories";
import { getGalleryImagesByCategory } from "@/data/gallery/gallery-projects";

type GalleryCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

function GalleryImageCard({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  return (
    <figure className="mb-4 w-full break-inside-avoid sm:mb-5">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1200}
        priority={index < 2}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="block h-auto w-full"
        style={{
          objectFit: "contain",
          maxWidth: "100%",
        }}
      />
    </figure>
  );
}

export async function generateMetadata({
  params,
}: GalleryCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;

  const category = galleryCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    return {
      title: "Collection Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    ...getCanonicalMetadata(`/gallery/${categorySlug}`),
    title: category.title,
    description:
      category.description ??
      `Explore ${category.title.toLowerCase()} by Sabah Bardhan at JustRestore. Discover creative furniture transformations, artistic finishes and unique restoration ideas.`,
  };
}

export default async function GalleryCategoryPage({
  params,
}: GalleryCategoryPageProps) {
  const { category: categorySlug } = await params;

  const category = galleryCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const images = getGalleryImagesByCategory(categorySlug);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <Link
          href="/gallery"
          className="editorial-label text-muted transition-colors hover:text-terracotta"
        >
          ← Back to gallery
        </Link>

        <header className="mt-12 max-w-3xl">
          <p className="editorial-label text-terracotta">
            JustRestore collection
          </p>

          <h1 className="mt-5 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
            {category.title}
          </h1>

          {category.description && (
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              {category.description}
            </p>
          )}

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            {images.length} {images.length === 1 ? "image" : "images"}
          </p>
        </header>

        {images.length > 0 ? (
          <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4 xl:gap-5">
            {images.map((image, index) => (
              <GalleryImageCard
                key={image.slug}
                src={image.src}
                alt={image.alt}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="font-display text-3xl">
              Something beautiful is coming.
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              This collection is being prepared. Please check back soon.
            </p>
          </div>
        )}

        <div className="mt-20 border-t border-ink/15 pt-10">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:text-terracotta"
          >
            Explore other collections
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
