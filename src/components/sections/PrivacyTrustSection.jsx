import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Container } from "@/components/layout/Container"
import { SectionShell } from "@/components/layout/SectionShell"
import { protectionGroups } from "@/data/home"

export function PrivacyTrustSection() {
  return (
    <SectionShell
      id="privacy"
      className="bg-[linear-gradient(180deg,rgba(245,247,250,0.58),rgba(255,255,255,0.92))]"
    >
      <Container className="section-padding">
        <div className="mx-auto grid max-w-5xl gap-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Protection"
              title="Protection preserves continuity."
              description="Security, privacy, and calm under pressure."
            />
          </div>

          <div className="border-t border-primary/10 pt-8">
            <ScrollReveal as="article" delay={0.06} preset="directionalLeft" className="space-y-10">
              <div className="max-w-2xl">
                <p className="section-label">{protectionGroups[0].eyebrow}</p>
                <h3 className="text-[clamp(2rem,3.4vw,3rem)] font-serif leading-[1.02] tracking-[-0.04em] text-foreground">
                  {protectionGroups[0].title}
                </h3>
                <p className="body-copy mt-5 max-w-xl text-base leading-7">
                  {protectionGroups[0].description}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {protectionGroups[0].items.map((item) => (
                  <div key={item.title} className="border-t border-primary/10 pt-5">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/38">
                      {item.id}
                    </p>
                    <h4 className="mt-3 text-[1.25rem] font-serif leading-[1.08] tracking-[-0.03em] text-foreground md:text-[1.5rem]">
                      {item.title}
                    </h4>
                    <p className="body-copy mt-3 text-sm leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-primary/10 pt-8">
                <div className="max-w-2xl">
                  <p className="section-label">{protectionGroups[1].eyebrow}</p>
                  <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] font-serif leading-[1.02] tracking-[-0.04em] text-foreground">
                    {protectionGroups[1].title}
                  </h3>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {protectionGroups[1].items.map((item) => (
                    <div key={item.title} className="border-t border-primary/10 pt-5">
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/38">
                        {item.id}
                      </p>
                      <h4 className="mt-3 text-[1.1rem] font-serif leading-[1.08] tracking-[-0.03em] text-foreground md:text-[1.35rem]">
                        {item.title}
                      </h4>
                      <p className="body-copy mt-3 text-sm leading-7">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
