import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Calculator, Globe2, Send, Shield, Sparkles } from "lucide-react";
import cardImage from "@/assets/card-purple.png";

const stats = [
  { icon: Globe2, value: "AI + SaaS", label: "Популярные сервисы в одном месте" },
  { icon: Sparkles, value: "Creators / Devs", label: "Сделано для тех, кому важна скорость" },
  { icon: Shield, value: "Прозрачно", label: "Понятный процесс и поддержка без сюрпризов" },
];

const phrases = ["Здесь и сейчас", "Надежно"];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const currentPhrase = useMemo(() => phrases[phraseIndex], [phraseIndex]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 80;
    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const next = currentPhrase.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentPhrase) window.setTimeout(() => setIsDeleting(true), 1200);
      } else {
        const next = currentPhrase.slice(0, Math.max(displayText.length - 1, 0));
        setDisplayText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((v) => (v + 1) % phrases.length);
        }
      }
    }, speed);
    return () => window.clearTimeout(timeout);
  }, [currentPhrase, displayText, isDeleting, phraseIndex]);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        {/* Left */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_0_40px_hsl(var(--primary)/0.12)] md:px-5 md:py-2.5 md:text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Built for creators / developers / teams
          </motion.div>

          <div className="space-y-6">
            <h1 className="max-w-[700px] text-balance text-4xl font-black leading-[1.02] md:text-5xl lg:text-[3.75rem]">
              Оплачивайте зарубежные
              <span className="block text-gradient">AI и SaaS‑сервисы за 2 минуты</span>
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              Для creators, developers и команд из России: быстрый расчет, понятная стоимость и удобный путь к оплате ChatGPT, Claude, Midjourney, Cursor и других сервисов без зарубежной карты.
            </p>

            <div className="glass-card inline-flex min-h-[4.5rem] items-center rounded-[1.5rem] px-5 py-4 md:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Подключение</p>
                <span className="mt-1 block text-2xl font-bold text-foreground md:text-3xl">
                  <span className="typing-cursor">{displayText}</span>
                </span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.a
              href="#calculator"
              className="button-glow inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Calculator className="h-4 w-4" /> Рассчитать стоимость
            </motion.a>
            <motion.a
              href="#process"
              className="button-secondary-glow inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl border border-border bg-secondary/80 px-8 py-4 text-base font-bold text-secondary-foreground"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <ArrowRight className="h-4 w-4" /> Как это работает
            </motion.a>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.a
              href="https://t.me/nowsub_ru?direct"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-primary/8 px-5 py-3 text-sm font-bold text-foreground"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="h-4 w-4 text-primary" /> Написать в Telegram
            </motion.a>
            <motion.a
              href="https://t.me/nowsub_bot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 px-5 py-3 text-sm font-bold text-foreground"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Bot className="h-4 w-4 text-primary" /> Открыть бота
            </motion.a>
          </div>

          {/* Stats */}
          <div className="grid gap-3 md:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card-glow stat-glow rounded-2xl p-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary icon-glow">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-lg font-black md:text-xl">{stat.value}</div>
                <div className="mt-1 text-sm leading-6 text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Card */}
        <motion.div
          className="relative hidden justify-center lg:flex"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 m-auto h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[100px]" />
          <div className="absolute right-12 top-12 h-16 w-16 rounded-full border border-primary/20 bg-primary/8 blur-sm" />
          <div className="absolute left-8 bottom-20 h-12 w-12 rounded-full border border-primary-glow/15 bg-primary-glow/6 blur-sm" />
          <div className="glass-card absolute left-0 top-12 z-20 max-w-[14rem] rounded-[1.5rem] px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Зачем это удобно</p>
            <p className="mt-2 text-sm leading-6 text-foreground/90">Не нужно искать обходные пути: один сервис, понятные шаги и быстрый результат.</p>
          </div>
          <img
            src={cardImage}
            alt="Банковская карта NOWSUB"
            className="hero-float relative z-10 w-[520px] max-w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
