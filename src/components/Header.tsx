import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Calculator, ChevronDown, FileText, Menu, MessageSquare, Newspaper, Send, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { articles } from "@/data/siteContent";

const navLinks = [
  { label: "Цены", href: "/pricing" },
  { label: "Калькулятор", href: "/#calculator" },
  { label: "Процесс", href: "/#process" },
  { label: "Отзывы", href: "/#reviews" },
  { label: "Контакты", href: "/#contacts" },
];

const popularLinks = articles.slice(0, 4);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [popularOpen, setPopularOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="group font-display text-2xl font-black tracking-[0.12em] md:text-[2rem]">
          <span className="text-foreground transition-colors group-hover:text-primary/80">NOW</span>
          <span className="text-primary transition-all group-hover:drop-shadow-[0_0_24px_hsl(var(--primary)/0.7)]" style={{ textShadow: "0 0 30px hsl(268 86% 68% / 0.4)" }}>SUB</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/50 bg-card/40 px-2 py-2 backdrop-blur-xl">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href="https://t.me/nowsub_bot"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 px-4 text-sm font-semibold text-foreground shadow-[0_0_20px_hsl(var(--primary)/0.1)] transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Bot className="mr-2 h-4 w-4 text-primary" /> Бот
          </motion.a>
          <motion.a
            href="https://t.me/nowsub_ru?direct"
            target="_blank"
            rel="noreferrer"
            className="button-glow hidden sm:inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Send className="mr-2 h-4 w-4" /> Telegram
          </motion.a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <motion.button
                type="button"
                className="button-glow inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"
                aria-label="Открыть меню"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="h-5 w-5" />
              </motion.button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[88vw] border-border/50 bg-background/95 backdrop-blur-2xl px-0 sm:max-w-md">
              <div className="px-6 pb-6 pt-10">
                <SheetTitle className="font-display text-2xl">Меню</SheetTitle>
                <p className="mt-2 text-sm text-muted-foreground">Все разделы и быстрые ссылки</p>
              </div>

              <div className="space-y-2 px-4 pb-6">
                <button
                  type="button"
                  onClick={() => setPopularOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-2xl border border-border/60 bg-card/60 px-4 py-4 text-left font-semibold text-foreground transition-colors hover:bg-card/80"
                >
                  <span className="flex items-center gap-3"><Newspaper className="h-4 w-4 text-primary icon-glow" /> Популярное</span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${popularOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {popularOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-2xl border border-border/40 bg-card/50 p-2">
                        {popularLinks.map((article) => (
                          <Link
                            key={article.slug}
                            to={`/articles/${article.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-foreground transition-colors hover:bg-primary/10"
                          >
                            <span className="flex items-center gap-3">
                              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)]" />
                              {article.service}
                            </span>
                            <span className="text-primary/60">→</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  to="/pricing"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-4 font-semibold text-primary transition-colors hover:bg-primary/15"
                >
                  <DollarSign className="h-4 w-4 icon-glow" /> Цены
                </Link>

                {[
                  { href: "https://t.me/nowsub_bot", icon: Bot, label: "Бот", external: true },
                  { href: "/#calculator", icon: Calculator, label: "Калькулятор" },
                  { href: "/#reviews", icon: MessageSquare, label: "Отзывы" },
                  { href: "/#contacts", icon: FileText, label: "Контакты" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    onClick={() => !item.external && setOpen(false)}
                    className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/60 px-4 py-4 font-semibold text-foreground transition-colors hover:bg-card/80"
                  >
                    <item.icon className="h-4 w-4 text-primary icon-glow" /> {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto space-y-3 border-t border-border/40 px-4 pt-5">
                <a
                  href="https://t.me/nowsub_ru?direct"
                  target="_blank"
                  rel="noreferrer"
                  className="button-glow flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-4 font-bold text-primary-foreground"
                >
                  <Send className="mr-2 h-4 w-4" /> Написать в Telegram
                </a>
                <a
                  href="https://t.me/nowsub_bot"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary-glow flex w-full items-center justify-center rounded-2xl border border-border bg-secondary/80 px-5 py-4 font-bold text-secondary-foreground"
                >
                  <Bot className="mr-2 h-4 w-4" /> Открыть бота
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
