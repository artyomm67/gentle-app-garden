import { motion } from "framer-motion";
import { Bot, Clock, Mail, Send, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CTAFooter = () => (
  <section id="contacts" className="py-16">
    <div className="container max-w-3xl">
      {/* CTA */}
      <motion.div
        className="glass-card-glow rounded-[1.5rem] p-8 text-center mb-10 relative overflow-hidden"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-primary-glow/4" />
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Готовы подключить сервис?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
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

      {/* Info — clean text links */}
      <div className="grid gap-3 md:grid-cols-2 mb-8">
        <div className="glass-card-glow rounded-xl p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <Mail className="h-4 w-4 text-primary icon-glow" />
            <span className="font-bold text-sm text-primary">Контакты</span>
          </div>
          <a href="mailto:nowsub@mail.ru" className="font-semibold text-foreground hover:text-primary transition-colors">
            nowsub@mail.ru
          </a>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-primary" />
            9:00–23:00 по МСК, без выходных
          </div>
        </div>
        <div className="glass-card-glow rounded-xl p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <Shield className="h-4 w-4 text-primary icon-glow" />
            <span className="font-bold text-sm text-primary">Документы</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <Link to="/privacy" className="font-medium text-sm text-foreground transition-colors hover:text-primary">
              Политика конфиденциальности
            </Link>
            <Link to="/offer" className="font-medium text-sm text-foreground transition-colors hover:text-primary">
              Публичная оферта
            </Link>
          </div>
        </div>
      </div>
    </div>

    <footer className="container pt-6 border-t border-border/30 text-center text-sm text-muted-foreground">
      © 2026 NOWSUB. Все права защищены.
    </footer>
  </section>
);

export default CTAFooter;
