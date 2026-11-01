import GalleryProjectCard from "@/components/gallery/GalleryProjectCard";
import type { GalleryProject } from "@/types/gallery";

type GalleryGridProps = {
  projects: GalleryProject[];
};

export default function GalleryGrid({ projects }: GalleryGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-display text-3xl">Something beautiful is coming.</p>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
          This collection is being prepared. Please check back soon to explore
          the projects in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid auto-rows-[minmax(13rem,18vw)] grid-cols-2 grid-flow-row-dense gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5 2xl:grid-cols-5">
      {projects.map((project) => (
        <GalleryProjectCard
          key={`${project.category}-${project.slug}`}
          project={project}
        />
      ))}
    </div>
  );
}
