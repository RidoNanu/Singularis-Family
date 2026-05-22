import { SectionTransition } from "@/components/animations/SectionTransition"

export function SectionShell({ id, className, children, mode = "default" }) {
  return (
    <SectionTransition id={id} className={className} mode={mode}>
      {children}
    </SectionTransition>
  )
}
