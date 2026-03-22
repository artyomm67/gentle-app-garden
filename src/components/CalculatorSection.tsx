import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Bot, CheckCircle2, Send, Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const currencies = [
  { code: "USD", label: "Доллар ($)", rate: 91.77 },
  { code: "EUR", label: "Евро (€)", rate: 99.5 },
  { code: "GBP", label: "Фунт (£)", rate: 116.2 },
];

const CalculatorSection = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);

  const parsedAmount = useMemo(() => Number(amount.replace(",", ".")), [amount]);
  const hasInput = amount.trim().length > 0;
  const isInvalid = hasInput && (!Number.isFinite(parsedAmount) || parsedAmount <= 0);
  const cur = currencies.find((c) => c.code === currency)!;
  const baseRub = !isInvalid && hasInput ? parsedAmount * cur.rate : 0;
  const commission = !isInvalid && hasInput ? (parsedAmount <= 30 ? 1000 : baseRub * 0.3) : 0;
  const total = Math.round(baseRub + commission);

  useEffect(() => {
    if (!hasInput || isInvalid) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timeout = window.setTimeout(() => setIsLoading(false), 220);
    return () => window.clearTimeout(timeout);
  }, [currency, hasInput, isInvalid, amount]);

  return (
    <section id="calculator" className="py-20 md:py-24">
      <div className="container max-w-2xl">
        <SectionHeader
          eyebrow="Инструмент"
          title="Быстрый калькулятор стоимости"
          description="Крупные поля, ясные подсказки и моментальная обратная связь помогают увидеть ориентир без лишних действий."
        />

        <div className="glass-card-glow mt-10 space-y-6 rounded-[2rem] p-5 sm:p-8">
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <label htmlFor="amount" className="block text-sm font-medium text-foreground">Введите сумму</label>
              <span className="text-xs font-medium text-muted-foreground">Например: 20, 49.9, 120</span>
            </div>
            <Input
              id="amount"
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Например, 20"
              className="h-14 rounded-2xl border-border bg-secondary/60 px-5 text-lg font-bold text-foreground placeholder:text-muted-foreground/70"
            />
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Ориентировочный расчет. Точную сумму и финальный сервис подтверждаем в Telegram перед оплатой.
            </p>
            {isInvalid ? (
              <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
                <AlertCircle className="h-4 w-4" /> Введите число больше 0.
              </div>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {[10, 25, 50, 100].map((preset) => (
                <motion.button
                  key={preset}
                  type="button"
                  onClick={() => setAmount(String(preset))}
                  className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-primary/10"
                  whileTap={{ scale: 0.97 }}
                >
                  {preset} {currency}
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <label className="block text-sm font-medium text-foreground">Валюта</label>
              <span className="text-xs font-medium text-muted-foreground">Выберите, в чем оплачивается сервис</span>
            </div>
            <div className="flex gap-2">
              {currencies.map((c) => (
                <motion.button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className={`flex-1 rounded-xl border py-3 text-sm font-bold transition-all ${
                    currency === c.code
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
                      : "bg-secondary/60 border-border text-secondary-foreground hover:bg-secondary/80 hover:border-primary/20"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {c.code}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[15rem] overflow-hidden rounded-[1.75rem] border border-primary/30 bg-primary/8 p-5 shadow-[0_0_60px_hsl(var(--primary)/0.12)] sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-glow/5" />
            <div className="relative">
              <AnimatePresence mode="wait">
                {!hasInput ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="flex min-h-[11rem] flex-col justify-center rounded-[1.5rem] border border-dashed border-primary/25 bg-card/30 p-6"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Empty state</p>
                    <h3 className="mt-3 text-2xl font-bold text-foreground">Введите сумму, чтобы увидеть ориентир по стоимости</h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">Калькулятор сразу покажет итог, комиссию и курс — без переходов и дополнительных кликов.</p>
                  </motion.div>
                ) : isInvalid ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="flex min-h-[11rem] flex-col justify-center rounded-[1.5rem] border border-destructive/25 bg-destructive/10 p-6"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-destructive">Error state</p>
                    <h3 className="mt-3 text-2xl font-bold text-foreground">Не удалось посчитать стоимость</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">Проверьте сумму: она должна быть больше нуля и указана числом.</p>
                  </motion.div>
                ) : isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="space-y-5"
                  >
                    <Skeleton className="h-4 w-28 rounded-full bg-primary/20" />
                    <Skeleton className="h-14 w-48 bg-primary/20" />
                    <div className="grid gap-3 sm:grid-cols-3">
                      <Skeleton className="h-24 rounded-2xl bg-card/70" />
                      <Skeleton className="h-24 rounded-2xl bg-card/70" />
                      <Skeleton className="h-24 rounded-2xl bg-card/70" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="space-y-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Расчет готов
                        </span>
                        <p className="mt-3 text-sm text-muted-foreground">С учётом комиссии и выбранной валюты</p>
                      </div>
                      <motion.span
                        key={total}
                        className="text-4xl font-black text-foreground sm:text-5xl"
                        initial={{ scale: 1.08, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {total.toLocaleString("ru-RU")} ₽
                      </motion.span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Сумма</div>
                        <div className="mt-2 text-xl font-bold text-foreground">{parsedAmount.toLocaleString("ru-RU")} {cur.code}</div>
                      </div>
                      <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Комиссия</div>
                        <div className="mt-2 text-xl font-bold text-foreground">{Math.round(commission).toLocaleString("ru-RU")} ₽</div>
                      </div>
                      <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4 shadow-[0_0_24px_hsl(var(--primary)/0.12)]">
                        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Курс</div>
                        <div className="mt-2 text-xl font-bold text-foreground">1 {cur.code} = {cur.rate} ₽</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <motion.a
              href="https://t.me/nowsub_ru?direct"
              target="_blank"
              rel="noreferrer"
              className="button-glow flex min-h-14 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 font-bold text-primary-foreground"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="h-4 w-4" /> Написать в Telegram
            </motion.a>
            <motion.a
              href="https://t.me/nowsub_bot"
              target="_blank"
              rel="noreferrer"
              className="button-secondary-glow flex min-h-14 items-center justify-center gap-2 rounded-xl border border-border bg-secondary/80 px-5 py-3.5 font-bold text-secondary-foreground"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Bot className="h-4 w-4" /> Открыть бота
            </motion.a>
          </div>

          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-xl bg-secondary/50 p-4">
              <div className="text-muted-foreground mb-1 text-xs font-medium">Как считать</div>
              <div className="font-bold text-foreground">Сумма по курсу + комиссия сервиса</div>
            </div>
            <div className="rounded-xl bg-secondary/50 p-4">
              <div className="text-muted-foreground mb-1 text-xs font-medium">Комиссия</div>
              <div className="font-bold">до 30$ — 1 000 ₽</div>
              <div className="font-bold">от 30$ — 30%</div>
            </div>
          </div>

          <div className="rounded-xl border border-primary/15 bg-primary/5 p-4 text-sm animate-breathe">
            <span className="inline-flex items-center gap-2 font-bold text-primary"><Sparkles className="h-4 w-4" /> Гарантия:</span>{" "}
            <span className="text-muted-foreground">Если подписка не активирована, разберемся в ситуации и вернем средства по условиям заказа.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
