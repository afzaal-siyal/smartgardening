import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import WhatsInside from "@/components/WhatsInside";
import EbookMockup from "@/components/EbookMockup";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <WhatsInside />
      <EbookMockup />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}