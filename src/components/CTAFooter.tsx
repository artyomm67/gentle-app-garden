import { motion } from "framer-motion";
import { Bot, Send } from "lucide-react";
import { Link } from "react-router-dom";

const CTAFooter = () => (
  <section id="contacts" className="py-12">
    <div className="container max-w-3xl">
      {/* CTA */}
      <motion.div
        className="glass-card-glow rounded-[1.5rem] p-7 text-center mb-8 relative overflow-hidden"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-primary-glow/4" />
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Готовы подключить сервис?</h2>
          <p className="text-muted-foreground mb-5 max-w-md mx-auto text-sm">
            Активируем подписку за 5–10 минут по выгодному курсу. Без скрытых комиссий.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <motion.a
              href="https://t.me/nowsub_ru?direct"
              target="_blank"
              rel="noreferrer"
              className="button-glow inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="w-4 h-4" /> Написать в Telegram
            </motion.a>
            <motion.a
              href="https://t.me/nowsub_bot"
              target="_blank"
              rel="noreferrer"
              className="button-secondary-glow inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/80 px-6 py-3 text-sm font-bold text-secondary-foreground"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Bot className="w-4 h-4" /> Открыть бота
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Contacts & Docs — elegant text links */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm mb-6">
        <a href="mailto:nowsub@mail.ru" className="font-semibold text-foreground/80 transition-all hover:text-primary hover:drop-shadow-[0_0_8px_hsl(268_86%_68%/0.4)]">
          nowsub@mail.ru
        </a>
        <span className="hidden md:inline text-border">·</span>
        <span className="text-muted-foreground">9:00–23:00 по МСК, без выходных</span>
        <span className="hidden md:inline text-border">·</span>
        <Link to="/privacy" className="font-medium text-foreground/70 transition-all hover:text-primary hover:drop-shadow-[0_0_8px_hsl(268_86%_68%/0.3)]">
          Конфиденциальность
        </Link>
        <Link to="/offer" className="font-medium text-foreground/70 transition-all hover:text-primary hover:drop-shadow-[0_0_8px_hsl(268_86%_68%/0.3)]">
          Оферта
        </Link>
      </div>
    </div>

    <footer className="container pt-5 border-t border-border/30 text-center text-sm text-muted-foreground">
      © 2026 NOWSUB. Все права защищены.
    </footer>
  </section>
);

export default CTAFooter;
