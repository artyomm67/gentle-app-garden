import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Calculator, ChevronDown, FileText, Menu, MessageSquare, Newspaper, Send, DollarSign, X } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/siteContent";

const navLinks = [
  { label: "Цены", href: "/pricing" },
  { label: "Калькулятор", href: "/#calculator" },
  { label: "Процесс", href: "/#process" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Контакты", href: "/#contacts" },
];

const popularLinks = articles.slice(0, 4);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [popularOpen, setPopularOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-2xl">
      <div className="container flex h-14 items-center justify-between gap-3 md:h-16">
        <Link to="/" className="group font-display text-xl font-black tracking-[0.12em] md:text-2xl">
          <span className="text-foreground transition-colors group-hover:text-primary/80">NOW</span>
          <span className="text-primary brand-glow transition-all group-hover:brightness-125">SUB</span>
        </Link>

        {/* Desktop nav — visible on md+ */}
        <nav className="hidden md:flex items-center gap-0.5 rounded-full border border-border/50 bg-card/40 px-1.5 py-1 backdrop-blur-xl">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-semibold text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-semibold text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground"
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
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 px-4 text-sm font-semibold text-foreground transition-colors hover:bg-primary/15"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Bot className="mr-1.5 h-4 w-4 text-primary" /> Бот
          </motion.a>
          <motion.a
            href="https://t.me/nowsub_ru?direct"
            target="_blank"
            rel="noreferrer"
            className="button-glow hidden sm:inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Send className="mr-1.5 h-4 w-4" /> Telegram
          </motion.a>

          {/* Burger — only on mobile (<md) */}
          <motion.button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-card/60 border border-border/50 text-foreground md:hidden"
            aria-label="Открыть меню"
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu — slide panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[70] w-[75vw] max-w-xs border-l border-border/40 bg-background/98 backdrop-blur-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-4 pt-5 pb-2">
                <span className="font-display text-base font-bold">Меню</span>
                <motion.button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-8 w-8 flex items-center justify-center rounded-lg bg-card/60 border border-border/50 text-foreground"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-1">
                <button
                  type="button"
                  onClick={() => setPopularOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl border border-border/60 bg-card/60 px-3 py-2.5 text-left font-semibold text-foreground text-sm transition-colors hover:bg-card/80"
                >
                  <span className="flex items-center gap-2"><Newspaper className="h-4 w-4 text-primary" /> Популярное</span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${popularOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {popularOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-xl border border-border/40 bg-card/50 p-1">
                        {popularLinks.map((article) => (
                          <Link
                            key={article.slug}
                            to={`/articles/${article.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-primary/10"
                          >
                            <span className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {article.service}
                            </span>
                            <span className="text-primary/50">→</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  to="/pricing"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
                >
                  <DollarSign className="h-4 w-4" /> Цены
                </Link>

                {[
                  { href: "https://t.me/nowsub_bot", icon: Bot, label: "Бот", external: true },
                  { href: "/#calculator", icon: Calculator, label: "Калькулятор" },
                  { href: "/reviews", icon: MessageSquare, label: "Отзывы", isLink: true },
                  { href: "/#contacts", icon: FileText, label: "Контакты" },
                ].map((item) =>
                  item.isLink ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/60 px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card/80"
                    >
                      <item.icon className="h-4 w-4 text-primary" /> {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      onClick={() => !item.external && setOpen(false)}
                      className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/60 px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card/80"
                    >
                      <item.icon className="h-4 w-4 text-primary" /> {item.label}
                    </a>
                  )
                )}
              </div>

              <div className="space-y-1.5 border-t border-border/40 px-3 py-3">
                <a
                  href="https://t.me/nowsub_ru?direct"
                  target="_blank"
                  rel="noreferrer"
                  className="button-glow flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
                >
                  <Send className="mr-2 h-4 w-4" /> Написать в Telegram
                </a>
                <a
                  href="https://t.me/nowsub_bot"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary-glow flex w-full items-center justify-center rounded-xl border border-border bg-secondary/80 px-4 py-2.5 text-sm font-bold text-secondary-foreground"
                >
                  <Bot className="mr-2 h-4 w-4" /> Открыть бота
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
