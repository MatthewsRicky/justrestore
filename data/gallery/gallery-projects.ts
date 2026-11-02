import type { GalleryAsset } from "@/types/gallery";

type NumberedGalleryCollection = {
  directory: string;
  prefix: string;
  count: number;
  altLabel: string;
};



function createGalleryImages({
  directory,
  prefix,
  count,
  altLabel,
}: NumberedGalleryCollection): GalleryAsset[] {
  return Array.from({ length: count }, (_, index) => {
    const imageNumber = index + 1;
    const imageName = `${prefix}-${imageNumber}.avif`;

    return {
      slug: `${prefix}-${imageNumber}`,
      src: `${directory}/${imageName}`,
      alt: `${altLabel} — gallery photograph ${imageNumber}`,
    };
  });
}

export const galleryImagesByCategory: Record<string, GalleryAsset[]> = {
  "transformation-magic": createGalleryImages({
    directory: "/images/before-after",
    prefix: "restoration",
    count: 21,
    altLabel: "Before and after furniture transformation",
  }),

  "sideboards-buffets": createGalleryImages({
    directory: "/images/gallery/sideboards-buffets",
    prefix: "sideboard",
    count: 31,
    altLabel: "Restored and painted sideboard or buffet",
  }),

  "bar-beauties": createGalleryImages({
    directory: "/images/gallery/bar-beauties",
    prefix: "bar",
    count: 12,
    altLabel: "Creative bar furniture",
  }),

  "tables-with-a-twists": createGalleryImages({
    directory: "/images/gallery/tables-twist",
    prefix: "table",
    count: 26,
    altLabel: "Restored and creatively painted table",
  }),

  "kids-furniture": createGalleryImages({
    directory: "/images/gallery/playful-kids",
    prefix: "play",
    count: 18,
    altLabel: "Playful children's furniture",
  }),

  "cabinets-cupboards": createGalleryImages({
    directory: "/images/gallery/cabinets-cupboards",
    prefix: "cabinets",
    count: 17,
    altLabel: "Restored cabinet or cupboard",
  }),

  "drawers-with-character": createGalleryImages({
    directory: "/images/gallery/drawers",
    prefix: "drawers",
    count: 19,
    altLabel: "Restored and painted chest of drawers",
  }),

  "bedroom-bliss": createGalleryImages({
    directory: "/images/gallery/bedroom-bliss",
    prefix: "bliss",
    count: 15,
    altLabel: "Bedroom furniture restoration",
  }),

  "outdoor-oasis": createGalleryImages({
    directory: "/images/gallery/outdoor-oasis",
    prefix: "oasis",
    count: 9,
    altLabel: "Outdoor furniture restoration",
  }),

  "legacy-restorations": createGalleryImages({
    directory: "/images/gallery/legacy-restorations",
    prefix: "legacy",
    count: 14,
    altLabel: "Legacy furniture restoration",
  }),

  "chairs-benches": createGalleryImages({
    directory: "/images/gallery/chairs-benches",
    prefix: "cozy",
    count: 14,
    altLabel: "Restored chair or bench",
  }),

  "desk-with-stories": createGalleryImages({
    directory: "/images/gallery/desk-with-stories",
    prefix: "desk",
    count: 9,
    altLabel: "Restored and creatively painted desk",
  }),

  "eclectic-creations": createGalleryImages({
    directory: "/images/gallery/eclectic-creations",
    prefix: "eclectic",
    count: 18,
    altLabel: "Eclectic furniture and creative restoration",
  }),

  "musical-masterpieces": createGalleryImages({
    directory: "/images/gallery/musical-masterpieces",
    prefix: "music",
    count: 3,
    altLabel: "Musical instrument restoration",
  }),

  "wall-art-wonders": createGalleryImages({
    directory: "/images/gallery/wall-art-wonders",
    prefix: "art",
    count: 13,
    altLabel: "Decorative wall art",
  }),

  "my-work-in-your-homes": createGalleryImages({
    directory: "/images/gallery/work-in-your-homes",
    prefix: "work",
    count: 13,
    altLabel: "JustRestore work displayed in a home",
  }),
};

export function getGalleryImagesByCategory(
  categorySlug: string,
): GalleryAsset[] {
  return galleryImagesByCategory[categorySlug] ?? [];
}
