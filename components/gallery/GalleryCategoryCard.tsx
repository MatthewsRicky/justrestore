import Image from "next/image";
import Link from "next/link";

import type { GalleryCategory } from "@/types/gallery";

type GalleryCategoryCardProps = {
  category: GalleryCategory;
  index: number;
};

export default function GalleryCategoryCard({
  category,
  index,
}: GalleryCategoryCardProps) {
  return (
    <Link href={`/gallery/${category.slug}`} className="group block w-full">
      <div className="w-full overflow-hidden rounded-sm shadow-lg shadow-terracotta/20">
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute inset-0 h-4/5 overflow-hidden">
            <Image
              src={category.coverImage || "/images/gallery/placeholder.avif"}
              alt={category.title}
              fill
              priority={index < 3}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex h-1/5 items-center justify-between gap-3 bg-paper px-4 sm:px-5">
            <h2 className="font-display text-lg leading-tight sm:text-xl">
              {category.title}
            </h2>

            <span className="shrink-0 text-terracotta transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
