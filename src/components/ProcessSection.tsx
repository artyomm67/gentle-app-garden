import { motion } from "framer-motion";
import { MessageCircle, CreditCard, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  { num: 1, icon: MessageCircle, title: "Напишите нам в Telegram", desc: "Для уточнения деталей" },
  { num: 2, icon: CreditCard, title: "Произведите оплату", desc: "Удобным способом" },
  { num: 3, icon: Zap, title: "Начинаем работу", desc: "Сразу после платежа" },
  { num: 4, icon: CheckCircle2, title: "Проверьте результат", desc: "И пользуйтесь сервисом" },
];

const ProcessSection = () => (
  <section id="process" className="py-24">
    <div className="container">
      <p className="text-sm text-primary font-semibold mb-2">Как это работает</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-14">Процесс оплаты</h2>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            className="glass-card-glow group relative rounded-[1.5rem] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="mb-5 flex items-center justify-between">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary icon-glow"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <s.icon className="h-5 w-5" />
              </motion.div>
              <span className="text-3xl font-black text-primary/15">{String(s.num).padStart(2, '0')}</span>
            </div>
            <div className="mb-4 h-1 w-12 rounded-full bg-primary/25 transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
            <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="text-sm font-medium text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
