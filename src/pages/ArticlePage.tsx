import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import CTAFooter from "@/components/CTAFooter";
import SiteBackdrop from "@/components/SiteBackdrop";
import { articles } from "@/data/siteContent";

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container pt-32 pb-20">
          <h1 className="mb-4 text-4xl font-bold">Гайд не найден</h1>
          <a href="/#services" className="text-primary hover:opacity-80">Вернуться к сервисам</a>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteBackdrop />
      <Header />
      <main className="relative z-10 pt-32 pb-20">
        <article className="container max-w-4xl">
          <a href="/#services" className="mb-6 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80">
            ← Все сервисы
          </a>

          <div className="glass-card rounded-[2rem] p-8 md:p-10">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-primary">{article.category}</p>
                <h1 className="text-3xl font-bold leading-tight md:text-4xl">{article.title}</h1>
              </div>
              <span className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{article.service}</span>
            </div>

            <p className="mb-8 text-lg text-muted-foreground">{article.excerpt}</p>

            <div className="mb-10 grid gap-4 md:grid-cols-3">
              {article.bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-border bg-secondary/60 p-4 text-sm font-semibold text-foreground">
                  {bullet}
                </div>
              ))}
            </div>

            <div className="space-y-6 text-base leading-8 text-foreground/90">
              <p>Мы подключаем <strong>{article.service}</strong> в ручном сопровождении: вы пишете нам, мы уточняем тариф, озвучиваем итоговую стоимость и после оплаты быстро активируем подписку.</p>
              <p>Обычно весь процесс занимает 5–15 минут. Если у сервиса есть особенности по региону, аккаунту или тарифу — мы заранее всё подскажем в переписке.</p>
              <p>Для быстрого старта достаточно отправить название сервиса, нужный тариф и ваш аккаунт. Если не уверены в плане — поможем выбрать оптимальный вариант.</p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-secondary/50 p-4">
                <p className="mb-1 text-sm font-semibold text-primary">Telegram</p>
                <p className="text-sm text-muted-foreground">https://t.me/nowsub_ru?direct</p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/50 p-4">
                <p className="mb-1 text-sm font-semibold text-primary">Бот</p>
                <p className="text-sm text-muted-foreground">@nowsub_bot</p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/50 p-4">
                <p className="mb-1 text-sm font-semibold text-primary">Почта</p>
                <p className="text-sm text-muted-foreground">nowsub@mail.ru</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://t.me/nowsub_ru?direct" target="_blank" rel="noreferrer" className="button-glow inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Написать в Telegram
              </a>
              <a href="https://t.me/nowsub_bot" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-border bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
                Открыть бота
              </a>
            </div>
          </div>
        </article>
      </main>
      <CTAFooter />
    </div>
  );
};

export default ArticlePage;