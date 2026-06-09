import Amenities from "@/components/sections/AmenitiesFooter";
import FloorPlans from "@/components/sections/FloorPlans";
import Hero from "@/components/sections/Hero";
import Lifestyle from "@/components/sections/Lifestyles";
import VirtualTour from "@/components/sections/VirtualTour";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";
import SiteVisitForm from "@/components/forms/SiteVisitForm";
import Lifestyle2 from "@/components/sections/Clubhouse";
import PricingEngine from "@/components/sections/PricingEngine";

export default function Home() {
  return (
   <>
   <Hero/>
   <Lifestyle />
   <VirtualTour />
   <Location />
   <SiteVisitForm />
   <Lifestyle2 />
   <PricingEngine />
   <FloorPlans />
   <Amenities/>
   <Footer />
   
  
   </>
   
  );
}
