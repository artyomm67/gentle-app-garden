import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const ScrollReveal = ({ children, delay = 0, direction = "up" }: ScrollRevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <>{children}</>;

  const axis = direction === "up" ? { y: 16 } : direction === "left" ? { x: -16 } : { x: 16 };
  const reset = direction === "up" ? { y: 0 } : { x: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, ...axis }}
      whileInView={{ opacity: 1, ...reset }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
