import { motion } from "framer-motion";
import { CreditCard, MessageCircle, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  { num: 1, icon: MessageCircle, title: "Выберите сервис", desc: "Оставьте заявку в Telegram или откройте бота и укажите, что нужно подключить." },
  { num: 2, icon: CreditCard, title: "Получите быстрый расчет", desc: "Сразу показываем ориентир по стоимости, подтверждаем условия и принимаем оплату." },
  { num: 3, icon: ShieldCheck, title: "Активируем и подтверждаем", desc: "Подключаем сервис на ваш аккаунт и остаемся на связи, если потребуется помощь." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-24">
    <div className="container">
      <SectionHeader
        eyebrow="Как это работает"
        title="Три коротких шага до активации сервиса"
        description="Структура экрана помогает быстро понять процесс и перейти к первому действию без лишних решений."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            className="glass-card-glow group relative rounded-[1.75rem] p-6 md:p-7"
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
              <span className="text-3xl font-black text-primary/15">{String(s.num).padStart(2, "0")}</span>
            </div>
            <div className="mb-4 h-1 w-12 rounded-full bg-primary/25 transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
            <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="text-sm font-medium leading-6 text-foreground/84">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
