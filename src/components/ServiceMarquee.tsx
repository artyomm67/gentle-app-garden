const services = [
  "ChatGPT", "Claude", "Canva", "Zoom", "Figma", "Notion", "Google One",
  "TradingView", "Midjourney", "Coze", "Recraft", "DeepSeek", "Cursor",
  "Perplexity", "RunWay", "ElevenLabs", "Windsurf", "Pika", "Kling AI", "Leonardo",
];

const ServiceMarquee = () => (
  <section className="py-6 border-y border-border/50 overflow-hidden bg-muted/30">
    <div className="animate-marquee flex gap-4 whitespace-nowrap">
      {[...services, ...services].map((s, i) => (
        <span key={i} className="inline-flex items-center px-5 py-2 rounded-full border border-border bg-secondary text-sm text-secondary-foreground">
          {s}
        </span>
      ))}
    </div>
  </section>
);

export default ServiceMarquee;
