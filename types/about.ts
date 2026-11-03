export type AboutSocialLink = {
  label: string;
  href: string;
};

export type AboutAchievement = {
  slug: string;
  title: string;
  year?: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
};

export type AboutSection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};
