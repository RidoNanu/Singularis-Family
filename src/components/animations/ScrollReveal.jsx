import { createElement } from "react"
import { useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { revealPresets } from "@/motion/variants"
import { motionComponentMap } from "@/components/animations/motionComponentMap"

export function ScrollReveal({
  as = "div",
  preset = "blurUp",
  className,
  children,
  delay = 0,
  duration = 1.05,
  distance = 28,
  blur = 10,
  scale = 0.985,
  once = true,
  amount = 0.22,
  viewportMargin = "0px 0px -8% 0px",
  ...props
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return createElement(as, { className: cn(className), ...props }, children)
  }

  const MotionComponent = motionComponentMap[as] ?? motionComponentMap.div
  const variants = revealPresets[preset] ?? revealPresets.blurUp

  return (
    <MotionComponent
      className={cn(className)}
      custom={{ delay, duration, distance, blur, scale }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: viewportMargin }}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
