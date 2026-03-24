import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceMarquee from "@/components/ServiceMarquee";
import CalculatorSection from "@/components/CalculatorSection";
import ProcessSection from "@/components/ProcessSection";
import CTAFooter from "@/components/CTAFooter";
import ScrollReveal from "@/components/ScrollReveal";
import SiteBackdrop from "@/components/SiteBackdrop";

const Index = () => {
  const location = useLocation();

  // Scroll to top on mobile page load for "refresh" feel
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.key]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteBackdrop />
      <Header />
      <main className="relative z-10">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal delay={0.02}>
          <ServiceMarquee />
        </ScrollReveal>
        <ScrollReveal delay={0.03}>
          <CalculatorSection />
        </ScrollReveal>
        <ScrollReveal delay={0.04}>
          <ProcessSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <CTAFooter />
        </ScrollReveal>
      </main>
    </div>
  );
};

export default Index;
