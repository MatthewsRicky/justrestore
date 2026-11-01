import Link from "next/link";
import { notFound } from "next/navigation";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryCategories } from "@/data/gallery/categories";
import { getProjectsByCategory } from "@/data/gallery/projects";

type GalleryCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function GalleryCategoryPage({
  params,
}: GalleryCategoryPageProps) {
  const { category: categorySlug } = await params;

  const category = galleryCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const projects = getProjectsByCategory(categorySlug);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <Link
          href="/gallery"
          className="editorial-label text-muted transition-colors hover:text-terracotta"
        >
          ← Back to gallery
        </Link>

        <div className="mt-12 max-w-3xl">
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
        </div>

        <div className="mt-14">
          <GalleryGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
