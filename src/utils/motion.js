/**
 * Global Motion System - Premium Animation Configuration
 * 
 * Core motion style: smooth, soft, controlled, slightly luxurious, clean, trustworthy
 */

// ===================================
// TIMING & EASING
// ===================================
export const TRANSITION_FAST = '0.2s';
export const TRANSITION_BASE = '0.3s';
export const TRANSITION_SLOW = '0.5s';
export const TRANSITION_REVEAL = '0.6s';
export const TRANSITION_REVEAL_SLOW = '0.8s';

export const EASING_SMOOTH = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const EASING_EASE_OUT = 'cubic-bezier(0.33, 1, 0.68, 1)';
export const EASING_EASE_IN_OUT = 'cubic-bezier(0.65, 0, 0.35, 1)';

// ===================================
// ENTRANCE ANIMATIONS (Framer Motion Style)
// ===================================
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASING_EASE_OUT }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: EASING_EASE_OUT }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: EASING_EASE_OUT }
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: EASING_EASE_OUT }
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: EASING_EASE_OUT }
};

// ===================================
// STAGGER CONFIGURATION
// ===================================
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerFast = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const itemReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASING_EASE_OUT }
};

// ===================================
// HOVER EFFECTS
// ===================================
export const hoverLift = {
  y: -4,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  transition: { duration: 0.3, ease: EASING_EASE_OUT }
};

export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.25, ease: EASING_EASE_OUT }
};

export const pressScale = {
  scale: 0.98,
  transition: { duration: 0.12 }
};

// ===================================
// HERO ANIMATIONS
// ===================================
export const heroReveal = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASING_EASE_OUT }
};

export const heroImageScale = {
  initial: { scale: 1.05, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.9, ease: EASING_EASE_OUT }
};

// ===================================
// CARD ANIMATIONS
// ===================================
export const cardEntrance = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASING_EASE_OUT }
};

export const cardHover = {
  y: -6,
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
  transition: { duration: 0.35, ease: EASING_EASE_OUT }
};

// ===================================
// TEXT REVEAL ANIMATIONS
// ===================================
export const textLineReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASING_EASE_OUT }
};

// ===================================
// COUNTER / NUMBER ANIMATION
// ===================================
export const counterAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: EASING_EASE_OUT }
};

// ===================================
// BACKGROUND ANIMATIONS
// ===================================
export const backgroundGradient = {
  background: [
    'linear-gradient(135deg, rgba(30, 58, 95, 0.05) 0%, rgba(8, 145, 178, 0.05) 100%)',
    'linear-gradient(135deg, rgba(30, 58, 95, 0.08) 0%, rgba(8, 145, 178, 0.08) 100%)',
    'linear-gradient(135deg, rgba(30, 58, 95, 0.05) 0%, rgba(8, 145, 178, 0.05) 100%)'
  ],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

// ===================================
// FLOATING ANIMATION
// ===================================
export const float = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

// ===================================
// PAGE LOAD SEQUENCE
// ===================================
export const pageLoadSequence = {
  navbar: {
    initial: { y: -16, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0 }
  },
  heroHeadline: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.15 }
  },
  heroSubheadline: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.35 }
  },
  heroButtons: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay: 0.5 }
  },
  heroVisual: {
    initial: { scale: 1.04, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.9, delay: 0.25 }
  }
};
