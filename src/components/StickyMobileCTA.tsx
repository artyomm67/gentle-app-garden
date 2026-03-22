import { motion } from "framer-motion";
import { Calculator, Send } from "lucide-react";

const StickyMobileCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/80 px-4 py-3 backdrop-blur-2xl md:hidden">
    <div className="mx-auto flex max-w-md items-center gap-3 rounded-[1.25rem] border border-primary/15 bg-card/70 p-2 shadow-[0_-12px_50px_hsl(var(--background)/0.45)]">
      <motion.a
        href="#calculator"
        className="button-glow flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground"
        whileTap={{ scale: 0.97 }}
      >
        <Calculator className="h-4 w-4" /> Рассчитать
      </motion.a>
      <motion.a
        href="https://t.me/nowsub_ru?direct"
        target="_blank"
        rel="noreferrer"
        className="button-secondary-glow flex h-12 items-center justify-center rounded-xl border border-border bg-secondary/80 px-4 text-sm font-bold text-secondary-foreground"
        whileTap={{ scale: 0.97 }}
      >
        <Send className="h-4 w-4" /> Telegram
      </motion.a>
    </div>
  </div>
);

export default StickyMobileCTA;