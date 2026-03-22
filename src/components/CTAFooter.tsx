import { Send } from "lucide-react";

const CTAFooter = () => (
  <section id="contacts" className="py-20">
    <div className="container max-w-2xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы подключить сервис?</h2>
      <p className="text-muted-foreground mb-8">
        Напишите нам прямо сейчас — активируем подписку за 5–15 минут по выгодному курсу. Без скрытых комиссий.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="https://t.me/nowsub_ru?direct" target="_blank" rel="noreferrer"
          className="button-glow inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
          <Send className="w-4 h-4" /> Написать в Telegram
        </a>
        <a href="https://t.me/nowsub_bot" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-8 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
          Открыть бота
        </a>
      </div>

      <div className="glass-card mt-12 grid gap-4 rounded-[1.75rem] p-6 text-left md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold text-primary">Контакты</p>
          <p className="font-semibold text-foreground">Email: hello@nowsub.ru</p>
          <p className="mt-2 text-muted-foreground">Часы работы: 9:00–23:00 по МСК</p>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold text-primary">Документы</p>
          <div className="flex flex-col gap-2">
            <a href="/privacy" className="text-foreground transition-colors hover:text-primary">Политика конфиденциальности</a>
            <a href="/offer" className="text-foreground transition-colors hover:text-primary">Публичная оферта</a>
          </div>
        </div>
      </div>
    </div>

    <footer className="container mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
      © 2026 NOWSUB. Все права защищены.
    </footer>
  </section>
);

export default CTAFooter;
