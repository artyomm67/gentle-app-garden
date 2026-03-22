import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { text: "Подключили ChatGPT Plus за 10 минут. Всё работает, рекомендую!", initials: "АМ", name: "Алексей М.", source: "Яндекс Карты" },
  { text: "Очень удобный сервис. Оплатила Claude и Midjourney без проблем.", initials: "ДК", name: "Дарья К.", source: "Яндекс Карты" },
  { text: "Переживал за безопасность, но всё прошло гладко. Поддержка отвечает быстро.", initials: "МТ", name: "Михаил Т.", source: "Авито" },
  { text: "Уже третий месяц пользуюсь. Каждый раз всё моментально — просто супер.", initials: "ЕВ", name: "Елена В.", source: "Telegram" },
  { text: "Cursor Pro подключили за 5 минут. Лучший сервис для оплаты подписок!", initials: "АС", name: "Артём С.", source: "Авито" },
  { text: "Боялась переводить деньги, но менеджер всё объяснил. Теперь постоянный клиент.", initials: "ОН", name: "Ольга Н.", source: "Яндекс Карты" },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-24">
    <div className="container">
      <p className="text-sm text-primary font-semibold mb-2">Отзывы</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Что говорят клиенты</h2>
      <p className="text-muted-foreground mb-8">Реальные отзывы наших клиентов с проверенных площадок.</p>

      <div className="mb-10 flex flex-wrap gap-3">
        <motion.a
          href="https://www.avito.ru/brands/42fa1c75d7c0ae7dfd81a5a8a151849b?src=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-5 py-2.5 text-sm font-bold text-secondary-foreground transition-all hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.8)]" /> Avito
        </motion.a>
        <motion.a
          href="https://yandex.com/profile/168247323124"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-5 py-2.5 text-sm font-bold text-secondary-foreground transition-all hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.8)]" /> Яндекс
        </motion.a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="glass-card-glow review-card rounded-[1.5rem] p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 fill-primary text-primary icon-glow" />
                ))}
              </div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary shadow-[0_0_16px_hsl(var(--primary)/0.15)]">
                ✓ Проверено
              </span>
            </div>
            <p className="text-foreground mb-6 leading-relaxed">«{r.text}»</p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary font-bold text-sm shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
                {r.initials}
              </div>
              <div>
                <div className="font-bold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.source}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
