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
  <section id="reviews" className="py-20 md:py-24">
    <div className="container">
      <p className="text-sm text-primary font-semibold mb-2">Отзывы</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Что говорят клиенты</h2>
      <p className="text-muted-foreground mb-8">Реальные отзывы наших клиентов с проверенных площадок.</p>

      {/* Platform buttons — larger, centered */}
      <div className="mb-10 flex flex-wrap justify-center gap-4">
        <motion.a
          href="https://www.avito.ru/brands/42fa1c75d7c0ae7dfd81a5a8a151849b?src=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/10 px-8 py-4 text-base font-bold text-foreground transition-all hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)]" /> Отзывы на Avito
        </motion.a>
        <motion.a
          href="https://yandex.com/profile/168247323124"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/10 px-8 py-4 text-base font-bold text-foreground transition-all hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)]" /> Отзывы на Яндекс
        </motion.a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="glass-card-glow review-card rounded-[1.25rem] p-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="h-3.5 w-3.5 fill-primary text-primary icon-glow" />
                ))}
              </div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                ✓ Проверено
              </span>
            </div>
            <p className="text-sm text-foreground mb-4 leading-relaxed">«{r.text}»</p>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary font-bold text-xs">
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
