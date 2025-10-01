import AboutSection from "./AboutSection/AboutSection";
import HeroSection from "./HeroSection/HeroSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import SponsorAndDonorSection from "./SponsorAndDonorSection/SponsorAndDonorSection";


export default function Landing() {
  return (
    <div>
      {/* this is landing page */}
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <SponsorAndDonorSection />
    </div>
  );
}