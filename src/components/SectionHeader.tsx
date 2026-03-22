import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ eyebrow, title, description, align = "left" }: SectionHeaderProps) => {
  const centered = align === "center";

  return (
    <motion.div
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeader;