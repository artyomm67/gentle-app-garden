const steps = [
  { num: 1, title: "Напишите нам в Telegram", desc: "для уточнения деталей" },
  { num: 2, title: "Произведите оплату", desc: "удобным способом" },
  { num: 3, title: "Начинаем работу", desc: "после поступления платежа" },
  { num: 4, title: "Проверьте результат", desc: "и оставьте отзыв" },
];

const ProcessSection = () => (
  <section id="process" className="py-20">
    <div className="container">
      <p className="text-sm text-primary font-semibold mb-2">Как это работает</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Процесс оплаты</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="relative p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {s.num}
            </div>
            <p className="text-xs text-muted-foreground mb-1">ШАГ {s.num}</p>
            <h3 className="font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
