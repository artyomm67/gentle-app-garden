import { Send } from "lucide-react";

const CTAFooter = () => (
  <section className="py-20">
    <div className="container max-w-2xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы подключить сервис?</h2>
      <p className="text-muted-foreground mb-8">
        Напишите нам прямо сейчас — активируем подписку за 5–15 минут по выгодному курсу. Без скрытых комиссий.
      </p>
      <div className="flex justify-center gap-3">
        <a href="https://t.me/nowsub_ru?direct" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors">
          <Send className="w-4 h-4" /> Написать в Telegram
        </a>
      </div>
    </div>

    <footer className="container mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
      © 2026 NOWSUB. Все права защищены.
    </footer>
  </section>
);

export default CTAFooter;
