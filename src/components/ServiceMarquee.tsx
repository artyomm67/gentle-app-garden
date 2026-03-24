import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { articles } from "@/data/siteContent";

/* Service logos as colored initials with brand-inspired colors */
const serviceColors: Record<string, string> = {
  ChatGPT: "#10a37f",
  Claude: "#d4a574",
  Canva: "#00c4cc",
  Zoom: "#2d8cff",
  Figma: "#f24e1e",
  Notion: "#ffffff",
  "Google One": "#4285f4",
  TradingView: "#2962ff",
  Midjourney: "#ffffff",
  Cursor: "#ffffff",
  Coze: "#5b6ef5",
  Recraft: "#ff6b35",
  DeepSeek: "#4d6bfe",
  Perplexity: "#20808d",
  Runway: "#ffffff",
  ElevenLabs: "#ffffff",
  Windsurf: "#36b5a0",
  Pika: "#8b5cf6",
  "Kling AI": "#ff4757",
  Leonardo: "#8b5cf6",
};

const ServiceMarquee = () => {
  const items = articles.slice(0, 14);
  const row1 = items.slice(0, 7);
  const row2 = items.slice(7, 14);

  return (
    <section id="services" className="overflow-hidden py-6 md:py-8">
      <div className="container mb-4">
        <p className="mb-0.5 text-sm font-semibold text-primary">Сервисы</p>
        <h2 className="text-2xl font-bold md:text-3xl">Подключаем популярные сервисы</h2>
      </div>

      <div className="relative overflow-hidden py-3 space-y-3">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 — scrolls left */}
        <div className="marquee-row">
          <div className="marquee-track animate-marquee flex w-max gap-3">
            {[...row1, ...row1, ...row1].map((item, index) => (
              <ServicePill key={`r1-${item.slug}-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div className="marquee-row">
          <div className="marquee-track animate-marquee-reverse flex w-max gap-3">
            {[...row2, ...row2, ...row2].map((item, index) => (
              <ServicePill key={`r2-${item.slug}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicePill = ({ item }: { item: (typeof articles)[0] }) => {
  const color = serviceColors[item.service] || "#a78bfa";

  return (
    <Link to={`/articles/${item.slug}`}>
      <motion.div
        className="service-card-glass group"
        whileHover={{ y: -3, scale: 1.03 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Logo circle */}
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-sm font-black"
          style={{ background: `${color}20`, color }}
        >
          {item.service.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
            {item.service}
          </span>
          <span className="text-[10px] text-muted-foreground">{item.category}</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceMarquee;
