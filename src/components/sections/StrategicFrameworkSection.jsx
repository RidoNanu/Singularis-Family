import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Container } from "@/components/layout/Container"
import { SectionShell } from "@/components/layout/SectionShell"
import { capitalArchitectureGroups } from "@/data/home"

export function StrategicFrameworkSection() {
  return (
    <SectionShell
      id="framework"
      className="bg-[linear-gradient(180deg,rgba(245,247,250,0.68),rgba(255,255,255,0.42))]"
    >
      <Container className="section-padding">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Capital Architecture"
            title="Strategic capital."
            description="Administration and allocation held in one quiet frame."
          />
        </div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-primary/10 pt-8">
          {capitalArchitectureGroups.map((group, groupIndex) => (
            <ScrollReveal
              key={group.label}
              as="article"
              delay={groupIndex * 0.08}
              preset={groupIndex % 2 === 0 ? "directionalLeft" : "blurUp"}
              className="grid gap-8 border-b border-primary/10 py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start"
            >
              <div className={groupIndex === 0 ? "max-w-xl" : "max-w-xl lg:ml-auto lg:text-right"}>
                <p className="section-label">{group.eyebrow}</p>
                <h3 className="text-[2rem] font-serif leading-[1.02] tracking-[-0.04em] text-foreground md:text-[2.4rem]">
                  {group.title}
                </h3>
                <p className="body-copy mt-5 max-w-xl text-base leading-7">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-5 lg:pt-2">
                {group.items.map((item) => (
                  <div key={item.title} className="grid gap-4 border-t border-primary/10 pt-5 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-6">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/38 md:pt-1">
                      {item.id}
                    </p>
                    <div>
                      <h4 className="text-[1.35rem] font-serif leading-[1.06] tracking-[-0.035em] text-foreground md:text-[1.6rem]">
                        {item.title}
                      </h4>
                      <p className="body-copy mt-4 max-w-2xl text-base leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  )
}
