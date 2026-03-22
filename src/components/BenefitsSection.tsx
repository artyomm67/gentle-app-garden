import { motion } from "framer-motion";
import { Bot, Sparkles, Zap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const benefits = [
  {
    icon: Zap,
    title: "Скорость без ожидания",
    description: "Быстрый старт без длинной переписки: понятный поток, быстрый расчет и активация в течение минут.",
    stat: "5–15 мин",
  },
  {
    icon: Sparkles,
    title: "Простой путь к оплате",
    description: "Большие понятные действия, аккуратные подсказки и прозрачная стоимость без лишнего шума.",
    stat: "1 окно",
  },
  {
    icon: Bot,
    title: "Автоматизация и поддержка",
    description: "Бот, Telegram и готовые гайды помогают быстро повторять оплаты и находить нужный сервис.",
    stat: "24/7 flow",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 md:py-24">
    <div className="container">
      <SectionHeader
        eyebrow="Преимущества"
        title="Сделано как современный SaaS‑сервис: быстро, понятно и без лишнего трения"
        description="Интерфейс ведет к первому действию сразу: рассчитать стоимость, выбрать сервис и перейти в нужный канал без перегруза экрана."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            className="glass-card-glow rounded-[1.75rem] p-6 md:p-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary icon-glow">
                <benefit.icon className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {benefit.stat}
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;