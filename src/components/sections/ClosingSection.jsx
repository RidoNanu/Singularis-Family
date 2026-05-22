import { FadeIn } from "@/components/animations/FadeIn"
import { AnchorLink } from "@/components/common/AnchorLink"
import { Container } from "@/components/layout/Container"
import { SectionShell } from "@/components/layout/SectionShell"
import { TextButton } from "@/components/ui/button"

export function ClosingSection() {
  return (
    <SectionShell id="contact" className="overflow-hidden">
      <Container className="relative section-padding pt-18">
        <div className="pointer-events-none absolute inset-x-0 top-6 h-64 bg-[radial-gradient(circle_at_top,rgba(30,55,84,0.08),transparent_56%)]" />
        <div className="hairline" />

        <FadeIn
          className="relative mx-auto max-w-4xl py-16 text-center md:py-20"
          delay={0.08}
          duration={1.15}
        >
          <p className="section-label mx-auto justify-center before:hidden">
            Legacy
          </p>
          <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-balance text-foreground sm:text-5xl md:text-6xl">
            Begin a private conversation.
          </h2>

          <div className="mt-10 flex items-center justify-center gap-4">
            <TextButton asChild>
              <AnchorLink href="#home">
                Private Access
              </AnchorLink>
            </TextButton>
          </div>
        </FadeIn>
      </Container>
    </SectionShell>
  )
}
