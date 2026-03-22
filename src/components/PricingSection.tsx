import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const plans = [
  { name: "ChatGPT Plus", period: "1 мес", price: "2 990 ₽", hot: true },
  { name: "ChatGPT Pro", period: "1 мес", price: "28 990 ₽" },
  { name: "Claude Pro", period: "1 мес", price: "2 990 ₽", hot: true },
  { name: "Midjourney Basic", period: "1 мес", price: "1 690 ₽" },
  { name: "Midjourney Standard", period: "1 мес", price: "4 490 ₽" },
  { name: "Midjourney Pro", period: "1 мес", price: "8 990 ₽" },
  { name: "Cursor Pro", period: "1 мес", price: "2 990 ₽" },
  { name: "Notion Plus", period: "1 мес", price: "1 490 ₽" },
  { name: "Canva Pro", period: "1 мес", price: "1 490 ₽" },
  { name: "Zoom Pro", period: "1 мес", price: "1 990 ₽" },
  { name: "Google One 100GB", period: "1 мес", price: "490 ₽" },
  { name: "TradingView Pro", period: "1 мес", price: "2 290 ₽" },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-24">
    <div className="container">
      <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Тарифы"
          title="Цены на популярные подписки"
          description="Секция сделана как аккуратная SaaS‑таблица: читаемо на десктопе, удобно на мобильном и без визуального шума."
        />
        <motion.a
          href="https://t.me/nowsub_ru?direct"
          target="_blank"
          rel="noreferrer"
          className="button-glow inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Sparkles className="h-4 w-4" /> Заказать подписку
        </motion.a>
      </div>

      <div className="pricing-shell relative overflow-hidden rounded-[2rem] border border-border/60 p-[2px]">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="glass-card relative overflow-hidden rounded-[1.85rem]">
          <div className="grid grid-cols-3 bg-primary/5 px-6 py-4 text-sm font-bold text-muted-foreground">
            <span>Сервис</span>
            <span className="text-center">Период</span>
            <span className="text-right">Цена</span>
          </div>
          {plans.map((p, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-3 items-center border-t border-border/40 px-6 py-4 transition-all duration-300 hover:bg-primary/5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <span className="flex items-center gap-2 font-semibold text-foreground">
                {p.name}
                {p.hot && (
                  <span className="rounded-full border border-primary/30 bg-primary/15 px-2.5 py-0.5 text-xs font-bold text-primary shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                    Хит
                  </span>
                )}
              </span>
              <span className="text-center text-muted-foreground">{p.period}</span>
              <span className="text-right font-bold text-foreground">{p.price}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Нет нужного сервиса? <a href="https://t.me/nowsub_ru?direct" target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">Напишите нам</a> — подключим любой.
      </p>
    </div>
  </section>
);

export default PricingSection;
