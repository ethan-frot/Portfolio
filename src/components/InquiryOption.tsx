import { motion } from "framer-motion";
import StrokeText from "./StrokeText";
import { circleFillVariants, staggerItemVariants } from "@/utils/animations";

interface InquiryOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  onAnimationComplete?: () => void;
}

export default function InquiryOption({
  label,
  isSelected,
  onClick,
  onAnimationComplete,
}: InquiryOptionProps) {
  return (
    <div className="overflow-hidden">
      <motion.div variants={staggerItemVariants}>
        <button
          onClick={onClick}
          className="group flex w-full items-center gap-6 p-4 md:p-8 text-left transition-all cursor-pointer"
        >
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[rgb(var(--foreground))] overflow-hidden transition-colors">
            {isSelected && (
              <motion.div
                key="circle-fill"
                className="absolute inset-[1px] bg-[rgb(var(--foreground))] rounded-full"
                variants={circleFillVariants}
                initial="initial"
                animate="animate"
                style={{ transformOrigin: "bottom" }}
                onAnimationComplete={onAnimationComplete}
              />
            )}
          </div>
          <StrokeText
            className="text-3xl md:text-5xl font-black transition-all duration-300"
            strokeWidth="1px"
          >
            <span className={isSelected ? "hidden" : "group-hover:hidden"}>
              {label}
            </span>
            <span
              className={isSelected ? "inline" : "hidden group-hover:inline"}
              style={{ WebkitTextFillColor: "rgb(var(--foreground))" }}
            >
              {label}
            </span>
          </StrokeText>
        </button>
      </motion.div>
    </div>
  );
}
