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
    <section id="calculator" className="py-12 md:py-16">
      <div className="container max-w-2xl">
        <p className="text-sm text-primary font-semibold mb-1">Инструменты</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Калькулятор комиссии</h2>

        <div className="glass-card-glow space-y-4 rounded-[1.5rem] p-5 md:p-7">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Введите сумму</label>
            <input
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-2xl font-black text-foreground tabular-nums tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Валюта</label>
            <div className="flex gap-2">
              {currencies.map((c) => (
                <motion.button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className={`flex-1 rounded-xl border py-2.5 text-sm font-bold transition-colors ${
                    currency === c.code
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary/60 border-border text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {c.code}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Rate & Commission — highlighted */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-center">
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Курс</div>
              <div className="text-xl font-black tabular-nums text-foreground">
                {cur.rate} <span className="text-sm font-semibold text-muted-foreground">₽/{cur.code}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-center">
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Комиссия</div>
              <div className="text-lg font-black tabular-nums text-foreground">
                {amount <= 30 ? "1 000 ₽" : "30%"}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">до 30$ — фикс</div>
            </div>
          </div>

          {/* Result */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/8 p-5 md:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />
            <div className="relative flex flex-col items-center gap-1 text-center">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Итоговая цена</span>
              <motion.span
                key={total}
                className="text-5xl md:text-6xl font-black text-foreground tabular-nums tracking-tight"
                initial={{ scale: 1.05, opacity: 0.6 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{ textShadow: "0 0 30px hsl(268 86% 68% / 0.3)" }}
              >
                {total.toLocaleString("ru-RU")} ₽
              </motion.span>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <motion.a
              href="https://t.me/nowsub_ru?direct"
              target="_blank"
              rel="noreferrer"
              className="button-glow flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="h-4 w-4" /> Написать в Telegram
            </motion.a>
            <motion.a
              href="https://t.me/nowsub_bot"
              target="_blank"
              rel="noreferrer"
              className="button-secondary-glow flex items-center justify-center gap-2 rounded-xl border border-primary/25 bg-primary/10 py-3 text-sm font-bold text-foreground"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Bot className="h-4 w-4 text-primary" /> Открыть бота
            </motion.a>
          </div>

          <div className="rounded-xl border border-primary/15 bg-primary/5 p-3 text-sm">
            <span className="font-bold text-primary">Гарантия:</span>{" "}
            <span className="text-muted-foreground">Возврат средств если подписка не активирована</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
