// src/motion/motion.js
import { motion } from "framer-motion";

/* -------------------------------------------------------
   Motion wrappers (reuse everywhere)
------------------------------------------------------- */

export const MotionBox = motion.div;
export const MotionCard = motion.div;
export const MotionStack = motion.div;
export const MotionItem = motion.div;

/* -------------------------------------------------------
   Core easing (premium feel)
------------------------------------------------------- */

export const easeOutExpo = [0.16, 1, 0.3, 1];

/* -------------------------------------------------------
   Section / container animations
------------------------------------------------------- */

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

/* -------------------------------------------------------
   Stagger systems
------------------------------------------------------- */

export const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

export const fastStagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* -------------------------------------------------------
   List / row animations (depth-based)
------------------------------------------------------- */

export const listItem = {
  hidden: {
    opacity: 0,
    x: -18,
    y: 8,
    rotateX: -6,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 0.8,
    },
  },
};

/* -------------------------------------------------------
   Icon entrance animation
------------------------------------------------------- */

export const iconEnter = (index = 0) => ({
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 16,
      delay: 0.35 + index * 0.08,
    },
  },
});

/* -------------------------------------------------------
   Icon interactions (hover / tap)
------------------------------------------------------- */

export const iconHover = {
  hover: {
    y: -6,
    scale: 1.12,
    rotate: 3,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 12,
    },
  },
  tap: {
    scale: 0.92,
    rotate: -3,
  },
};

/* -------------------------------------------------------
   Text subtle reveal (used for paragraphs)
------------------------------------------------------- */

export const textReveal = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};
