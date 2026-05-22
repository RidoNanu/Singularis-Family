import { StaggerText } from "@/components/animations/StaggerText"

export function CharacterReveal(props) {
  return (
    <StaggerText
      type="chars"
      stagger={0.018}
      distance={18}
      blur={6}
      duration={0.95}
      {...props}
    />
  )
}
