import { useState } from "react";

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
    <section id="calculator" className="py-20">
      <div className="container max-w-2xl">
        <p className="text-sm text-primary font-semibold mb-2">Инструменты</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Калькулятор комиссии</h2>

        <div className="glass-card space-y-6 rounded-[1.75rem] p-8">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Введите сумму</label>
            <input type="number" min={1} value={amount} onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-lg font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2">Валюта</label>
            <div className="flex gap-2">
              {currencies.map((c) => (
                <button key={c.code} onClick={() => setCurrency(c.code)}
                  className={`flex-1 rounded-xl border py-2.5 text-sm font-medium transition-colors ${currency === c.code ? "bg-primary text-primary-foreground border-primary" : "bg-secondary border-border text-secondary-foreground hover:bg-secondary/80"}`}>
                  {c.code} {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex justify-between items-end mb-4">
              <span className="text-muted-foreground">Итоговая цена</span>
              <span className="text-3xl font-black">{total.toLocaleString("ru-RU")} ₽</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="https://t.me/nowsub_ru?direct" target="_blank" rel="noreferrer" className="button-glow block w-full rounded-xl bg-primary py-3 text-center font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Написать в Telegram
              </a>
              <a href="https://t.me/nowsub_bot" target="_blank" rel="noreferrer" className="block w-full rounded-xl border border-border bg-secondary py-3 text-center font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
                Открыть бота
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-secondary p-3">
              <div className="text-muted-foreground mb-1">Курс</div>
              <div className="font-semibold">1 {cur.code} = {cur.rate} RUB</div>
            </div>
            <div className="rounded-xl bg-secondary p-3">
              <div className="text-muted-foreground mb-1">Комиссия</div>
              <div className="font-semibold">до 30 {cur.code} — 1 000 RUB</div>
              <div className="font-semibold">от 30 {cur.code} — 30%</div>
            </div>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm shadow-[0_0_40px_hsl(var(--primary)/0.08)]">
            <span className="font-semibold text-primary">Гарантия:</span>{" "}
            <span className="text-muted-foreground">Возврат средств если подписка не активирована</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
