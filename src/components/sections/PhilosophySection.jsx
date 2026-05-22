import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Container } from "@/components/layout/Container"
import { SectionShell } from "@/components/layout/SectionShell"
import { philosophyPrinciples } from "@/data/home"

export function PhilosophySection() {
  return (
    <SectionShell
      id="about"
      className="bg-[linear-gradient(180deg,rgba(245,247,250,0.7),rgba(255,255,255,0.46))]"
    >
      <Container className="section-padding">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Philosophy"
              title="Singularis Family approaches wealth as an enduring private office."
              description="A private model built around continuity, discretion, and restraint."
              descriptionClassName="mx-auto"
            />
          </div>

          <div className="mt-16 border-t border-primary/10 pt-8">
            {philosophyPrinciples.map((principle, index) => (
              <ScrollReveal
                key={principle.title}
                as="article"
                delay={index * 0.08}
                preset={index === 1 ? "blurUp" : "maskUp"}
                className="grid gap-6 border-b border-primary/10 py-8 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-8"
              >
                <div className="md:pt-1">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/38">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 fine-print text-primary/72">{principle.kicker}</p>
                </div>

                <div className={index === 0 ? "md:max-w-3xl" : index === 1 ? "md:max-w-2xl md:ml-auto" : "md:max-w-[42rem]"}>
                  <h3 className="text-2xl font-serif tracking-[-0.03em] text-foreground md:text-[2.15rem]">
                    {principle.title}
                  </h3>
                  <p className="body-copy mt-4 max-w-2xl text-base leading-7">
                    {principle.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
