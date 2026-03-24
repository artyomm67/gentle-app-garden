import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceMarquee from "@/components/ServiceMarquee";
import CalculatorSection from "@/components/CalculatorSection";
import ProcessSection from "@/components/ProcessSection";
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
      <ScrollReveal delay={0.03}>
        <ServiceMarquee />
      </ScrollReveal>
      <ScrollReveal delay={0.04}>
        <CalculatorSection />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <ProcessSection />
      </ScrollReveal>
      <ScrollReveal delay={0.06}>
        <CTAFooter />
      </ScrollReveal>
    </main>
  </div>
);

export default Index;
