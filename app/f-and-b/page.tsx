import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FnBHero from "@/components/segments/FnBHero";
import ProductShowcase from "@/components/common/ProductShowcase";
import IntegrationBadges from "@/components/common/IntegrationBadges";
import TestimonialCarousel from "@/components/common/TestimonialCarousel";
import PricingSection from "@/components/common/PricingSection";
import CTASection from "@/components/common/CTASection";

export default function FnBPage() {
  return (
    <>
      <Navigation />
      <main>
        <FnBHero />
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

