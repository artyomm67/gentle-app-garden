import { Link } from "react-router-dom";
import { articles } from "@/data/siteContent";

const ServiceMarquee = () => {
  const items = articles.slice(0, 12);

  return (
    <section id="services" className="overflow-hidden py-8">
      <div className="container mb-5">
        <p className="mb-1 text-sm font-semibold text-primary">Сервисы</p>
        <h2 className="text-2xl font-bold md:text-3xl">Подключаем популярные сервисы</h2>
      </div>

      <div className="relative overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Angled feed — slight skew for dynamic feel */}
        <div className="marquee-track animate-marquee flex w-max gap-4 whitespace-nowrap" style={{ transform: "rotate(-1.5deg)" }}>
          {[...items, ...items].map((item, index) => (
            <Link
              key={`${item.slug}-${index}`}
              to={`/articles/${item.slug}`}
              className="service-pill-glass text-base"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-primary flex-shrink-0" />
              {item.service}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMarquee;
