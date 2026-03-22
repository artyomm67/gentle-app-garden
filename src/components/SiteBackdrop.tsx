const particles = [
  { left: "8%", top: "16%", size: 8, delay: "0s", duration: "8s" },
  { left: "18%", top: "62%", size: 10, delay: "1.3s", duration: "10s" },
  { left: "31%", top: "28%", size: 7, delay: "0.7s", duration: "9s" },
  { left: "47%", top: "76%", size: 9, delay: "2s", duration: "11s" },
  { left: "59%", top: "18%", size: 6, delay: "1.1s", duration: "8.5s" },
  { left: "73%", top: "56%", size: 8, delay: "2.4s", duration: "10.5s" },
  { left: "87%", top: "22%", size: 11, delay: "1.7s", duration: "12s" },
];

const SiteBackdrop = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
    <div className="ambient-orb ambient-orb-1" />
    <div className="ambient-orb ambient-orb-2" />
    <div className="ambient-orb ambient-orb-3" />
    {particles.map((particle, index) => (
      <span
        key={index}
        className="site-particle"
        style={{
          left: particle.left,
          top: particle.top,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          animationDelay: particle.delay,
          animationDuration: particle.duration,
        }}
      />
    ))}
  </div>
);

export default SiteBackdrop;