"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-brand-gold text-brand-navy hover:bg-white",
    secondary: "bg-brand-navy text-white hover:bg-brand-navy-light",
    outline: "border border-white/20 text-white hover:bg-white hover:text-brand-navy",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative px-8 py-4 flex items-center justify-center gap-2 rounded-sm font-medium text-sm transition-colors duration-300 overflow-hidden group",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Light sweep effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
    </motion.button>
  );
}
