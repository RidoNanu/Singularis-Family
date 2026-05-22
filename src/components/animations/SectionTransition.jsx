import { useRef } from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"

import { cn } from "@/lib/utils"
import { motionSpring } from "@/motion/variants"

const sectionModes = {
  default: {
    opacityInput: [0, 0.14, 0.55, 0.9, 1],
    opacityOutput: [0.24, 0.88, 1, 0.92, 0.34],
    yOutput: [42, 12, 0, -10, -28],
    scaleOutput: [0.988, 0.995, 1, 1, 0.995],
  },
  hero: {
    opacityInput: [0, 0.12, 0.48, 0.9, 1],
    opacityOutput: [0.62, 0.94, 1, 0.9, 0.42],
    yOutput: [28, 10, 0, -10, -24],
    scaleOutput: [0.992, 0.996, 1, 1, 0.997],
  },
}

export function SectionTransition({
  id,
  className,
  children,
  mode = "default",
}) {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const settings = sectionModes[mode] ?? sectionModes.default

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useSpring(
    useTransform(
      scrollYProgress,
      settings.opacityInput,
      settings.opacityOutput,
    ),
    motionSpring,
  )
  const y = useSpring(
    useTransform(scrollYProgress, settings.opacityInput, settings.yOutput),
    motionSpring,
  )
  const scale = useSpring(
    useTransform(scrollYProgress, settings.opacityInput, settings.scaleOutput),
    motionSpring,
  )

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn("section-anchor relative", className)}
    >
      {reduceMotion ? (
        children
      ) : (
        <motion.div
          className="relative will-change-transform"
          style={{ opacity, y, scale }}
        >
          {children}
        </motion.div>
      )}
    </section>
  )
}
