import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Container } from "@/components/layout/Container"
import { SectionShell } from "@/components/layout/SectionShell"
import { continuityGroups } from "@/data/home"
import crowdImage from "@/assets/images/_.webp"

export function LegacyVisionSection() {
  return (
    <SectionShell id="insights" className="bg-secondary/44">
      <Container className="section-padding">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-2 w-[72%] overflow-hidden sm:top-6 sm:w-[70%] md:w-[42%]">
            <img
              src={crowdImage}
              alt=""
              className="w-full object-cover object-top opacity-[0.08] mix-blend-multiply sm:opacity-[0.12] md:opacity-[0.18]"
              style={{ filter: "grayscale(1) contrast(0.9)" }}
            />
          </div>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Continuity"
              title="Continuity through stewardship."
              description="Preparedness, purpose, and quiet continuity."
              descriptionClassName="mx-auto"
            />
          </div>

          <div className="mx-auto mt-12 md:mt-16 max-w-4xl border-t border-primary/10 pt-8">
            <div className="space-y-8">
              {continuityGroups.map((group, groupIndex) => (
                <ScrollReveal
                  key={group.label}
                  as="article"
                  delay={groupIndex * 0.08}
                  preset={groupIndex % 2 === 0 ? "directionalLeft" : "maskUp"}
                  className="grid gap-6 border-b border-primary/10 py-7 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-8"
                >
                  <div className="md:pt-1">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/38">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 fine-print text-primary/72">{group.eyebrow}</p>
                  </div>

                  <div className="max-w-3xl">
                    <h3 className="text-[clamp(1.9rem,3vw,2.65rem)] font-serif leading-[1.02] tracking-[-0.04em] text-foreground">
                      {group.title}
                    </h3>
                    <p className="body-copy mt-5 max-w-2xl text-base leading-7">
                      {group.description}
                    </p>

                    <div className="mt-6 border-t border-primary/10 pt-5">
                      {group.items.map((item) => (
                        <div key={item.title} className="grid gap-3 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-5">
                          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/38 md:pt-1">
                            {item.id}
                          </p>
                          <div>
                            <h4 className="text-[1.2rem] font-serif leading-[1.08] tracking-[-0.03em] text-foreground md:text-[1.45rem]">
                              {item.title}
                            </h4>
                            <p className="body-copy mt-3 text-sm leading-7">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
