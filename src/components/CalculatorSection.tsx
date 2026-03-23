import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send } from "lucide-react";

const currencies = [
  { code: "USD", label: "Доллар ($)", rate: 91.77 },
  { code: "EUR", label: "Евро (€)", rate: 99.5 },
  { code: "GBP", label: "Фунт (£)", rate: 116.2 },
];

const CalculatorSection = () => {
  const [amount, setAmount] = useState(10);
  const [currency, setCurrency] = useState("USD");

  const cur = currencies.find((c) => c.code === currency)!;
  const baseRub = amount * cur.rate;
  const commission = amount <= 30 ? 1000 : baseRub * 0.3;
  const total = Math.round(baseRub + commission);

  return (
    <section id="calculator" className="py-20 md:py-24">
      <div className="container max-w-2xl">
        <p className="text-sm text-primary font-semibold mb-2">Инструменты</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Калькулятор комиссии</h2>

        <div className="glass-card-glow space-y-5 rounded-[2rem] p-6 md:p-8">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Введите сумму</label>
            <input
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full rounded-xl border border-border bg-secondary/60 px-5 py-3.5 text-lg font-bold text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Валюта</label>
            <div className="flex gap-2">
              {currencies.map((c) => (
                <motion.button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className={`flex-1 rounded-xl border py-3 text-sm font-bold transition-all ${
                    currency === c.code
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
                      : "bg-secondary/60 border-border text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {c.code}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Result — very prominent */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/40 bg-primary/10 p-6 md:p-8 shadow-[0_0_80px_hsl(var(--primary)/0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary-glow/8" />
            <div className="relative flex flex-col items-center gap-2 text-center">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Итоговая цена</span>
              <motion.span
                key={total}
                className="text-5xl md:text-6xl font-black text-foreground"
                initial={{ scale: 1.08, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{ textShadow: "0 0 40px hsl(268 86% 68% / 0.3)" }}
              >
                {total.toLocaleString("ru-RU")} ₽
              </motion.span>
              <p className="text-xs text-muted-foreground">С учётом комиссии и курса</p>
            </div>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            <motion.a
              href="https://t.me/nowsub_ru?direct"
              target="_blank"
              rel="noreferrer"
              className="button-glow flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-bold text-primary-foreground"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="h-4 w-4" /> Написать в Telegram
            </motion.a>
            <motion.a
              href="https://t.me/nowsub_bot"
              target="_blank"
              rel="noreferrer"
              className="button-secondary-glow flex items-center justify-center gap-2 rounded-xl border border-primary/25 bg-primary/10 py-3.5 font-bold text-foreground shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Bot className="h-4 w-4 text-primary" /> Открыть бота
            </motion.a>
          </div>

          <div className="grid grid-cols-2 gap-2.5 text-sm">
            <div className="rounded-xl bg-secondary/50 p-4">
              <div className="text-muted-foreground mb-1 text-xs font-medium">Курс</div>
              <div className="font-bold">1 {cur.code} = {cur.rate} ₽</div>
            </div>
            <div className="rounded-xl bg-secondary/50 p-4">
              <div className="text-muted-foreground mb-1 text-xs font-medium">Комиссия</div>
              <div className="font-bold">до 30$ — 1 000 ₽</div>
              <div className="font-bold">от 30$ — 30%</div>
            </div>
          </div>

          <div className="rounded-xl border border-primary/15 bg-primary/5 p-4 text-sm animate-breathe">
            <span className="font-bold text-primary">Гарантия:</span>{" "}
            <span className="text-muted-foreground">Возврат средств если подписка не активирована</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
