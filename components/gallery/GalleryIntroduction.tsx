import EditorialImage from "@/components/shared/EditorialImage";

const galleryImages = [
  {
    image: "/images/home/gallery-1.avif",
    alt: "Selected furniture artwork by JustRestore",
    label: "Featured gallery work",
  },
  {
    image: "/images/home/gallery-2.avif",
    alt: "Artistic furniture restoration by JustRestore",
    label: "Furniture transformation",
  },
  {
    image: "/images/home/gallery-3.avif",
    alt: "Creative furniture detailing by JustRestore",
    label: "Artistic details",
  },
  {
    image: "/images/home/gallery-4.avif",
    alt: "Reimagined furniture piece by JustRestore",
    label: "Selected artwork",
  },
];

export default function GalleryIntroduction() {
  return (
    <section className="bg-ivory pb-16 pt-16 sm:pb-20 sm:pt-24">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="editorial-label text-terracotta">
              The JustRestore collection
            </p>

            <h1 className="mt-5 font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
              Art with
              <br />
              <span className="italic text-terracotta">character.</span>
            </h1>
          </div>

          <div className="max-w-xl lg:pb-2">
            <p className="text-base leading-8 text-muted sm:text-lg">
              Explore a collection of furniture transformations, artistic
              details and individual pieces. Each work offers a different
              perspective on what furniture can become.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-5">
          {galleryImages.map((item, index) => (
            <div key={item.image} className={index % 2 === 1 ? "sm:mt-12" : ""}>
              <EditorialImage
                src={item.image}
                showImage
                alt={item.alt}
                label={item.label}
                aspectRatio="5 / 4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
