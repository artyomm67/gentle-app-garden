import { Link } from "react-router-dom";
import { articles } from "@/data/siteContent";

/* Service logos/icons mapping — using colored dots + service name with brand-colored glow */
const serviceColors: Record<string, string> = {
  ChatGPT: "#10a37f",
  Claude: "#d97706",
  Midjourney: "#0ea5e9",
  Cursor: "#8b5cf6",
  Figma: "#a259ff",
  Notion: "#e6e6e6",
  Canva: "#00c4cc",
  Zoom: "#2d8cff",
  "Google One": "#4285f4",
  TradingView: "#2962ff",
  DeepSeek: "#6366f1",
  Perplexity: "#22d3ee",
  Runway: "#ff6b6b",
  ElevenLabs: "#f59e0b",
  Windsurf: "#06b6d4",
  Recraft: "#ec4899",
  Pika: "#f97316",
  "Kling AI": "#8b5cf6",
  Leonardo: "#eab308",
  Coze: "#14b8a6",
};

const ServiceMarquee = () => {
  const items = articles.slice(0, 14);

  return (
    <section id="services" className="overflow-hidden py-4 md:py-6">
      <div className="container mb-3">
        <p className="mb-0.5 text-xs font-semibold text-primary uppercase tracking-wider">Сервисы</p>
        <h2 className="text-xl font-bold md:text-2xl">Подключаем популярные сервисы</h2>
      </div>

      <div className="relative overflow-hidden py-3">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

        {/* Transparent angled feed */}
        <div
          className="marquee-track animate-marquee flex w-max gap-3 whitespace-nowrap"
          style={{ transform: "rotate(-1.5deg)" }}
        >
          {[...items, ...items].map((item, index) => {
            const color = serviceColors[item.service] || "hsl(268, 86%, 68%)";
            return (
              <Link
                key={`${item.slug}-${index}`}
                to={`/articles/${item.slug}`}
                className="service-pill-transparent group"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full flex-shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_8px_var(--pill-color)]"
                  style={{
                    backgroundColor: color,
                    "--pill-color": color,
                  } as React.CSSProperties}
                />
                <span className="transition-colors duration-300 group-hover:text-foreground">
                  {item.service}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceMarquee;
