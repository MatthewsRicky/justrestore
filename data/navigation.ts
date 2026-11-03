export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "The Artist",
    href: "/about-me",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Workshops",
    href: "/workshops",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "FAQs",
    href: "/faq",
  },
];

export const commissionLink = {
  label: "Commission a Piece",
  href: "/contact?type=commission",
};
