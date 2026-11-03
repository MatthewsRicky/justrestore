import type {
  AboutAchievement,
  AboutSection,
  AboutSocialLink,
} from "@/types/about";

export const aboutPortrait = {
  image: "/images/about/sabah bardhan.avif",
  alt: "Sabah Bardhan, the artist behind JustRestore",
};

export const aboutIntroduction = {
  eyebrow: "The artist behind JustRestore",
  title: "Hi, I'm Sabah Bardhan.",
  paragraphs: [
    "Welcome to JustRestore. I am the artist behind every furniture transformation you see here. My journey began in January 2019, when I felt the urge to try something new creatively. Canvas didn't cut it anymore, so I painted some old stools lying around the house—and that was it. The obsession began!",
    "I shared them on social media, and to my surprise, they sold. That was my eureka moment, and JustRestore was born on January 17th, 2019.",
  ],
};

export const aboutSections: AboutSection[] = [
  {
    eyebrow: "Where it all began",
    title: "A little curiosity became a creative journey.",
    paragraphs: [
      "Funny enough, it was my husband who introduced me to Chalk Paint. He found it at a store near the supermarket and came running home with the discovery. I was using whatever I had at home until then, but Chalk Paint changed everything.",
      "I love its versatility. I use it like watercolour for translucent layers or apply it thickly for texture, depending on the artwork. It opened up a whole new world of possibilities for transforming furniture.",
    ],
    image: "/images/gallery/bar-beauties/bar-6.avif",
    imageAlt: "Furniture painting and restoration work by JustRestore",
  },
  {
    eyebrow: "My artistic language",
    title: "Bold, eclectic and full of character.",
    paragraphs: [
      "My style is bold and eclectic, but you'll also catch me painting muted, neutral, elegant and chic makeovers from time to time. It's all about detailed, expressive artwork—a celebration of bold colours, intricate patterns and storytelling through design.",
      "I love working with a vibrant palette and layering techniques to create depth and texture. You'll often find splashes of gold leaf, delicate washes and rich decorative waxes adding that final touch of magic to my pieces. I can dive deep into my creative pool and pull out some beautiful ideas for furniture.",
    ],
    image: "/images/gallery/cabinets-cupboards/cabinets-5.avif",
    imageAlt: "Colourful and intricately decorated furniture artwork",
  },
  {
    eyebrow: "Sources of inspiration",
    title: "Inspiration is everywhere.",
    paragraphs: [
      "My inspiration comes from everywhere—from traditional art forms like Madhubani and Chinoiserie, to Kilim patterns, Japanese koi fish and the majestic cranes I adore painting.",
      "Birds and florals are recurring themes in my work. They allow me to explore fine detail and expressive brushwork in a way that feels meditative and meaningful.",
      "Every stroke has intention—whether it's the soft blend of colours in a floral wash or the precise lines of an ornate accessory in an Indian couple's portrait. My goal is to bring furniture to life with art that not only tells a story but also connects with the space it's placed in. No two pieces are ever the same, and I wouldn't have it any other way.",
    ],
    image: "/images/gallery/chairs-benches/cozy-3.avif",
    imageAlt: "Decorative hand-painted floral and bird motifs",
  },
  {
    eyebrow: "A different kind of journey",
    title: "From travelling the world to transforming furniture.",
    paragraphs: [
      "Before this creative chapter, I was a cabin crew member for 12 years, lucky enough to travel the world. I still draw inspiration from those experiences—cityscapes, costumes, flowers and architecture.",
      "I still go through my photo albums to get the creativity flowing. Sometimes, even a walk in the park with my kids sparks a colour combination!",
    ],
    image: "/images/gallery/sideboards-buffets/sideboard-3.avif",
    imageAlt: "Creative inspiration drawn from travel, colour and architecture",
  },
  {
    eyebrow: "What I love to do",
    title: "Giving furniture a new life.",
    paragraphs: [
      "Most of my projects are commissions, and I'm lucky to work on everything from heirlooms passed through generations to showroom pieces sent straight to me for a custom makeover.",
      "At JustRestore, I specialise in hand-painting and restoring furniture, using a variety of materials such as wood, metal, MDF and glass—even IKEA furniture, which people believe cannot be painted. Whether transforming modern items or restoring antiques, every project is treated with care and creativity.",
      "Sustainability is close to my heart. Saving furniture from landfills and turning it into meaningful pieces is what makes this journey even more special. I focus on redesigning and repurposing pieces to reduce waste while creating unique, personalised designs that reflect your style.",
    ],
    image: "/images/before-after/restoration-7.avif",
    imageAlt: "A furniture restoration project in progress",
  },
  {
    eyebrow: "Sharing what I know",
    title: "Creativity is even better when it's shared.",
    paragraphs: [
      "In addition to my hands-on work, I love teaching. Through group workshops and one-on-one workshops, I share my techniques and help others discover their own creativity. It's incredibly rewarding to watch participants develop new skills and create something meaningful.",
      "One of my proudest moments was painting a striped buffet with hundreds of custom colours. It took seven weeks, endless tape, sleepless nights and lots of measuring. It pushed me creatively and personally, and reminded me how far patience and passion can take you.",
    ],
    image: "/images/workshops/workshop-3.avif",
    imageAlt: "Furniture painting techniques and creative workshop materials",
  },
];

export const aboutClosing = {
  eyebrow: "A few things I'm proud of",
  title: "A journey filled with colour, creativity and recognition.",
  paragraphs: [
    "I'm so honoured to have been Annie Sloan's Painter in Residence in 2021 and now their Star Painter for 2025, teaching workshops across North America. It's truly a dream come true.",
    "At the end of the day, I believe art has no rules—you get to decide what's beautiful. Whether you're just starting or looking for fresh inspiration, I hope my work encourages you to explore, play and create something that's uniquely you.",
  ],
};

export const aboutAchievements: AboutAchievement[] = [
  {
    slug: "star-painter",
    title: "Star Painter for Annie Sloan",
    year: "2025",
    description:
      "I was invited as a Star Painter for Annie Sloan's programme in 2025. This role takes me across North America to host workshops, teaching others the magic of furniture painting and creative transformation. It's a huge privilege to share my knowledge and inspire others to create their own beautiful, personalised pieces.",
    image: "/images/about/star-painter.avif",
    imageAlt: "Sabah Bardhan and her Annie Sloan Star Painter recognition",
    badge: "/images/about/achievement-icon.avif",
  },
  {
    slug: "painter-in-residence",
    title: "Painter in Residence",
    year: "2021",
    description:
      "Being named Annie Sloan's Painter in Residence in 2021 was an incredible honour, especially as the first artist in the Middle East to be invited by Annie Sloan. This experience allowed me to immerse myself fully in the world of furniture painting and share my passion with others. I worked on special projects and inspired creativity in the community. I'm grateful for the opportunity to grow and expand my skills in such a meaningful way.",
    image: "/images/about/painter-in-residence.avif",
    imageAlt: "Sabah Bardhan's Painter in Residence feature",
    badge: "/images/about/achievement-icon.avif",
  },
  {
    slug: "zibra-golden-brush",
    title: "Zibra Golden Brush Awards",
    year: "2019",
    description:
      "I was thrilled to be awarded third place globally at the Zibra Golden Brush Awards in the Multicolor Category. For this project, I painted a sideboard that took eight weeks to complete, dedicating four to six hours a day to meticulously create perfectly straight multicoloured lines in varying thicknesses. The precision and patience required were challenging, but seeing the finished piece come to life made it all worthwhile.",
    image: "/images/about/golden-brush.avif",
    imageAlt:
      "The multicoloured sideboard created for the Zibra Golden Brush Awards",
    badge: "/images/about/achievement-icon.avif",
  },
  {
    slug: "annie-sloan-competition",
    title: "Annie Sloan Middle East Furniture Painting Competition",
    year: "2018",
    description:
      "I was honoured to be one of the top 10 finalists in the Annie Sloan Middle East Furniture Painting Competition. It was a pivotal moment that allowed me to showcase my skills and creativity on a larger stage. Being recognised among so many talented artists in the region further fuelled my passion for transforming furniture into functional art.",
    image: "/images/about/annie-sloan.avif",
    imageAlt:
      "Furniture piece entered in the Annie Sloan Middle East competition",
    badge: "/images/about/achievement-icon.avif",
  },
];

export const mediaRecognition = {
  image: "/images/about/media-recognition.avif",
  imageAlt: "JustRestore media features and publications",
  title: "Media features and recognition",
  paragraphs: [
    "I've been fortunate to be featured in The Colourist magazine several times, where I've shared my journey and passion for furniture painting.",
    "My work has also been highlighted in podcasts, and I was honoured to be interviewed and published in the UAE Times, where I discussed my creative process and vision.",
    "As a speaker for Every Artist's Guide in India, I've had the chance to inspire other artists in their own journeys. I'm also thrilled to be featured by Annie Sloan Home UK and Chalk Paint UK across their social media platforms, where my work continues to be showcased to a global audience.",
    "These opportunities have been truly humbling and have helped me connect with other artists and furniture painting enthusiasts around the world.",
  ],
};

export const aboutSocialLinks: AboutSocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/justrestore/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/15wfe983FZ/",
  },
  {
    label: "Pinterest",
    href: "https://pin.it/4tK0oGgG0",
  },
];
