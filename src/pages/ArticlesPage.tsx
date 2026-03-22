import { Link } from "react-router-dom";
import Header from "@/components/Header";
import CTAFooter from "@/components/CTAFooter";
import SiteBackdrop from "@/components/SiteBackdrop";
import { articles } from "@/data/siteContent";

const ArticlesPage = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <SiteBackdrop />
    <Header />
    <main className="relative z-10 pt-32 pb-20">
      <section className="container">
        <div className="max-w-3xl mb-12">
          <p className="mb-3 text-sm font-semibold text-primary">База знаний</p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Статьи по оплате зарубежных сервисов</h1>
          <p className="text-lg text-muted-foreground">Собрали отдельные страницы для популярных сервисов — позже наполним их полноценными текстами.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} to={`/articles/${article.slug}`} className="glass-card group rounded-[1.5rem] p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-4xl">{article.emoji}</span>
                <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground">{article.category}</span>
              </div>
              <h2 className="mb-3 text-xl font-bold leading-snug">{article.title}</h2>
              <p className="mb-5 text-muted-foreground">{article.excerpt}</p>
              <span className="text-sm text-primary group-hover:underline">Подробнее</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
    <CTAFooter />
  </div>
);

export default ArticlesPage;