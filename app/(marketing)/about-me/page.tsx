import type { Metadata } from "next";
import { getCanonicalMetadata } from "@/lib/seo";

import AboutIntroduction from "@/components/about/AboutIntroduction";
import AboutStory from "@/components/about/AboutStory";
import AboutAchievements from "@/components/about/AboutAchievements";

export const metadata: Metadata = {

  ...getCanonicalMetadata("/about-me"),
  title: "About Sabah Bardhan",
  description:
    "Meet Sabah Bardhan, the artist behind JustRestore. Discover her furniture painting journey, artistic influences, creative approach and achievements.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntroduction />
      <AboutStory />
      <AboutAchievements />
    </>
  );
}
