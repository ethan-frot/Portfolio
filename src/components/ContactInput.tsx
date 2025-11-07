import { MoveRight, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import StrokeText from "./StrokeText";
import AnimatedLine from "./AnimatedLine";

// Variants pour les éléments conditionnels (bouton et hint)
const conditionalElementVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.3, ease: "easeIn" }
  },
};

// Variants pour les éléments principaux (input, placeholder)
const mainElementVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.3, ease: "easeIn" }
  },
};

interface ContactInputProps {
  type: "text" | "email" | "textarea";
  id: string;
  value: string;
  onChange: (value: string) => void;
  onNext?: () => void;
  placeholder: string;
  showArrowButton: boolean;
  showEnterHint: boolean;
  autoFocus?: boolean;
  allowEnterKey?: boolean;
}

export default function ContactInput({
  type,
  id,
  value,
  onChange,
  onNext,
  placeholder,
  showArrowButton,
  showEnterHint,
  autoFocus = true,
  allowEnterKey = true,
}: ContactInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value.length > 0 && allowEnterKey) {
      e.preventDefault();
      onNext?.();
    }
  };

  const commonClassName = "w-full bg-transparent py-6 pr-16 text-4xl md:text-6xl outline-none border-none cursor-text font-black";

  return (
    <div className="relative">
      {/* Input sans bordure visible */}
      <div className="relative overflow-hidden" style={{ minHeight: type === "textarea" ? "auto" : "5rem" }}>
        <div className="overflow-hidden">
          <motion.div
            variants={mainElementVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {type === "textarea" ? (
              <textarea
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={3}
                className={`${commonClassName} resize-none leading-tight`}
                autoFocus={autoFocus}
              />
            ) : (
              <input
                type={type}
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
                className={commonClassName}
                autoFocus={autoFocus}
              />
            )}
          </motion.div>
        </div>

        {/* Ligne HTML séparée qui simule la bordure de l'input - en position absolute */}
        <div className="absolute left-0 right-0 bottom-0">
          <AnimatedLine />
        </div>
        {!value && (
          <div className={`absolute left-0 top-6 pointer-events-none overflow-hidden ${type === "textarea" ? "leading-tight" : ""}`}>
            <motion.div
              variants={mainElementVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <StrokeText
                className="text-4xl md:text-6xl font-black"
                strokeWidth="1px"
              >
                {placeholder}
              </StrokeText>
            </motion.div>
          </div>
        )}
        {showArrowButton && (
          <div className={`absolute right-0 ${type === "textarea" ? "top-6" : "top-1/2 -translate-y-1/2"} overflow-hidden`}>
            <motion.button
              variants={conditionalElementVariants}
              initial="initial"
              animate={value ? "animate" : "initial"}
              exit="exit"
              className="bg-[rgb(var(--foreground))] text-[rgb(var(--background))] rounded-full p-2 hover:opacity-70 transition-opacity cursor-pointer"
              style={{ pointerEvents: value ? "auto" : "none" }}
              aria-label="Suivant"
            >
              <MoveRight size={18} />
            </motion.button>
          </div>
        )}
      </div>
      {showEnterHint && (
        <div className="absolute left-0 right-0 top-full mt-3 flex justify-end items-center gap-2 overflow-hidden">
          <motion.span
            variants={conditionalElementVariants}
            initial="initial"
            animate={value ? "animate" : "initial"}
            exit="exit"
            className="text-sm font-light opacity-60 flex items-center gap-1"
            style={{ pointerEvents: value ? "auto" : "none" }}
          >
            Appuyez sur entrée <CornerDownLeft size={14} />
          </motion.span>
        </div>
      )}
    </div>
  );
}
