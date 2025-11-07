import { motion, Variants } from "framer-motion";

const lineVariants: Variants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 }
  },
  exit: {
    scaleX: 0,
    transition: { duration: 0.3, ease: "easeIn", delay: 0.1 }
  },
};

export default function AnimatedLine() {
  return (
    <motion.div
      className="h-0.5 w-full bg-[rgb(var(--border))]"
      variants={lineVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        transformOrigin: "left",
      }}
    />
  );
}
