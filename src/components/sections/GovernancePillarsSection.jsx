import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Container } from "@/components/layout/Container"
import { SectionShell } from "@/components/layout/SectionShell"
import { governancePillars } from "@/data/home"
import handshakeIllustration from "@/assets/images/midjourney-handshake.webp"

export function GovernancePillarsSection() {
  return (
    <SectionShell id="services">
      <Container className="section-padding">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Governance"
              title="Governance preserves legacy."
              description="Clear mandate. Disciplined rhythm. Preserved intent."
            />
          </div>

          <div className="mx-auto mt-12 md:mt-16 max-w-4xl border-t border-primary/10 pt-8 relative">
            <div aria-hidden className="pointer-events-none absolute -left-2 top-3 -z-10 w-[58%] overflow-hidden md:-left-12 md:top-8 md:w-[360px]">
              <img
                src={handshakeIllustration}
                alt=""
                className="w-full object-cover opacity-[0.06] mix-blend-multiply sm:opacity-[0.11] md:opacity-[0.18]"
                style={{ filter: "grayscale(1) contrast(0.9)" }}
              />
            </div>
            <ScrollReveal as="article" delay={0.06} preset="scaleSoft" className="space-y-8">
              <div className="max-w-2xl">
                <p className="section-label">Core mandate</p>
                <h3 className="text-[clamp(2rem,3.4vw,3rem)] font-serif leading-[1.02] tracking-[-0.04em] text-foreground">
                  {governancePillars[0].title}
                </h3>
                <p className="body-copy mt-5 max-w-xl text-base leading-7">
                  {governancePillars[0].description}
                </p>
              </div>

              <div className="grid gap-5 border-t border-primary/10 pt-6 md:grid-cols-2">
                {governancePillars.slice(1).map((pillar) => (
                  <div key={pillar.title} className="border-t border-primary/10 pt-5">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/38">
                      {pillar.id}
                    </p>
                    <h4 className="mt-3 text-[1.35rem] font-serif leading-[1.08] tracking-[-0.035em] text-foreground md:text-[1.55rem]">
                      {pillar.title}
                    </h4>
                    <p className="body-copy mt-4 text-base leading-7">
                      {pillar.description}
                    </p>
                    <p className="mt-4 text-[0.72rem] uppercase tracking-[0.18em] text-primary/46">
                      {pillar.note}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
