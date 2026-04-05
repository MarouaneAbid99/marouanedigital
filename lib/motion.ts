import { Variants } from "framer-motion";

export const motionTokens = {
  duration: {
    fast: 0.2,
    standard: 0.28,
    emphasis: 0.38
  },
  durationMs: {
    fast: 200,
    standard: 280,
    emphasis: 380
  },
  ease: [0.22, 1, 0.36, 1] as const,
  stagger: {
    heroText: 0.06,
    heroMatrix: 0.09,
    section: 0.07
  },
  interaction: {
    cardLift: -3
  },
  revealOffset: 14,
  revealAmount: 0.2
};

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.revealOffset
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.emphasis,
      ease: motionTokens.ease
    }
  }
};

export const staggerParent = (staggerChildren: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren
    }
  }
});
