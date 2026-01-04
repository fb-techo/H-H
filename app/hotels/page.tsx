import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import HotelHero from "@/components/segments/HotelHero";
import ProductShowcase from "@/components/common/ProductShowcase";
import IntegrationBadges from "@/components/common/IntegrationBadges";
import TestimonialCarousel from "@/components/common/TestimonialCarousel";
import PricingSection from "@/components/common/PricingSection";
import CTASection from "@/components/common/CTASection";

export default function HotelsPage() {
  return (
    <>
      <Navigation />
      <main>
        <HotelHero />
        <ProductShowcase />
        <IntegrationBadges />
        <TestimonialCarousel />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

