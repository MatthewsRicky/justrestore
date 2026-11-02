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
  slug: string;
  category: string;
  title: string;
  description?: string;
  thumbnail: GalleryImage;
  images: GalleryImage[];
  featured?: boolean;
};
