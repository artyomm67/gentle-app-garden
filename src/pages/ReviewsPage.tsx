import Header from "@/components/Header";
import CTAFooter from "@/components/CTAFooter";
import SiteBackdrop from "@/components/SiteBackdrop";

const sources = ["Яндекс Карты", "Авито", "Telegram"];

const ReviewsPage = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <SiteBackdrop />
    <Header />
    <main className="relative z-10 pt-32 pb-20">
      <section className="container">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-primary">Отзывы</p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Отзывы скоро появятся здесь</h1>
          <p className="text-lg text-muted-foreground">Админка не нужна — позже просто перенесем несколько лучших отзывов с Яндекс Карт и Авито в эти карточки.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sources.map((source) => (
            <div key={source} className="glass-card rounded-[1.5rem] p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-xl text-primary">★</div>
              <h2 className="mb-2 text-xl font-bold">{source}</h2>
              <p className="text-muted-foreground">Пока это место зарезервировано под реальные отзывы, рейтинг и красивые карточки доверия.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <CTAFooter />
  </div>
);

export default ReviewsPage;