import { Link } from "react-router-dom";
import { articles } from "@/data/siteContent";

const ServiceMarquee = () => {
  const items = articles.slice(0, 12);

  return (
    <section id="services" className="overflow-hidden py-14">
      <div className="container mb-8">
        <p className="mb-2 text-sm font-semibold text-primary">Сервисы</p>
        <h2 className="text-3xl font-bold md:text-4xl">Подключаем популярные сервисы</h2>
      </div>

      <div className="relative overflow-hidden border-y border-border/30 bg-card/20 py-6 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track animate-marquee flex w-max gap-5 whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <Link
              key={`${item.slug}-${index}`}
              to={`/articles/${item.slug}`}
              className="service-pill text-base"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-40 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.7)]" />
              </span>
              {item.service}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMarquee;
