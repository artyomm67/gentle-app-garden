import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceMarquee from "@/components/ServiceMarquee";
import PricingSection from "@/components/PricingSection";
import CalculatorSection from "@/components/CalculatorSection";
import ProcessSection from "@/components/ProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import ArticlesSection from "@/components/ArticlesSection";
import FAQSection from "@/components/FAQSection";
import CTAFooter from "@/components/CTAFooter";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <>
    <Header />
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
      <ArticlesSection />
    </ScrollReveal>
    <ScrollReveal delay={0.18}>
      <FAQSection />
    </ScrollReveal>
    <ScrollReveal delay={0.2}>
      <CTAFooter />
    </ScrollReveal>
  </>
);

export default Index;
