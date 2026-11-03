import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { GalleryProject, GalleryProjectLayout } from "@/types/gallery";

type GalleryProjectCardProps = {
  project: GalleryProject;
};

const layoutClasses: Record<GalleryProjectLayout, string> = {
  regular: "",
  wide: "lg:col-span-2",
  tall: "lg:row-span-2",
  large: "lg:col-span-2 lg:row-span-2",
};

export default function GalleryProjectCard({
  project,
}: GalleryProjectCardProps) {
  const layout = project.layout ?? "regular";

  return (
    <Link
      href={`/gallery/${project.category}/${project.slug}`}
      className={`group relative block min-h-[260px] overflow-hidden bg-paper ${layoutClasses[layout]}`}
    >
      <Image
        src={project.thumbnail.src}
        alt={project.thumbnail.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 20vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
        <div>
          <h2 className="font-display text-2xl leading-tight sm:text-3xl">
            {project.title}
          </h2>

          {project.description && (
            <p className="mt-2 line-clamp-2 max-w-md text-sm text-white/80">
              {project.description}
            </p>
          )}
        </div>

        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/50 transition-colors group-hover:border-terracotta group-hover:bg-terracotta">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
