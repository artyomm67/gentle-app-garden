import { motion } from "framer-motion";
import { Bot, Clock, Mail, Send, Shield } from "lucide-react";

const CTAFooter = () => (
  <section id="contacts" className="py-20 pb-32 md:py-24 md:pb-24">
    <div className="container max-w-3xl">
      {/* CTA */}
      <motion.div
        className="glass-card-glow rounded-[2rem] p-10 text-center mb-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы подключить сервис?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Активируем подписку за 5–15 минут по выгодному курсу. Без скрытых комиссий.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href="https://t.me/nowsub_ru?direct"
              target="_blank"
              rel="noreferrer"
              className="button-glow inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-bold text-primary-foreground"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="w-4 h-4" /> Написать в Telegram
            </motion.a>
            <motion.a
              href="https://t.me/nowsub_bot"
              target="_blank"
              rel="noreferrer"
              className="button-secondary-glow inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/80 px-8 py-3.5 font-bold text-secondary-foreground"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Bot className="w-4 h-4" /> Открыть бота
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Info Cards */}
      <div className="grid gap-4 md:grid-cols-2 mb-12">
        <div className="glass-card-glow rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary icon-glow">
              <Mail className="h-5 w-5" />
            </div>
            <p className="font-bold text-primary">Контакты</p>
          </div>
          <p className="font-semibold text-foreground">nowsub@mail.ru</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-primary" />
            9:00–23:00 по МСК, без выходных
          </div>
        </div>
        <div className="glass-card-glow rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary icon-glow">
              <Shield className="h-5 w-5" />
            </div>
            <p className="font-bold text-primary">Документы</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="/privacy" className="font-medium text-foreground transition-colors hover:text-primary">Политика конфиденциальности</a>
            <a href="/offer" className="font-medium text-foreground transition-colors hover:text-primary">Публичная оферта</a>
          </div>
        </div>
      </div>
    </div>

    <footer className="container pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
      © 2026 NOWSUB. Все права защищены.
    </footer>
  </section>
);

export default CTAFooter;
