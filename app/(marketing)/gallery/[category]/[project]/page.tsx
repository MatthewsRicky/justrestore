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

export default async function GalleryProjectPage({
  params,
}: GalleryProjectPageProps) {
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
