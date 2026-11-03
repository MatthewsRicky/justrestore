import AboutIntroduction from "@/components/about/AboutIntroduction";
import AboutStory from "@/components/about/AboutStory";
import AboutAchievements from "@/components/about/AboutAchievements";

export const metadata = {
  title: "About Sabah Bardhan | JustRestore",
  description:
    "Meet Sabah Bardhan, the artist behind JustRestore. Discover her furniture painting journey, artistic influences, restoration philosophy and achievements.",
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
