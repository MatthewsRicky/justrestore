import type { GalleryProject } from "@/types/gallery";

export const galleryProjects: GalleryProject[] = [];

// Retrieve all projects belonging to a category.
export function getProjectsByCategory(categorySlug: string) {
  return galleryProjects.filter((project) => project.category === categorySlug);
}

// Retrieve a single project within its category.
export function getGalleryProject(categorySlug: string, projectSlug: string) {
  return galleryProjects.find(
    (project) =>
      project.category === categorySlug && project.slug === projectSlug,
  );
}

// Retrieve featured projects across all categories.
export function getFeaturedProjects() {
  return galleryProjects.filter((project) => project.featured);
}
