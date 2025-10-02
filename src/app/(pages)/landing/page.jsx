
import AdoptionSection from "./(component)/adoption/adoptionSection";
import OfferSection from "./(component)/offer/offerSection";
import CareRequirements from "./(component)/requirements/careRequirements";
import SupportHero from "./(component)/support/supportHero";
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

      <AdoptionSection />
      <OfferSection />
      <SupportHero />
      <CareRequirements />
    </div>
  );
}