import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "@/components/shared/EditorialImage";
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
      <div className="relative overflow-hidden">
        <EditorialImage
          src={category.coverImage}
          showImage={Boolean(category.coverImage)}
          alt={`${category.title} portfolio collection`}
          label={category.title}
          aspectRatio={index % 3 === 0 ? "4 / 5" : "5 / 4"}
          className="transition-transform duration-700 group-hover:scale-[1.015]"
        />

        <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-ivory text-ink transition-colors duration-300 group-hover:bg-terracotta group-hover:text-white">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="editorial-label text-terracotta">
            Collection {String(index + 1).padStart(2, "0")}
          </p>

          <h2 className="mt-2 font-display text-2xl leading-tight transition-colors group-hover:text-terracotta sm:text-3xl">
            {category.title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
