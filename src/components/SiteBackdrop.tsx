import { useIsMobile } from "@/hooks/use-mobile";

const particles = [
  { left: "5%", top: "12%", size: 3, delay: "0s", duration: "16s" },
  { left: "15%", top: "58%", size: 4, delay: "1.5s", duration: "18s" },
  { left: "28%", top: "20%", size: 2, delay: "0.8s", duration: "14s" },
  { left: "42%", top: "72%", size: 4, delay: "2.2s", duration: "20s" },
  { left: "58%", top: "15%", size: 3, delay: "1.2s", duration: "16s" },
  { left: "70%", top: "52%", size: 5, delay: "2.8s", duration: "18s" },
  { left: "85%", top: "22%", size: 2, delay: "1.8s", duration: "22s" },
  { left: "92%", top: "68%", size: 4, delay: "3.2s", duration: "17s" },
  { left: "35%", top: "85%", size: 3, delay: "4s", duration: "19s" },
  { left: "78%", top: "40%", size: 2, delay: "0.5s", duration: "15s" },
];

const SiteBackdrop = () => {
  const isMobile = useIsMobile();
  const visibleParticles = isMobile ? particles.slice(0, 4) : particles;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Ambient orbs */}
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      {!isMobile && <div className="ambient-orb ambient-orb-3" />}
      
      {/* Particles */}
      {visibleParticles.map((p, i) => (
        <span
          key={i}
          className="site-particle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default SiteBackdrop;
