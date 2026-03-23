import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceMarquee from "@/components/ServiceMarquee";
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
        <CalculatorSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <ProcessSection />
      </ScrollReveal>
      <ScrollReveal delay={0.12}>
        <ReviewsSection />
      </ScrollReveal>
      <ScrollReveal delay={0.14}>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal delay={0.16}>
        <CTAFooter />
      </ScrollReveal>
    </main>
  </div>
);

export default Index;
