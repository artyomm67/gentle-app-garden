import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Bot, Globe2, Send, Shield, Zap } from "lucide-react";
import cardImage from "@/assets/card-purple.png";

const stats = [
  { icon: Globe2, value: "Оплата", label: "Из любой страны", color: "text-primary" },
  { icon: Zap, value: "5–15 мин", label: "На подключение", color: "text-primary" },
  { icon: Shield, value: "100%", label: "Безопасно", color: "text-primary" },
];

const phrases = ["Здесь и сейчас", "Надежно"];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
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
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-5 py-2.5 text-sm font-semibold text-primary shadow-[0_0_40px_hsl(var(--primary)/0.12)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            NOWSUB · Подключение зарубежных сервисов
          </motion.div>

          <div className="space-y-5">
            <h1 className="max-w-[640px] text-4xl font-black leading-[1.05] md:text-5xl lg:text-[3.5rem]">
              Оплата зарубежных
              <span className="block text-gradient">сервисов за 2 минуты</span>
              <span className="block mt-2 typing-cursor text-foreground/90 text-3xl md:text-4xl">{displayText}</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              Работаем с любыми сервисами без ограничений. Оплата ChatGPT, Claude, Midjourney, Cursor и других из России.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.a
              href="https://t.me/nowsub_ru?direct"
              target="_blank"
              rel="noreferrer"
              className="button-glow inline-flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-8 py-4 font-bold text-primary-foreground"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="h-4 w-4" /> Написать в Telegram
            </motion.a>
            <motion.a
              href="https://t.me/nowsub_bot"
              target="_blank"
              rel="noreferrer"
              className="button-secondary-glow inline-flex items-center justify-center gap-2.5 rounded-2xl border border-border bg-secondary/80 px-8 py-4 font-bold text-secondary-foreground"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Bot className="h-4 w-4" /> Открыть бота
            </motion.a>
            <motion.a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-primary/8 px-6 py-4 font-bold text-foreground"
              whileHover={{ y: -2, scale: 1.02, borderColor: "hsl(268 86% 68% / 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <ArrowDown className="h-4 w-4 text-primary" /> Цены
            </motion.a>
          </div>

          {/* Stats */}
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card-glow rounded-2xl p-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary icon-glow">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-2xl font-black">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
