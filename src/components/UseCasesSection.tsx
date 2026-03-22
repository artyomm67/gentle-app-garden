import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Sparkles, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const useCases = [
  {
    icon: Sparkles,
    title: "Creators",
    description: "Быстрый доступ к Midjourney, Runway, ElevenLabs и другим инструментам для контента.",
  },
  {
    icon: Code2,
    title: "Developers",
    description: "Оплата Cursor, ChatGPT, Claude и других AI/dev‑сервисов для ежедневной работы и экспериментов.",
  },
  {
    icon: Palette,
    title: "Дизайн и маркетинг",
    description: "Canva, Figma, Notion и сервисы для команд, которым нужен предсказуемый процесс без зарубежной карты.",
  },
  {
    icon: Users,
    title: "Команды и агентства",
    description: "Понятный поток для регулярных подписок, когда важны скорость, прозрачность и поддержка в одном месте.",
  },
];

const UseCasesSection = () => (
  <section id="use-cases" className="py-20 md:py-28">
    <div className="container">
      <SectionHeader
        eyebrow="Кейсы"
        title="Подходит для creators, developers и команд, которым нужен быстрый доступ к зарубежным сервисам"
        description="Вместо длинного пути с зарубежными картами — понятный flow: выбрать сервис, увидеть стоимость и быстро завершить оплату."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {useCases.map((item, index) => (
          <motion.div
            key={item.title}
            className="glass-card rounded-[1.5rem] border border-border/60 p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary icon-glow">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Реальный сценарий использования <ArrowUpRight className="h-4 w-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;