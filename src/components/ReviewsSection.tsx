const reviews = [
  { text: "Подключили ChatGPT Plus за 10 минут. Всё работает, рекомендую!", initials: "АМ", name: "Алексей М.", source: "Яндекс Карты" },
  { text: "Очень удобный сервис. Оплатила Claude и Midjourney без проблем.", initials: "ДК", name: "Дарья К.", source: "Яндекс Карты" },
  { text: "Переживал за безопасность, но всё прошло гладко. Поддержка отвечает быстро.", initials: "МТ", name: "Михаил Т.", source: "Авито" },
  { text: "Уже третий месяц пользуюсь. Каждый раз всё моментально — просто супер.", initials: "ЕВ", name: "Елена В.", source: "Telegram" },
  { text: "Cursor Pro подключили за 5 минут. Лучший сервис для оплаты подписок!", initials: "АС", name: "Артём С.", source: "Авито" },
  { text: "Боялась переводить деньги, но менеджер всё объяснил. Теперь постоянный клиент.", initials: "ОН", name: "Ольга Н.", source: "Яндекс Карты" },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20">
    <div className="container">
      <p className="text-sm text-primary font-semibold mb-2">Отзывы</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Что говорят клиенты</h2>
      <p className="text-muted-foreground mb-10">Пока блок временный — позже перенесем реальные отзывы с Яндекс Карт и Авито.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card rounded-[1.5rem] p-6 transition-colors hover:border-primary/30">
            <p className="text-foreground mb-6">«{r.text}»</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm">
                {r.initials}
              </div>
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.source}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="/reviews" className="mt-8 inline-flex rounded-xl border border-border bg-secondary px-5 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
        Открыть страницу отзывов
      </a>
    </div>
  </section>
);

export default ReviewsSection;
