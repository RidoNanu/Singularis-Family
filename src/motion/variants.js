export const luxuryEase = [0.22, 1, 0.36, 1]
export const editorialEase = [0.16, 1, 0.3, 1]
export const motionSpring = {
  stiffness: 110,
  damping: 24,
  mass: 0.82,
}

function getTransition({ delay = 0, duration = 1.05, ease = luxuryEase } = {}) {
  return {
    duration,
    ease,
    delay,
  }
}

export const fadeUp = {
  hidden: ({ y = 24 } = {}) => ({
    opacity: 0,
    y,
  }),
  visible: ({ delay = 0 } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: luxuryEase,
      delay,
    },
  }),
}

export const revealPresets = {
  fade: {
    hidden: () => ({
      opacity: 0,
    }),
    visible: ({ delay = 0, duration = 1 } = {}) => ({
      opacity: 1,
      transition: getTransition({ delay, duration }),
    }),
  },
  fadeUp: {
    hidden: ({ distance = 28 } = {}) => ({
      opacity: 0,
      y: distance,
    }),
    visible: ({ delay = 0, duration = 1.05 } = {}) => ({
      opacity: 1,
      y: 0,
      transition: getTransition({ delay, duration }),
    }),
  },
  blurUp: {
    hidden: ({ distance = 24, blur = 10 } = {}) => ({
      opacity: 0,
      y: distance,
      filter: `blur(${blur}px)`,
    }),
    visible: ({ delay = 0, duration = 1.05 } = {}) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: getTransition({ delay, duration }),
    }),
  },
  scaleSoft: {
    hidden: ({ scale = 0.985, blur = 8 } = {}) => ({
      opacity: 0,
      scale,
      filter: `blur(${blur}px)`,
    }),
    visible: ({ delay = 0, duration = 1.1 } = {}) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: getTransition({ delay, duration }),
    }),
  },
  directionalLeft: {
    hidden: ({ distance = 36, blur = 8 } = {}) => ({
      opacity: 0,
      x: -distance,
      filter: `blur(${blur}px)`,
    }),
    visible: ({ delay = 0, duration = 1.05 } = {}) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: getTransition({ delay, duration }),
    }),
  },
  directionalRight: {
    hidden: ({ distance = 36, blur = 8 } = {}) => ({
      opacity: 0,
      x: distance,
      filter: `blur(${blur}px)`,
    }),
    visible: ({ delay = 0, duration = 1.05 } = {}) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: getTransition({ delay, duration }),
    }),
  },
  maskUp: {
    hidden: () => ({
      opacity: 0.01,
      y: "105%",
    }),
    visible: ({ delay = 0, duration = 1.1 } = {}) => ({
      opacity: 1,
      y: 0,
      transition: getTransition({ delay, duration, ease: editorialEase }),
    }),
  },
}
