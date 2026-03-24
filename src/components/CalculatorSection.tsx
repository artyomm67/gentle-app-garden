import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send } from "lucide-react";

const currencies = [
  { code: "USD", label: "Доллар ($)", symbol: "$", rate: 91.77 },
  { code: "EUR", label: "Евро (€)", symbol: "€", rate: 99.5 },
  { code: "GBP", label: "Фунт (£)", symbol: "£", rate: 116.2 },
  { code: "CHF", label: "Франк (₣)", symbol: "₣", rate: 105.3 },
  { code: "JPY", label: "Иена (¥)", symbol: "¥", rate: 0.61 },
  { code: "TRY", label: "Лира (₺)", symbol: "₺", rate: 2.65 },
];

const CalculatorSection = () => {
  const [amount, setAmount] = useState(10);
  const [currency, setCurrency] = useState("USD");

  const cur = currencies.find((c) => c.code === currency)!;
  const baseRub = amount * cur.rate;
  const commission = amount <= 30 ? 1000 : baseRub * 0.3;
  const total = Math.round(baseRub + commission);

  return (
    <section id="calculator" className="py-6 md:py-10">
      <div className="container max-w-2xl">
        <p className="text-xs text-primary font-semibold mb-0.5 uppercase tracking-wider">Инструменты</p>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Калькулятор комиссии</h2>

        <div className="glass-card-glow space-y-3 rounded-[1.5rem] p-4 md:p-6">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">Введите сумму</label>
            <input
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-3xl font-black text-foreground tabular-nums tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">Валюта</label>
            <div className="grid grid-cols-3 gap-1.5 md:grid-cols-6">
              {currencies.map((c) => (
                <motion.button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className={`rounded-xl border py-2 text-sm font-bold transition-colors ${
                    currency === c.code
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_hsl(268_86%_68%/0.3)]"
                      : "bg-secondary/60 border-border text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {c.code}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Rate & Commission — large and prominent */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-2xl border border-primary/25 bg-primary/8 p-4 text-center">
              <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Курс</div>
              <div className="text-2xl md:text-3xl font-black tabular-nums text-foreground">
                {cur.rate}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">₽ за 1 {cur.code}</div>
            </div>
            <div className="rounded-2xl border border-primary/25 bg-primary/8 p-4 text-center">
              <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Комиссия</div>
              <div className="text-2xl md:text-3xl font-black tabular-nums text-foreground">
                {amount <= 30 ? "1 000 ₽" : "30%"}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">до 30$ — фикс</div>
            </div>
          </div>

          {/* Result */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/8 p-4 md:p-5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />
            <div className="relative flex flex-col items-center gap-0.5 text-center">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Итоговая цена</span>
              <motion.span
                key={total}
                className="text-4xl md:text-5xl font-black text-foreground tabular-nums tracking-tight"
                initial={{ scale: 1.05, opacity: 0.6 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{ textShadow: "0 0 30px hsl(268 86% 68% / 0.3)" }}
              >
                {total.toLocaleString("ru-RU")} ₽
              </motion.span>
            </div>
          </div>

          <div className="grid gap-1.5 sm:grid-cols-2">
            <motion.a
              href="https://t.me/nowsub_ru?direct"
              target="_blank"
              rel="noreferrer"
              className="button-glow flex items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-bold text-primary-foreground"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="h-4 w-4" /> Написать в Telegram
            </motion.a>
            <motion.a
              href="https://t.me/nowsub_bot"
              target="_blank"
              rel="noreferrer"
              className="button-secondary-glow flex items-center justify-center gap-2 rounded-xl border border-primary/25 bg-primary/10 py-2.5 text-sm font-bold text-foreground"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Bot className="h-4 w-4 text-primary" /> Открыть бота
            </motion.a>
          </div>

          <div className="rounded-xl border border-primary/15 bg-primary/5 p-2.5 text-sm">
            <span className="font-bold text-primary">Гарантия:</span>{" "}
            <span className="text-muted-foreground">Возврат средств если подписка не активирована</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
