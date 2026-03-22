const particles = [
  { left: "6%", top: "14%", size: 10, delay: "0s", duration: "8s" },
  { left: "14%", top: "62%", size: 14, delay: "1.3s", duration: "10s" },
  { left: "26%", top: "22%", size: 8, delay: "0.7s", duration: "7.2s" },
  { left: "43%", top: "76%", size: 12, delay: "2s", duration: "11s" },
  { left: "56%", top: "18%", size: 9, delay: "1.1s", duration: "8.5s" },
  { left: "68%", top: "56%", size: 11, delay: "2.4s", duration: "10.5s" },
  { left: "82%", top: "24%", size: 16, delay: "1.7s", duration: "12s" },
  { left: "90%", top: "72%", size: 10, delay: "2.9s", duration: "9.4s" },
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