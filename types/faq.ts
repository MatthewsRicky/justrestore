export type FAQCategory =
  | "All"
  | "Furniture"
  | "Commissions"
  | "Care & Maintenance"
  | "Products & Finishes";

export type FAQ = {
  question: string;
  answer: string[];
  category: Exclude<FAQCategory, "All">;
  bullets?: string[];
  link?: {
    label: string;
    href: string;
  };
};
