import GalleryIntroduction from "@/components/gallery/GalleryIntroduction";
import GalleryCategoryCard from "@/components/gallery/GalleryCategoryCard";
import { galleryCategories } from "@/data/gallery/categories";

export const metadata = {
  title: "Gallery | JustRestore",
  description:
    "Explore the JustRestore furniture transformations, restorations and creative collections.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryIntroduction />

      <section className="section-padding bg-ivory">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="editorial-label text-terracotta">
              Explore the collections
            </p>

            <h1 className="mt-5 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
              Find something
              <br />
              <span className="italic text-terracotta">extraordinary.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Browse the collections and discover the different ways furniture,
              objects and interiors can be given a new personality.
            </p>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {galleryCategories.map((category, index) => (
              <GalleryCategoryCard
                key={category.slug}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
