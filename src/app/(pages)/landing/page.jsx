import AdoptionSection from "./(component)/adoption/adoptionSection";
import OfferSection from "./(component)/offer/offerSection";
import CareRequirements from "./(component)/requirements/careRequirements";
import SupportHero from "./(component)/support/supportHero";



export default function Landing() {
  return (
    <div>
    
      <AdoptionSection />
      <OfferSection />
      <SupportHero />
      <CareRequirements />
    </div>
  );
}