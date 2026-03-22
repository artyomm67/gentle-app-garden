import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceMarquee from "@/components/ServiceMarquee";
import PricingSection from "@/components/PricingSection";
import CalculatorSection from "@/components/CalculatorSection";
import ProcessSection from "@/components/ProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import CTAFooter from "@/components/CTAFooter";
import ScrollReveal from "@/components/ScrollReveal";
import SiteBackdrop from "@/components/SiteBackdrop";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <SiteBackdrop />
    <Header />
    <main className="relative z-10">
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <ServiceMarquee />
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <PricingSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <CalculatorSection />
      </ScrollReveal>
      <ScrollReveal delay={0.12}>
        <ProcessSection />
      </ScrollReveal>
      <ScrollReveal delay={0.14}>
        <ReviewsSection />
      </ScrollReveal>
      <ScrollReveal delay={0.16}>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal delay={0.18}>
        <CTAFooter />
      </ScrollReveal>
    </main>
  </div>
);

export default Index;
