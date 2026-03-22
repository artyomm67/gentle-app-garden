const articles = [
  { emoji: "💬", title: "Как оплатить ChatGPT из России в 2026 году" },
  { emoji: "🤖", title: "Как оплатить Claude AI из России в 2026 году" },
  { emoji: "🎨", title: "Как оплатить Midjourney из России в 2026 году" },
  { emoji: "📹", title: "Как оплатить Zoom из России в 2026 году" },
  { emoji: "☁️", title: "Как оплатить Google One из России в 2026 году" },
  { emoji: "🔍", title: "Как оплатить DeepSeek из России в 2026 году" },
];

const ArticlesSection = () => (
  <section id="articles" className="py-20">
    <div className="container">
      <p className="text-sm text-primary font-semibold mb-2">Гайды</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Полезные статьи</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <div key={i} className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors cursor-pointer">
            <span className="text-3xl mb-4 block">{a.emoji}</span>
            <h3 className="font-semibold mb-3">{a.title}</h3>
            <span className="text-sm text-primary group-hover:underline">Подробнее</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ArticlesSection;
