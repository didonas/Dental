"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

// --- Stagger Utilities ---

export const StaggerContainer = ({
  children,
  className,
  delayChildren = 0.1,
  staggerChildren = 0.1,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className,
  yOffset = 30,
}: {
  children: ReactNode;
  className?: string;
  yOffset?: number;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Single Reveal Utility ---

export const Reveal = ({
  children,
  className,
  delay = 0,
  direction = "up", // up, down, left, right, none
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) => {
  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 40 };
      case "down": return { opacity: 0, y: -40 };
      case "left": return { opacity: 0, x: 40 };
      case "right": return { opacity: 0, x: -40 };
      case "none": return { opacity: 0 };
    }
  };

  const getVisible = () => {
    switch (direction) {
      case "up":
      case "down": return { opacity: 1, y: 0 };
      case "left":
      case "right": return { opacity: 1, x: 0 };
      case "none": return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getVisible()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Parallax Image ---

export const ParallaxImage = ({
  src,
  alt,
  className,
  imageClassName,
  parallaxAmount = 40,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  parallaxAmount?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Moves the image opposite to scroll direction slightly
  const y = useTransform(scrollYProgress, [0, 1], [-parallaxAmount, parallaxAmount]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className || ""}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.1 }} // Scale up slightly to prevent edges from showing during parallax
        className={`absolute inset-0 w-full h-full object-cover origin-center ${imageClassName || ""}`}
      />
    </div>
  );
};
