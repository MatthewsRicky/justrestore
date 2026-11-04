import { Suspense } from "react";
import { notFound } from "next/navigation";

import GalleryProjectDetail from "@/components/gallery/GalleryProjectDetail";
import { galleryCategories } from "@/data/gallery/categories";
import { getGalleryProject } from "@/data/gallery/projects";

type GalleryProjectPageProps = {
  params: Promise<{
    category: string;
    project: string;
  }>;
};

export default function GalleryProjectPage({
  params,
}: GalleryProjectPageProps) {
  return (
    <Suspense
      fallback={
        <section className="section-padding bg-ivory">
          <div className="container-main">
            <p className="editorial-label text-muted">Loading project...</p>
          </div>
        </section>
      }
    >
      <GalleryProjectContent params={params} />
    </Suspense>
  );
}

async function GalleryProjectContent({ params }: GalleryProjectPageProps) {
  const { category: categorySlug, project: projectSlug } = await params;

  const category = galleryCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const project = getGalleryProject(categorySlug, projectSlug);

  if (!project) {
    notFound();
  }

  return <GalleryProjectDetail project={project} category={category} />;
}
