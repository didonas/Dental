"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  smallText: string;
  mainText: React.ReactNode;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  smallText,
  mainText,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col gap-4", alignmentClasses[align], className)}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "text-xs tracking-widest uppercase font-medium",
          light ? "text-white/60" : "text-brand-navy/60"
        )}
      >
        {smallText}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1]",
          light ? "text-white" : "text-brand-navy"
        )}
      >
        {mainText}
      </motion.h2>
    </div>
  );
}
