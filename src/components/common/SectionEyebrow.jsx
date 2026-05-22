import { cn } from "@/lib/utils"

export function SectionEyebrow({ className, children }) {
  return <p className={cn("section-label", className)}>{children}</p>
}
