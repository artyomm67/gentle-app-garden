import { Link } from "react-router-dom";
import { articles } from "@/data/siteContent";

const ServiceMarquee = () => {
  const firstRow = articles.slice(0, 10);
  const secondRow = articles.slice(10);

  return (
    <section id="services" className="overflow-hidden py-12">
      <div className="container mb-6">
        <p className="mb-2 text-sm font-semibold text-primary">Сервисы</p>
        <h2 className="text-3xl font-bold md:text-4xl">Подключаем популярные нейросети и сервисы</h2>
      </div>

      <div className="relative overflow-hidden border-y border-border/50 bg-muted/25 py-5 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track animate-marquee flex w-max gap-4 whitespace-nowrap py-2">
          {[...firstRow, ...firstRow].map((item, index) => (
            <Link key={`${item.slug}-${index}`} to={`/articles/${item.slug}`} className="service-pill">
              <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.75)]" />
              {item.service}
            </Link>
          ))}
        </div>

        <div className="marquee-track animate-marquee-reverse mt-4 flex w-max gap-4 whitespace-nowrap py-2">
          {[...secondRow, ...secondRow].map((item, index) => (
            <Link key={`${item.slug}-reverse-${index}`} to={`/articles/${item.slug}`} className="service-pill service-pill-secondary">
              <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_hsl(var(--accent)/0.75)]" />
              {item.service}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMarquee;
