import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { cn } from "@/lib/utils"

export function Reveal({
  className,
  children,
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
}) {
  return (
    <ScrollReveal
      className={cn(className)}
      delay={delay}
      distance={y}
      once={once}
      amount={amount}
      preset="blurUp"
    >
      {children}
    </ScrollReveal>
  )
}
