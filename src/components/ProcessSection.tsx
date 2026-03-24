import { motion } from "framer-motion";
import { MessageCircle, CreditCard, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  { num: 1, icon: MessageCircle, title: "Напишите нам в Telegram", desc: "Для уточнения деталей" },
  { num: 2, icon: CreditCard, title: "Произведите оплату", desc: "Удобным способом" },
  { num: 3, icon: Zap, title: "Начинаем работу", desc: "Сразу после платежа" },
  { num: 4, icon: CheckCircle2, title: "Проверьте результат", desc: "И пользуйтесь сервисом" },
];

const ProcessSection = () => (
  <section id="process" className="py-8 md:py-12">
    <div className="container">
      <p className="text-sm text-primary font-semibold mb-0.5">Как это работает</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Процесс оплаты</h2>

      <div className="grid gap-2.5 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            className="glass-card-glow group rounded-[1.25rem] p-3.5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
          >
            <div className="mb-2.5 flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <s.icon className="h-4.5 w-4.5" />
              </div>
              <span className="text-2xl font-black text-primary/12">{String(s.num).padStart(2, '0')}</span>
            </div>
            <div className="mb-1.5 h-0.5 w-10 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-16 group-hover:bg-primary/50" />
            <h3 className="mb-0.5 text-sm font-bold text-foreground">{s.title}</h3>
            <p className="text-xs text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
