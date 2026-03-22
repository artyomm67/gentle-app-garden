const services = [
  "ChatGPT", "Claude", "Canva", "Zoom", "Figma", "Notion", "Google One",
  "TradingView", "Midjourney", "Coze", "Recraft", "DeepSeek", "Cursor",
  "Perplexity", "RunWay", "ElevenLabs", "Windsurf", "Pika", "Kling AI", "Leonardo",
];

const ServiceMarquee = () => (
  <section className="overflow-hidden border-y border-border/50 bg-muted/30 py-6 backdrop-blur-sm">
    <div className="animate-marquee flex gap-4 whitespace-nowrap">
      {[...services, ...services].map((s, i) => (
        <span key={i} className="inline-flex items-center rounded-full border border-border bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground shadow-[0_10px_30px_hsl(var(--background)/0.18)]">
          {s}
        </span>
      ))}
    </div>
  </section>
);

export default ServiceMarquee;
