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
          <div key={s.num} className="glass-card group relative rounded-[1.5rem] p-6 transition-colors hover:border-primary/40">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              {s.num}
            </div>
            <p className="text-xs text-muted-foreground mb-1">ШАГ {s.num}</p>
            <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="text-sm font-semibold text-foreground/90">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
