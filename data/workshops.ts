
import type { Workshop } from "@/types/workshop";

export const workshops: Workshop[] = [
  {
    slug: "kids-workshop",
    title: "Kids Workshop",
    description:
      "Let your little ones explore their creativity with our fun and hands-on Kids’ Furniture Painting Workshop! Perfect for young artists who love to paint and create, this workshop gives kids the chance to transform their very own mini furniture piece using safe, non-toxic chalk paint. They’ll learn simple painting techniques, play with colors, and bring their imagination to life—all while having a great time! No experience needed, just a love for creativity and a painterly outfit. Let’s make something magical together!",
    image: "/images/workshops/workshop-4.avif",
    imageAlt: "Children's furniture painting workshop",
    details: {
      date: "6th June",
      time: "3:00–5:30 PM",
      venue: "Cups and Cones, Austin",
      availability: "Limited spots available",
    },
    ctaLabel: "Enquire about kids' workshops",
    ctaHref: "/contact",
  },
  {
    slug: "private-masterclass",
    title: "Private Masterclass with JustRestore",
    description:
      "Want a personalized, hands-on learning experience in furniture painting? My Private Masterclass lets you transform a small furniture piece or create a unique canvas masterpiece at your own pace. We’ll cover everything from prepping and sanding to chalk painting, adding stencils and decorative finishes, or even free hand artwork and sealing your piece for a lasting result. Choose between one 4-6 hour session or spread it out over a few days. All materials are provided—just bring your creativity! Ready to create something amazing? Book your private session today.",
    image: "/images/workshops/workshop-3.avif",
    imageAlt: "Private furniture painting masterclass",
    ctaLabel: "Enquire about a private masterclass",
    ctaHref: "/contact",
  },
  {
    slug: "learn-the-art",
    title: "Learn the Art with JustRestore",
    description:
      "Come spend a fun morning with me, painting, getting creative, and learning all the tips and tricks of furniture painting! Whether you’re a beginner or a DIY pro, this workshop will show you everything from prepping and stenciling to creating cool textures and sealing your work of art. And the best part? You’ll get to paint your very own piece of furniture to take home with you! I’ve got you covered with all the supplies you’ll need—paints, tools, coffee, and a yummy pastry to keep the ideas flowing. All you need to bring is your excitement (and maybe a painter-friendly outfit)!",
    image: "/images/workshops/workshop-5.avif",
    imageAlt: "Furniture painting workshop",
    details: {
      date: "March 6",
      time: "9:30 AM–12:30 PM",
      venue: "Cups and Cones, Austin",
      availability: "Limited space — 8 spots available",
    },
    ctaLabel: "Enquire about workshops",
    ctaHref: "/contact",
  },
  {
    slug: "star-painter-workshop",
    title: "Star Painter Workshop",
    description:
      "I’m excited to share that as Annie Sloan’s Star Painter, I’ll be leading an exclusive workshop in collaboration with Annie Sloan paint Stockists where we’ll explore some of my favorite and very effective furniture transformation techniques.",
    image: "/images/workshops/workshop-1.avif",
    imageAlt: "Star Painter furniture painting workshop",
    highlights: [
      "Freehand Cherry Blossoms: Add delicate, flowing florals to your pieces.",
      "Ombré Blending: Achieve smooth, seamless color transitions.",
      "Faux Marbling: Create the timeless elegance of marble using just paint.",
      "Gold Leafing: Incorporate luxurious metallic accents to elevate your designs.",
    ],
    details: {
      date: "April 12",
      time: "10:00 AM–2:30 PM",
      venue: "Silk and Sage Design Studio, Austin",
      availability: "Limited space — 6 spots available",
      contact: "+1 (512) 293 9781",
    },
    ctaLabel: "Call to enquire",
    ctaHref: "tel:+15122939781",
  },
];

