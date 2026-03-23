import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { articles } from "@/data/siteContent";
import { ArrowRight } from "lucide-react";

// Group articles by category
const categoryOrder = ["Популярное", "AI", "Дизайн", "Работа", "Продуктивность", "Графика", "Dev tools", "Видео", "Аудио", "Финансы", "Сервисы"];

const grouped = categoryOrder.reduce<Record<string, typeof articles>>((acc, cat) => {
  const items = articles.filter((a) => a.category === cat);
  if (items.length > 0) acc[cat] = items;
  return acc;
}, {});

const ServiceMarquee = () => {
  return (
    <section id="services" className="py-8 md:py-12">
      <div className="container">
        <div className="mb-6">
          <p className="mb-1 text-sm font-semibold text-primary">Сервисы</p>
          <h2 className="text-2xl font-bold md:text-3xl">Подключаем популярные сервисы</h2>
        </div>

        <div className="space-y-4">
          {Object.entries(grouped).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: catIdx * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary/70">{category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/articles/${item.slug}`}
                    className="service-pill-glass group text-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_8px_hsl(268_86%_68%/0.6)]" />
                    <span className="transition-colors duration-200 group-hover:text-foreground">{item.service}</span>
                    <ArrowRight className="h-3 w-3 text-primary/0 transition-all duration-200 group-hover:text-primary/60 -ml-1 group-hover:ml-0" />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMarquee;
