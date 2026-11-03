
export type Workshop = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  details?: {
    date?: string;
    time?: string;
    venue?: string;
    availability?: string;
    contact?: string;
  };
  highlights?: string[];
  ctaLabel: string;
  ctaHref: string;
};
