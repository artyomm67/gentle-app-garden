import { Bot, Send } from "lucide-react";

const navLinks = [
  { label: "Цены", href: "#pricing" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Процесс", href: "#process" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Статьи", href: "#articles" },
];

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
    <div className="container flex items-center justify-between h-16">
      <a href="/" className="text-xl font-black tracking-tight">
        NOW<span className="text-primary">SUB</span>
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a href="https://t.me/nowsub_bot" target="_blank" rel="noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
          <Bot className="w-4 h-4" />
        </a>
        <a href="https://t.me/nowsub_ru" target="_blank" rel="noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary hover:bg-primary/90 transition-colors">
          <Send className="w-4 h-4 text-primary-foreground" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
