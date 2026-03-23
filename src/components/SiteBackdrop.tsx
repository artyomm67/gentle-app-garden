import { useIsMobile } from "@/hooks/use-mobile";

const particles = [
  { left: "5%", top: "12%", size: 4, delay: "0s", duration: "14s" },
  { left: "15%", top: "58%", size: 5, delay: "1.5s", duration: "16s" },
  { left: "28%", top: "20%", size: 3, delay: "0.8s", duration: "12s" },
  { left: "42%", top: "72%", size: 5, delay: "2.2s", duration: "18s" },
  { left: "58%", top: "15%", size: 4, delay: "1.2s", duration: "14s" },
  { left: "70%", top: "52%", size: 6, delay: "2.8s", duration: "16s" },
  { left: "85%", top: "22%", size: 3, delay: "1.8s", duration: "20s" },
  { left: "92%", top: "68%", size: 5, delay: "3.2s", duration: "15s" },
];

const SiteBackdrop = () => {
  const isMobile = useIsMobile();
  const visibleParticles = isMobile ? particles.slice(0, 4) : particles;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
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
