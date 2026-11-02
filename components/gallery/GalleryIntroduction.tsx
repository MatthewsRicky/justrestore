import Image from "next/image";

const galleryImages = [
  {
    src: "/images/home/gallery-1.avif",
    alt: "A selection of restored furniture and creative transformations",
  },
  {
    src: "/images/home/gallery-2.avif",
    alt: "A distinctive furniture restoration project",
  },
  {
    src: "/images/home/gallery-3.avif",
    alt: "A collection of creatively restored furniture",
  },
  {
    src: "/images/home/gallery-4.avif",
    alt: "Details from the JustRestore furniture collection",
  },
];

export default function GalleryIntroduction() {
  return (
    <section className="overflow-hidden bg-paper section-padding">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Introduction */}
          <div className="max-w-xl">
            <p className="editorial-label text-terracotta">
              The art of transformation
            </p>

            <h2 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Every piece
              <br />
              has a story
              <span className="italic text-terracotta"> to tell.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Discover a collection of furniture transformations, thoughtful
              restorations and creative pieces. Each project offers a different
              expression of character, craftsmanship and imagination.
            </p>

            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
              Explore the collections and find inspiration in the possibilities
              of giving something a new life.
            </p>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 items-start gap-[0.5] sm:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`flex items-start justify-center ${
                  index === 1 || index === 3 ? "mt-10 sm:mt-16" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={800}
                  priority={index < 2}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 25vw"
                  className="block h-auto w-auto max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
