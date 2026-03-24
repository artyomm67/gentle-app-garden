import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Calculator, ChevronDown, FileText, Menu, MessageSquare, Newspaper, Send, DollarSign, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-2xl">
      <div className="container flex h-14 items-center justify-between gap-3 md:h-16">
        <Link to="/" className="group font-display text-xl font-black tracking-[0.12em] md:text-2xl">
          <span className="text-foreground transition-colors group-hover:text-primary/80">NOW</span>
          <span className="text-primary brand-glow transition-all group-hover:brightness-125">SUB</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 rounded-full border border-border/50 bg-card/40 px-1.5 py-1 backdrop-blur-xl">
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
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 px-4 text-sm font-semibold text-foreground min-w-[110px]"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Bot className="mr-1.5 h-4 w-4 text-primary" /> Бот
          </motion.a>
          <motion.a
            href="https://t.me/nowsub_ru?direct"
            target="_blank"
            rel="noreferrer"
            className="button-glow hidden sm:inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground min-w-[110px]"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Send className="mr-1.5 h-4 w-4" /> Telegram
          </motion.a>

          {/* Burger */}
          <motion.button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-card/60 border border-border/50 text-foreground lg:hidden"
            aria-label="Открыть меню"
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu — smooth slide panel */}
      <AnimatePresence mode="wait">
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[70] w-[75vw] max-w-xs border-l border-primary/10 bg-background/98 backdrop-blur-3xl flex flex-col"
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            >
              <div className="flex items-center justify-between px-4 pt-5 pb-2">
                <span className="font-display text-base font-bold text-primary">Меню</span>
                <motion.button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary"
                  whileTap={{ scale: 0.85, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-1">
                {/* Popular dropdown */}
                <motion.button
                  type="button"
                  onClick={() => setPopularOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl bg-card/80 px-3 py-2.5 text-left font-semibold text-foreground text-sm"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2"><Newspaper className="h-4 w-4 text-primary" /> Популярное</span>
                  <motion.span animate={{ rotate: popularOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {popularOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-xl bg-card/50 p-1">
                        {popularLinks.map((article, i) => (
                          <motion.div
                            key={article.slug}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.2 }}
                          >
                            <Link
                              to={`/articles/${article.slug}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 transition-colors hover:bg-primary/10"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              {article.service}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  to="/pricing"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-3 py-2.5 text-sm font-semibold text-primary"
                >
                  <DollarSign className="h-4 w-4" /> Цены
                </Link>

                {[
                  { href: "https://t.me/nowsub_bot", icon: Bot, label: "Бот", external: true },
                  { href: "/#calculator", icon: Calculator, label: "Калькулятор" },
                  { href: "/reviews", icon: MessageSquare, label: "Отзывы", isLink: true },
                  { href: "/#contacts", icon: FileText, label: "Контакты" },
                ].map((item, i) => {
                  const cls = "flex items-center gap-2 rounded-xl bg-card/60 px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card/80";
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.03, duration: 0.2 }}
                    >
                      {item.isLink ? (
                        <Link to={item.href} onClick={() => setOpen(false)} className={cls}>
                          <item.icon className="h-4 w-4 text-primary" /> {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noreferrer" : undefined}
                          onClick={() => !item.external && setOpen(false)}
                          className={cls}
                        >
                          <item.icon className="h-4 w-4 text-primary" /> {item.label}
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="space-y-1.5 border-t border-border/30 px-3 py-3">
                <a
                  href="https://t.me/nowsub_ru?direct"
                  target="_blank"
                  rel="noreferrer"
                  className="button-glow flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
                >
                  <Send className="mr-1.5 h-4 w-4" /> Написать в Telegram
                </a>
                <a
                  href="https://t.me/nowsub_bot"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center rounded-xl border border-border/50 bg-card/60 px-4 py-2.5 text-sm font-bold text-foreground"
                >
                  <Bot className="mr-1.5 h-4 w-4 text-primary" /> Открыть бота
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
