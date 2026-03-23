import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Bot, Globe2, Send, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import cardImage from "@/assets/card-purple.png";

const stats = [
  { icon: Globe2, value: "Оплата", label: "Из любой страны" },
  { icon: Zap, value: "5–10 мин", label: "На подключение" },
  { icon: Shield, value: "100%", label: "Безопасность" },
];

const phrases = ["Здесь и сейчас", "Надежно"];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const isMobile = useIsMobile();

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
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <motion.div
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-semibold text-primary md:px-5 md:py-2.5 md:text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            NOWSUB · Подключение зарубежных сервисов
          </motion.div>

          <div className="space-y-4">
            <h1 className="max-w-[640px] text-3xl font-black leading-[1.08] md:text-5xl lg:text-[3.5rem]">
              Оплата зарубежных
              {!isMobile ? (
                <span className="block text-gradient">сервисов</span>
              ) : (
                <span className="block text-primary"> сервисов</span>
              )}
              <span className="block mt-2 typing-cursor text-foreground/90 text-2xl md:text-4xl">{displayText}</span>
            </h1>
            <p className="max-w-xl text-base text-muted-foreground leading-relaxed md:text-lg">
              Работаем с любыми сервисами без ограничений. Оплата ChatGPT, Claude, Midjourney, Cursor и других из России.
            </p>
          </div>

          {/* CTAs — reordered: Telegram, Bot, Prices */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <motion.a
              href="https://t.me/nowsub_ru?direct"
              target="_blank"
              rel="noreferrer"
              className="button-glow inline-flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 font-bold text-primary-foreground md:px-8 md:py-4"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="h-4 w-4" /> Написать в Telegram
            </motion.a>
            <motion.a
              href="https://t.me/nowsub_bot"
              target="_blank"
              rel="noreferrer"
              className="button-secondary-glow inline-flex items-center justify-center gap-2.5 rounded-2xl border border-primary/30 bg-primary/10 px-7 py-3.5 font-bold text-foreground md:px-8 md:py-4 shadow-[0_0_30px_hsl(var(--primary)/0.12)]"
              whileHover={{ y: -2, scale: 1.02, borderColor: "hsl(268 86% 68% / 0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Bot className="h-4 w-4 text-primary" /> Открыть бота
            </motion.a>
            <Link to="/pricing">
              <motion.span
                className="button-glow inline-flex items-center justify-center gap-2 rounded-2xl bg-primary/15 border border-primary/30 px-6 py-3.5 font-bold text-primary md:px-8 md:py-4 shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
                whileHover={{ y: -2, scale: 1.02, boxShadow: "0 0 60px hsl(268 86% 68% / 0.25)" }}
                whileTap={{ scale: 0.97 }}
              >
                <ArrowDown className="h-4 w-4" /> Цены
              </motion.span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid gap-2.5 grid-cols-3 md:gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card-glow rounded-2xl p-4 md:p-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              >
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/12 text-primary icon-glow md:mb-3 md:h-10 md:w-10">
                  <stat.icon className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div className="text-xl font-black md:text-2xl">{stat.value}</div>
                <div className="text-xs text-muted-foreground md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Card with enhanced glow */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 m-auto h-[22rem] w-[22rem] rounded-full bg-primary/20 blur-[80px] md:h-[28rem] md:w-[28rem] md:blur-[100px]" />
          <div className="absolute inset-0 m-auto h-[14rem] w-[14rem] rounded-full bg-primary-glow/15 blur-[60px] md:h-[18rem] md:w-[18rem]" />
          <img
            src={cardImage}
            alt="Банковская карта NOWSUB"
            className="hero-float relative z-10 w-[280px] max-w-full md:w-[520px]"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
