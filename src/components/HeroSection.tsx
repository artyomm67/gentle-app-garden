import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Globe2, Send, Shield, Zap } from "lucide-react";
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
    <section className="relative overflow-hidden pt-16 pb-6 md:pt-24 md:pb-12">
      <div className="container grid items-center gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left — text */}
        <div className="order-2 lg:order-1">
          <motion.div
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-2">
              <h1 className="max-w-[700px] text-[2.5rem] font-black leading-[1.05] md:text-5xl lg:text-[4rem]">
                Оплата зарубежных
                {!isMobile ? (
                  <span className="block text-gradient">сервисов</span>
                ) : (
                  <span className="block text-primary"> сервисов</span>
                )}
                <span className="block mt-1 typing-cursor text-foreground/90 text-xl md:text-3xl">{displayText}</span>
              </h1>
              <p className="max-w-xl text-sm text-muted-foreground leading-relaxed md:text-base">
                Работаем с любыми сервисами без ограничений. Оплата ChatGPT, Claude, Midjourney, Cursor и других из России.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-2">
              <motion.a
                href="https://t.me/nowsub_ru?direct"
                target="_blank"
                rel="noreferrer"
                className="button-glow inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-2.5 font-bold text-primary-foreground text-sm md:px-6 md:py-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send className="h-4 w-4" /> Написать в Telegram
              </motion.a>
              <motion.a
                href="https://t.me/nowsub_bot"
                target="_blank"
                rel="noreferrer"
                className="button-secondary-glow inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/25 bg-primary/10 px-5 py-2.5 font-bold text-foreground text-sm md:px-6 md:py-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Bot className="h-4 w-4 text-primary" /> Открыть бота
              </motion.a>
              <Link to="/pricing">
                <motion.span
                  className="pricing-btn-glow inline-flex items-center justify-center gap-2 rounded-2xl bg-primary/20 border border-primary/40 px-5 py-2.5 font-bold text-primary text-sm md:px-6 md:py-3"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ArrowRight className="h-4 w-4" /> Цены
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right — Card */}
        <motion.div
          className="relative flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Soft ambient glow behind card */}
          <div className="absolute inset-0 m-auto h-[16rem] w-[16rem] md:h-[22rem] md:w-[22rem] rounded-full card-ambient-glow" />
          <img
            src={cardImage}
            alt="Банковская карта NOWSUB"
            className="hero-float relative z-10 w-[200px] max-w-full md:w-[420px] card-glow-enhanced"
            loading="eager"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="order-3 lg:order-3 lg:col-span-2 lg:max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.35 }}
        >
          <div className="grid gap-2 grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card-glow rounded-2xl p-2.5 md:p-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
              >
                <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-primary/12 text-primary md:h-8 md:w-8">
                  <stat.icon className="h-3.5 w-3.5" />
                </div>
                <div className="text-base font-black md:text-lg">{stat.value}</div>
                <div className="text-[11px] text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
