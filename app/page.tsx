import Amenities from "@/components/sections/Amenities";
import FloorPlans from "@/components/sections/FloorPlans";
import Hero from "@/components/sections/Hero";
import Lifestyle from "@/components/sections/Lifestyles";
import VirtualTour from "@/components/sections/VirtualTour";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
   <>
   <Hero/>
   <Lifestyle />
   <Amenities/>
   <FloorPlans />
   <VirtualTour />
   <Location />
   <Footer />
   
  
   </>
   
  );
}
