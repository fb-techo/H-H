import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import PropertyDevHero from "@/components/segments/PropertyDevHero";
import ProductShowcase from "@/components/common/ProductShowcase";
import IntegrationBadges from "@/components/common/IntegrationBadges";
import TestimonialCarousel from "@/components/common/TestimonialCarousel";
import PricingSection from "@/components/common/PricingSection";
import CTASection from "@/components/common/CTASection";

export default function PropertyDevelopersPage() {
  return (
    <>
      <Navigation />
      <main>
        <PropertyDevHero />
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

