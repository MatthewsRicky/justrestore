export type GalleryProjectLayout = "regular" | "wide" | "tall" | "large";

export type GalleryCategory = {
  slug: string;
  title: string;
  description?: string;
  coverImage?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryAsset = {
  slug: string;
  src: string;
  alt: string;
};

export type GalleryProject = {
  // Keep your existing properties
  slug: string;
  category: string;
  title: string;
  description?: string;
  images: GalleryImage[];
  thumbnail: {
    src: string;
    alt: string;
    caption?: string;
  };
  layout?: GalleryProjectLayout;
  featured?: boolean;
};
