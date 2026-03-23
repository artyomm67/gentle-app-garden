import { motion } from "framer-motion";
import { ArrowLeft, Bot, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SiteBackdrop from "@/components/SiteBackdrop";

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

const PricingPage = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <SiteBackdrop />
    <Header />
    <main className="relative z-10 pt-28 pb-24">
      <div className="container max-w-4xl">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> На главную
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-2 text-sm font-semibold text-primary">Тарифы</p>
          <h1 className="text-3xl font-bold md:text-5xl mb-3">Цены на подписки</h1>
          <p className="max-w-lg text-muted-foreground mb-12">Прозрачные цены без скрытых комиссий. Нет нужного сервиса? Напишите — подключим любой.</p>
        </motion.div>

        <motion.div
          className="pricing-shell relative overflow-hidden rounded-[2rem] border border-border/60 p-[2px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
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
                className="grid grid-cols-3 items-center border-t border-border/40 px-6 py-4 transition-all duration-200 hover:bg-primary/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.03 }}
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
        </motion.div>

        {/* Order CTA */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://t.me/nowsub_ru?direct"
            target="_blank"
            rel="noreferrer"
            className="button-glow inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-primary-foreground"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Sparkles className="h-4 w-4" /> Заказать подписку
          </motion.a>
          <motion.a
            href="https://t.me/nowsub_bot"
            target="_blank"
            rel="noreferrer"
            className="button-secondary-glow inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/80 px-8 py-4 font-bold text-secondary-foreground"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Bot className="h-4 w-4" /> Открыть бота
          </motion.a>
        </motion.div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Нет нужного сервиса? <a href="https://t.me/nowsub_ru?direct" target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">Напишите нам</a> — подключим любой.
        </p>
      </div>
    </main>
  </div>
);

export default PricingPage;
