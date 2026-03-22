import { useState } from "react";
import { Bot, Calculator, ChevronDown, FileText, Menu, MessageSquare, Newspaper, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { articles } from "@/data/siteContent";

const navLinks = [
{ label: "Цены", href: "/#pricing" },
{ label: "Калькулятор", href: "/#calculator" },
{ label: "Процесс", href: "/#process" },
{ label: "Отзывы", href: "/#reviews" },
{ label: "Контакты", href: "/#contacts" }];


const popularLinks = articles.slice(0, 4);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [popularOpen, setPopularOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="font-display text-xl font-black tracking-[0.12em] md:text-3xl">
          NOW<span className="text-primary">SUB</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 rounded-full border border-border/70 bg-card/50 px-6 py-3 shadow-[0_0_40px_hsl(var(--background)/0.24)]">
          {navLinks.map((link) =>
          <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://t.me/nowsub_bot" target="_blank" rel="noreferrer" className="hidden sm:inline-flex h-11 items-center justify-center rounded-xl border border-border bg-secondary px-4 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
            <Bot className="mr-2 h-4 w-4" /> Бот
          </a>
          <a href="https://t.me/nowsub_ru?direct" target="_blank" rel="noreferrer" className="button-glow hidden sm:inline-flex h-11 items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            <Send className="mr-2 h-4 w-4" /> Telegram
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button type="button" className="button-glow inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5" aria-label="Открыть меню">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[88vw] border-border bg-background/95 px-0 sm:max-w-md">
              <div className="px-6 pb-6 pt-10">
                <SheetTitle className="font-display text-2xl">Меню</SheetTitle>
                <p className="mt-2 text-sm text-muted-foreground">Все разделы и быстрые ссылки в одном месте.</p>
              </div>

              <div className="space-y-2 px-4 pb-6">
                <button type="button" onClick={() => setPopularOpen((value) => !value)} className="flex w-full items-center justify-between rounded-2xl border border-border bg-card px-4 py-4 text-left font-semibold text-foreground">
                  <span className="flex items-center gap-3"><Newspaper className="h-4 w-4 text-primary" /> Популярное</span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${popularOpen ? "rotate-180" : ""}`} />
                </button>

                {popularOpen &&
                <div className="rounded-2xl border border-border bg-card/70 p-3">
                    {popularLinks.map((article) =>
                  <Link key={article.slug} to={`/articles/${article.slug}`} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-foreground transition-colors hover:bg-secondary">
                        <span className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.8)]" />{article.service}</span>
                        <span className="text-primary">→</span>
                      </Link>
                  )}
                  </div>
                }

                <a href="https://t.me/nowsub_bot" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 font-semibold text-foreground">
                  <Bot className="h-4 w-4 text-primary" /> Бот
                </a>
                <a href="/#calculator" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 font-semibold text-foreground">
                  <Calculator className="h-4 w-4 text-primary" /> Калькулятор
                </a>
                <a href="/#reviews" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 font-semibold text-foreground">
                  <MessageSquare className="h-4 w-4 text-primary" /> Отзывы
                </a>
                <a href="/#contacts" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 font-semibold text-foreground">
                  <FileText className="h-4 w-4 text-primary" /> Контакты
                </a>
              </div>

              <div className="mt-auto space-y-3 border-t border-border px-4 pt-5">
                <a href="https://t.me/nowsub_ru?direct" target="_blank" rel="noreferrer" className="button-glow flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-4 font-semibold text-primary-foreground">
                  <Send className="mr-2 h-4 w-4" /> Написать в Telegram
                </a>
                <a href="https://t.me/nowsub_bot" target="_blank" rel="noreferrer" className="flex w-full items-center justify-center rounded-2xl border border-border bg-secondary px-5 py-4 font-semibold text-secondary-foreground">
                  <Bot className="mr-2 h-4 w-4" /> Открыть бота
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>);

};

export default Header;