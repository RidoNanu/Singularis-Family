import { cn } from "@/lib/utils"

export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}) {
  return (
    <Component className={cn("section-frame", className)} {...props}>
      {children}
    </Component>
  )
}
