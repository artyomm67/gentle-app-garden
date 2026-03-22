const plans = [
  { name: "ChatGPT Plus", period: "1 мес", price: "2 990 ₽", hot: true },
  { name: "ChatGPT Pro", period: "1 мес", price: "28 990 ₽" },
  { name: "Claude Pro", period: "1 мес", price: "2 990 ₽", hot: true },
  { name: "Midjourney Basic", period: "1 мес", price: "1 690 ₽" },
  { name: "Midjourney Standard", period: "1 мес", price: "4 490 ₽" },
  { name: "Midjourney Pro", period: "1 мес", price: "8 990 ₽" },
  { name: "Cursor Pro", period: "1 мес", price: "2 990 ₽" },
  { name: "Notion Plus", period: "1 мес", price: "1 490 ₽" },
  { name: "Canva Pro", period: "1 мес", price: "1 490 ₽" },
  { name: "Zoom Pro", period: "1 мес", price: "1 990 ₽" },
  { name: "Google One 100GB", period: "1 мес", price: "490 ₽" },
  { name: "TradingView Pro", period: "1 мес", price: "2 290 ₽" },
];

const PricingSection = () => (
  <section id="pricing" className="py-20">
    <div className="container">
      <p className="mb-2 text-sm font-semibold text-primary">Тарифы</p>
      <h2 className="mb-2 text-3xl font-bold md:text-4xl">Цены на подписки</h2>
      <p className="mb-10 text-muted-foreground">Временная таблица для запуска. Финальные значения позже можно заменить без переделки дизайна.</p>

      <div className="pricing-shell relative overflow-hidden rounded-[2rem] border border-border/80 p-1">
        <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-primary/20 blur-3xl" />
        <div className="glass-card relative overflow-hidden rounded-[1.7rem]">
          <div className="grid grid-cols-3 bg-secondary/40 px-6 py-4 text-sm font-semibold text-muted-foreground">
            <span>Сервис</span>
            <span className="text-center">Период</span>
            <span className="text-right">Цена</span>
          </div>
          {plans.map((p, i) => (
            <div key={i} className="grid grid-cols-3 border-t border-border px-6 py-4 transition-all duration-200 hover:bg-secondary/30 hover:shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.12)]">
              <span className="flex items-center gap-2 font-medium text-foreground">
                {p.name}
                {p.hot && <span className="rounded-full border border-primary/25 bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">Хит</span>}
              </span>
              <span className="text-center text-muted-foreground">{p.period}</span>
              <span className="text-right font-semibold text-foreground">{p.price}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">Нет нужного сервиса? Напишите нам — подключим нужный тариф вручную.</p>
    </div>
  </section>
);

export default PricingSection;
