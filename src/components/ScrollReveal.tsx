import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const ScrollReveal = ({ children, delay = 0, direction = "up" }: ScrollRevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  const axis = direction === "up" ? { y: 20 } : direction === "left" ? { x: -20 } : { x: 20 };
  const reset = direction === "up" ? { y: 0 } : { x: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)", ...axis }}
      whileInView={{ opacity: 1, filter: "blur(0px)", ...reset }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
