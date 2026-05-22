import { createElement, useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { luxuryEase } from "@/motion/variants"
import { motionComponentMap } from "@/components/animations/motionComponentMap"

function getSegments(text, type) {
  if (type === "chars") {
    return Array.from(text)
  }

  return text.trim().split(/\s+/)
}

export function StaggerText({
  as = "p",
  text,
  type = "words",
  className,
  segmentClassName,
  delay = 0,
  duration = 1,
  stagger,
  distance = 24,
  blur = 8,
  once = true,
  amount = 0.45,
  viewportMargin = "0px 0px -8% 0px",
  ...props
}) {
  const reduceMotion = useReducedMotion()
  const segments = useMemo(() => getSegments(text, type), [text, type])

  if (reduceMotion) {
    return createElement(as, { className: cn(className), ...props }, text)
  }

  const MotionComponent = motionComponentMap[as] ?? motionComponentMap.div
  const resolvedStagger = stagger ?? (type === "chars" ? 0.016 : 0.045)

  return (
    <MotionComponent
      aria-label={text}
      className={cn(className)}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: resolvedStagger,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: viewportMargin }}
      {...props}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {type === "chars"
          ? segments.map((segment, index) =>
              segment === " " ? (
                <span
                  key={`${segment}-${index}`}
                  className="inline-block w-[0.28em]"
                />
              ) : (
                <span
                  key={`${segment}-${index}`}
                  className="inline-block overflow-hidden align-baseline"
                >
                  <motion.span
                    className={cn("inline-block", segmentClassName)}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: distance,
                        filter: `blur(${blur}px)`,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration,
                          ease: luxuryEase,
                        },
                      },
                    }}
                  >
                    {segment}
                  </motion.span>
                </span>
              ),
            )
          : segments.map((segment, index) => (
              <span
                key={`${segment}-${index}`}
                className="mr-[0.28em] inline-block overflow-hidden align-top last:mr-0"
              >
                <motion.span
                  className={cn("inline-block", segmentClassName)}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: distance,
                      filter: `blur(${blur}px)`,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration,
                        ease: luxuryEase,
                      },
                    },
                  }}
                >
                  {segment}
                </motion.span>
              </span>
            ))}
      </span>
    </MotionComponent>
  )
}
