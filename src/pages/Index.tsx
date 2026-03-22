import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceMarquee from "@/components/ServiceMarquee";
import CalculatorSection from "@/components/CalculatorSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import CTAFooter from "@/components/CTAFooter";
import ScrollReveal from "@/components/ScrollReveal";
import SiteBackdrop from "@/components/SiteBackdrop";
import StickyMobileCTA from "@/components/StickyMobileCTA";

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
        <ProcessSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <BenefitsSection />
      </ScrollReveal>
      <ScrollReveal delay={0.12}>
        <CalculatorSection />
      </ScrollReveal>
      <ScrollReveal delay={0.14}>
        <PricingSection />
      </ScrollReveal>
      <ScrollReveal delay={0.16}>
        <UseCasesSection />
      </ScrollReveal>
      <ScrollReveal delay={0.18}>
        <ReviewsSection />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal delay={0.22}>
        <CTAFooter />
      </ScrollReveal>
    </main>
    <StickyMobileCTA />
  </div>
);

export default Index;
