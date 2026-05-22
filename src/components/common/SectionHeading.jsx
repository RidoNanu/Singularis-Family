import { BlurReveal } from "@/components/animations/BlurReveal"
import { RevealMask } from "@/components/animations/RevealMask"
import { StaggerText } from "@/components/animations/StaggerText"
import { SectionEyebrow } from "@/components/common/SectionEyebrow"
import { cn } from "@/lib/utils"

const alignments = {
  left: "items-start text-left",
  center: "items-center text-center",
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}) {
  return (
    <div className={cn("flex flex-col", alignments[align], className)}>
      {eyebrow ? (
        <RevealMask delay={0.02}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </RevealMask>
      ) : null}
      {title ? (
        <StaggerText
          as="h2"
          text={title}
          type="words"
          delay={0.08}
          stagger={0.05}
          className={cn("editorial-heading text-balance", titleClassName)}
        />
      ) : null}
      {description ? (
        <BlurReveal delay={0.22}>
          <p
            className={cn(
              "body-copy mt-6 max-w-2xl text-pretty",
              align === "center" && "mx-auto",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        </BlurReveal>
      ) : null}
    </div>
  )
}
