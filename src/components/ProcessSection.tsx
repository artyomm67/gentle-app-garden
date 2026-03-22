const steps = [
  { num: 1, emoji: "💬", title: "Напишите нам в Telegram", desc: "Для уточнения деталей" },
  { num: 2, emoji: "💳", title: "Произведите оплату", desc: "Удобным способом" },
  { num: 3, emoji: "⚡", title: "Начинаем работу", desc: "Сразу после платежа" },
  { num: 4, emoji: "✨", title: "Проверьте результат", desc: "И пользуйтесь сервисом" },
];

const ProcessSection = () => (
  <section id="process" className="py-20">
    <div className="container">
      <p className="text-sm text-primary font-semibold mb-2">Как это работает</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Процесс оплаты</h2>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.num} className="glass-card group relative rounded-[1.5rem] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_hsl(var(--primary)/0.15)]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary transition-all duration-200 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                {s.num}
              </div>
              <span className="text-2xl drop-shadow-[0_0_18px_hsl(var(--primary)/0.25)]">{s.emoji}</span>
            </div>
            <div className="process-line mb-4 h-1.5 w-16 rounded-full bg-primary/30 transition-all duration-200 group-hover:w-24 group-hover:bg-primary" />
            <p className="mb-1 text-xs text-primary/90">ШАГ {s.num}</p>
            <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="text-sm font-semibold text-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
