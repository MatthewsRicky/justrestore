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
    <Link href={`/gallery/${category.slug}`} className="group block">
      <div className="">
        <Image
          src={category.coverImage  || "/images/gallery/placeholder.avif"}
          alt={category.title}
          width={800}
          height={800}
          priority={index < 3}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="mx-auto block h-auto w-auto max-w-full transition-transform duration-700 group-hover:scale-[1.02] rounded-lg shadow-lg shadow-amber-500/40"
        />
      </div>

      <div className="mt-5 flex items-start justify-center gap-4">
        <h2 className="font-display text-2xl leading-tight">
          {category.title}
        </h2>

        <span className="mt-1 text-terracotta transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
