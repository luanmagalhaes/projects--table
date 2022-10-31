const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
};
