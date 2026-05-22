import { createElement } from "react"

import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { cn } from "@/lib/utils"

export function RevealMask({
  as = "div",
  className,
  innerClassName,
  children,
  ...props
}) {
  return createElement(
    as,
    { className: cn("overflow-hidden", className) },
    <ScrollReveal preset="maskUp" className={innerClassName} {...props}>
      {children}
    </ScrollReveal>,
  )
}
