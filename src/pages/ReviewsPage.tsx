import { motion } from "framer-motion";
import { Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import CTAFooter from "@/components/CTAFooter";
import SiteBackdrop from "@/components/SiteBackdrop";

const reviews = [
  { text: "Подключили ChatGPT Plus за 10 минут. Всё работает, рекомендую!", initials: "АМ", name: "Алексей М.", source: "Яндекс Карты" },
  { text: "Очень удобный сервис. Оплатила Claude и Midjourney без проблем.", initials: "ДК", name: "Дарья К.", source: "Яндекс Карты" },
  { text: "Переживал за безопасность, но всё прошло гладко. Поддержка отвечает быстро.", initials: "МТ", name: "Михаил Т.", source: "Авито" },
  { text: "Уже третий месяц пользуюсь. Каждый раз всё моментально — просто супер.", initials: "ЕВ", name: "Елена В.", source: "Telegram" },
  { text: "Cursor Pro подключили за 5 минут. Лучший сервис для оплаты подписок!", initials: "АС", name: "Артём С.", source: "Авито" },
  { text: "Боялась переводить деньги, но менеджер всё объяснил. Теперь постоянный клиент.", initials: "ОН", name: "Ольга Н.", source: "Яндекс Карты" },
];

const ReviewsPage = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <SiteBackdrop />
    <Header />
    <main className="relative z-10 pt-24 pb-16">
      <div className="container max-w-4xl">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> На главную
        </Link>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="text-sm text-primary font-semibold mb-1">Отзывы</p>
          <h1 className="text-3xl font-bold md:text-4xl mb-2">Что говорят клиенты</h1>
          <p className="text-muted-foreground mb-8">Реальные отзывы с проверенных площадок.</p>
        </motion.div>

        {/* Platform links */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <motion.a
            href="https://www.avito.ru/brands/42fa1c75d7c0ae7dfd81a5a8a151849b?src=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/40"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="h-2 w-2 rounded-full bg-primary" /> Avito
          </motion.a>
          <motion.a
            href="https://yandex.com/profile/168247323124"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/40"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="h-2 w-2 rounded-full bg-primary" /> Яндекс
          </motion.a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="glass-card-glow rounded-xl p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              whileHover={{ y: -2 }}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className="h-3 w-3 fill-primary text-primary" />
                  ))}
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                  ✓
                </span>
              </div>
              <p className="text-sm text-foreground mb-3 leading-relaxed">«{r.text}»</p>
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary font-bold text-xs">
                  {r.initials}
                </div>
                <div>
                  <div className="font-bold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.source}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <CTAFooter />
  </div>
);

export default ReviewsPage;
