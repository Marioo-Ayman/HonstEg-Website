// Animation variants for Framer Motion
// RTL-aware animations that adapt based on language direction

import type { Variants, Variant } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

export const slideInLeft = (isRTL = false): Variants => ({
  hidden: { opacity: 0, x: isRTL ? 100 : -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
});

export const slideInRight = (isRTL = false): Variants => ({
  hidden: { opacity: 0, x: isRTL ? -100 : 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const iconFloat: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const hoverScale: Variant = {
  scale: 1.05,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: { duration: 0.3 }
};

export const hoverBounce: Variant = {
  scale: 1.1,
  rotate: [0, -5, 5, 0],
  transition: { duration: 0.4 }
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const parallaxEffect = {
  initial: { y: 0 },
  animate: (scrollY: number) => ({
    y: scrollY * 0.5,
    transition: { duration: 0 }
  })
};

// Text reveal animation with stagger
export const textReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

export const textLine: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut"
    }
  }
};

// Card hover effects
export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.03, 
    y: -8,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Button animations
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: { scale: 0.95 }
};

// Scroll-triggered animations
export const scrollFadeIn: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

// Logo rotation on hover
export const logoHover: Variants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: { 
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};