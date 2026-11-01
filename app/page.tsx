import HomeHero from "@/components/home/HomeHero";
import ArtistIntroduction from "@/components/home/ArtistIntroduction";
import ArtisticPhilosophy from "@/components/home/ArtisticPhilosophy";
import BeforeAfterShowcase from "@/components/home/BeforeAfterShowcase";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import WorkshopPreview from "@/components/home/WorkshopPreview";
import CreativeProcess from "@/components/home/CreativeProcess";
import Testimonials from "@/components/home/Testimonials";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <ArtistIntroduction />

      <ArtisticPhilosophy />

      <BeforeAfterShowcase />

      <FeaturedGallery />

      <WorkshopPreview />

      <CreativeProcess />

      <Testimonials />

      <HomeCTA />
    </>
  );
}
