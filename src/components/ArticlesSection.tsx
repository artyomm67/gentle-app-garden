import { Link } from "react-router-dom";
import { articles } from "@/data/siteContent";

const ArticlesSection = () => (
  <section id="articles" className="py-20">
    <div className="container">
      <p className="text-sm text-primary font-semibold mb-2">Гайды</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Полезные статьи</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.slug} to={`/articles/${article.slug}`} className="glass-card group rounded-[1.5rem] p-6 transition-transform duration-300 hover:-translate-y-1">
            <span className="mb-4 block text-3xl">{article.emoji}</span>
            <h3 className="mb-3 text-lg font-bold">{article.title}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{article.excerpt}</p>
            <span className="text-sm text-primary group-hover:underline">Подробнее</span>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/articles" className="inline-flex rounded-xl border border-border bg-secondary px-5 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
          Все статьи
        </Link>
      </div>
    </div>
  </section>
);

export default ArticlesSection;
