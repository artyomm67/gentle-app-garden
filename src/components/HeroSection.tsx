import { useEffect, useState } from "react";
import { ArrowDown, Bot, Send, Shield, Sparkles, Users, Zap } from "lucide-react";
import cardImage from "@/assets/card-purple.png";

const stats = [
  { icon: Users, value: "2 500+", label: "клиентов" },
  { icon: Zap, value: "5–15 мин", label: "на подключение" },
  { icon: Shield, value: "100%", label: "безопасно" },
];

const phrases = ["здесь и сейчас", "надежно"];

const heroParticles = [
  { left: "10%", top: "14%", size: 7, delay: "0s", duration: "8.8s" },
  { left: "22%", top: "70%", size: 10, delay: "1.4s", duration: "10s" },
  { left: "45%", top: "24%", size: 6, delay: "0.8s", duration: "8.2s" },
  { left: "74%", top: "18%", size: 9, delay: "1.9s", duration: "9.8s" },
  { left: "84%", top: "62%", size: 7, delay: "2.2s", duration: "11.4s" },
];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 60 : 90;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const next = currentPhrase.slice(0, displayText.length + 1);
        setDisplayText(next);

        if (next === currentPhrase) {
          window.setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        const next = currentPhrase.slice(0, Math.max(displayText.length - 1, 0));
        setDisplayText(next);

        if (next.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((value) => (value + 1) % phrases.length);
        }
      }
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 dot-grid">
      {heroParticles.map((particle, index) => (
        <span
          key={index}
          className="site-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      <div className="container grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary shadow-[0_0_32px_hsl(var(--primary)/0.15)]">
            <Sparkles className="h-4 w-4" /> Работаем ежедневно 9:00–23:00 МСК
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] md:text-5xl lg:text-6xl">
              Подключение
              <span className="block text-gradient">зарубежных сервисов</span>
              <span className="block typing-cursor text-foreground/95">{displayText}</span>
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              Быстро, безопасно и по выгодному курсу. Оплата ChatGPT, Claude, Midjourney, Cursor и других сервисов из России.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
            <div className="flex flex-col gap-3 sm:min-w-[260px]">
              <a href="https://t.me/nowsub_ru?direct" target="_blank" rel="noreferrer" className="button-glow inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                <Send className="h-4 w-4" /> Написать в Telegram
              </a>
              <a href="/#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-6 py-4 font-semibold text-foreground transition-colors hover:bg-secondary">
                <ArrowDown className="h-4 w-4 text-primary" /> Цены
              </a>
            </div>

            <a href="https://t.me/nowsub_bot" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-4 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
              <Bot className="h-4 w-4" /> Открыть бота
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-[1.25rem] p-4">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-2xl font-black">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden justify-center lg:flex">
          <div className="absolute inset-0 m-auto h-[26rem] w-[26rem] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-primary/30 bg-primary/10 blur-sm" />
          <img src={cardImage} alt="Банковская карта NOWSUB с мягкой фиолетовой подсветкой" className="hero-float relative z-10 w-[520px] max-w-full drop-shadow-[0_30px_120px_hsl(var(--primary)/0.45)]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
