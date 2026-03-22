import { Send, Bot, Users, Zap, Shield } from "lucide-react";
import cardImage from "@/assets/card-purple.png";

const stats = [
  { icon: Users, value: "2 500+", label: "клиентов" },
  { icon: Zap, value: "5–15 мин", label: "на подключение" },
  { icon: Shield, value: "100%", label: "безопасно" },
];

const HeroSection = () => (
  <section className="relative pt-32 pb-16 overflow-hidden dot-grid">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Работаем 24/7
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
          Подключение{" "}
          <span className="text-gradient">зарубежных сервисов</span>{" "}
          здесь и сейчас
        </h1>

        <p className="text-lg text-muted-foreground max-w-md">
          Быстро, безопасно и по выгодному курсу. Оплата ChatGPT, Claude, Midjourney и других сервисов из России.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="https://t.me/nowsub_ru?direct" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors">
            <Send className="w-4 h-4" /> Написать в Telegram
          </a>
          <a href="https://t.me/nowsub_bot" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold transition-colors border border-border">
            <Bot className="w-4 h-4" /> Открыть бота
          </a>
          <a href="#pricing"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-transparent hover:bg-secondary text-foreground font-semibold transition-colors border border-border">
            Цены
          </a>
        </div>

        <div className="flex gap-8 pt-2">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-bold text-lg">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex justify-center">
        <img src={cardImage} alt="Банковская карта NOWSUB" className="w-[480px] drop-shadow-2xl" />
      </div>
    </div>
  </section>
);

export default HeroSection;
