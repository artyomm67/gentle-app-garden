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
      <p className="text-sm text-primary font-semibold mb-2">Тарифы</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Цены на подписки</h2>
      <p className="text-muted-foreground mb-10">Актуальные цены. Точную стоимость уточняйте у менеджера.</p>

      <div className="rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-3 bg-secondary/50 px-6 py-3 text-sm font-semibold text-muted-foreground">
          <span>Сервис</span><span className="text-center">Период</span><span className="text-right">Цена</span>
        </div>
        {plans.map((p, i) => (
          <div key={i} className="grid grid-cols-3 px-6 py-4 border-t border-border hover:bg-secondary/30 transition-colors">
            <span className="flex items-center gap-2 font-medium">
              {p.name}
              {p.hot && <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary font-semibold">Хит</span>}
            </span>
            <span className="text-center text-muted-foreground">{p.period}</span>
            <span className="text-right font-semibold">{p.price}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-6 text-sm">
        Нет нужного сервиса? Напишите нам — подключим любой!
      </p>
    </div>
  </section>
);

export default PricingSection;
