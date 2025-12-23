import About from "@/components/About";
import ContactSection from "@/components/Contact";
import SatelliteCoverageSection from "@/components/Coverage";
import Footer from "@/components/Footer";
import OFBSWebsite from "@/components/Hero";
import MarketsWeCover from "@/components/Market";
import HeroSection from "@/components/Navbar";
import PartnersCarousel from "@/components/Patners";
import OurServices from "@/components/ServicesSection";

export default function Home() {
  return (
 <>
 <HeroSection />
 <OFBSWebsite />
 <OurServices/>
 <About/>
 <MarketsWeCover />
 <SatelliteCoverageSection/>
 <PartnersCarousel />
 <ContactSection/>
 <Footer />
 </>
  );
}
