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
      <p className="text-muted-foreground mb-6">Блок уже подготовлен под отзывы из Авито и Яндекс. Ниже оставили ваши основные площадки и красивое оформление карточек.</p>

      <div className="mb-10 flex flex-wrap gap-3">
        <a href="https://www.avito.ru/brands/42fa1c75d7c0ae7dfd81a5a8a151849b?src=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
          <span className="text-primary">✦</span> Avito
        </a>
        <a href="https://yandex.com/profile/168247323124" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
          <span className="text-primary">✦</span> Яндекс
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card review-card rounded-[1.5rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex}>★</span>
                ))}
              </div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">💜 Проверено</span>
            </div>
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
    </div>
  </section>
);

export default ReviewsSection;
