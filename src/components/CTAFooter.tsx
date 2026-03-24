import { motion } from "framer-motion";
import { Bot, Send, Mail, Clock, FileText, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

const CTAFooter = () => (
  <section id="contacts" className="py-8 md:py-12">
    <div className="container max-w-3xl">
      {/* CTA */}
      <motion.div
        className="glass-card-glow rounded-[1.5rem] p-6 text-center mb-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-primary-glow/4" />
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-1.5">Готовы подключить сервис?</h2>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto text-sm">
            Активируем подписку за 5–10 минут по выгодному курсу. Без скрытых комиссий.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <motion.a
              href="https://t.me/nowsub_ru?direct"
              target="_blank"
              rel="noreferrer"
              className="button-glow inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="w-4 h-4" /> Написать в Telegram
            </motion.a>
            <motion.a
              href="https://t.me/nowsub_bot"
              target="_blank"
              rel="noreferrer"
              className="button-secondary-glow inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/80 px-5 py-2.5 text-sm font-bold text-secondary-foreground"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Bot className="w-4 h-4" /> Открыть бота
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Modern contacts grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <a
          href="mailto:nowsub@mail.ru"
          className="group flex flex-col items-center gap-1.5 rounded-2xl border border-border/40 bg-card/30 p-3 transition-all hover:border-primary/30 hover:bg-primary/5"
        >
          <Mail className="h-4 w-4 text-primary transition-all group-hover:drop-shadow-[0_0_6px_hsl(268_86%_68%/0.5)]" />
          <span className="text-xs font-semibold text-foreground/80 group-hover:text-primary transition-colors">nowsub@mail.ru</span>
        </a>
        <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-border/40 bg-card/30 p-3">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-muted-foreground text-center">9:00–23:00 МСК</span>
        </div>
        <Link
          to="/privacy"
          className="group flex flex-col items-center gap-1.5 rounded-2xl border border-border/40 bg-card/30 p-3 transition-all hover:border-primary/30 hover:bg-primary/5"
        >
          <FileText className="h-4 w-4 text-primary transition-all group-hover:drop-shadow-[0_0_6px_hsl(268_86%_68%/0.5)]" />
          <span className="text-xs font-semibold text-foreground/70 group-hover:text-primary transition-colors">Конфиденциальность</span>
        </Link>
        <Link
          to="/offer"
          className="group flex flex-col items-center gap-1.5 rounded-2xl border border-border/40 bg-card/30 p-3 transition-all hover:border-primary/30 hover:bg-primary/5"
        >
          <ScrollText className="h-4 w-4 text-primary transition-all group-hover:drop-shadow-[0_0_6px_hsl(268_86%_68%/0.5)]" />
          <span className="text-xs font-semibold text-foreground/70 group-hover:text-primary transition-colors">Оферта</span>
        </Link>
      </div>
    </div>

    <footer className="container pt-4 border-t border-border/30 text-center text-xs text-muted-foreground">
      © 2026 NOWSUB. Все права защищены.
    </footer>
  </section>
);

export default CTAFooter;
