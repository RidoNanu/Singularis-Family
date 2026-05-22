import { ArrowRight } from "lucide-react"

import { BlurReveal } from "@/components/animations/BlurReveal"
import { CharacterReveal } from "@/components/animations/CharacterReveal"
import { FadeIn } from "@/components/animations/FadeIn"
import { RevealMask } from "@/components/animations/RevealMask"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { AnchorLink } from "@/components/common/AnchorLink"
import { SectionEyebrow } from "@/components/common/SectionEyebrow"
import { Container } from "@/components/layout/Container"
import { SectionShell } from "@/components/layout/SectionShell"
import { PrimaryButton, TextButton } from "@/components/ui/button"
import { heroHighlights, heroMetrics } from "@/data/home"

export function HeroSection() {
  return (
    <SectionShell id="home" className="overflow-hidden" mode="hero">
      <Container className="relative min-h-[72vh] pt-20 pb-12 md:min-h-screen md:pt-36 md:pb-24">
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(22rem,0.96fr)] lg:items-center lg:gap-14">
          <div className="relative z-10 max-w-[22rem] sm:max-w-[32rem] lg:max-w-[46rem] lg:pl-2">
            <RevealMask>
              <SectionEyebrow>Private legacy office</SectionEyebrow>
            </RevealMask>

            <h1 className="mt-3 max-w-[15ch] font-serif text-[clamp(2.2rem,9vw,5.05rem)] leading-[1.02] tracking-[-0.055em] text-foreground text-balance sm:max-w-[18ch] lg:max-w-[16ch]">
              <CharacterReveal
                as="span"
                text="Structures built to preserve continuity."
                delay={0.08}
                amount={0.56}
                className="block"
              />
            </h1>

            <BlurReveal delay={0.2}>
              <p className="body-copy mt-5 max-w-[22rem] text-pretty text-[0.92rem] leading-6 text-primary/70">
                Singularis Family is a private office for governance, capital,
                protection, and stewardship.
              </p>
            </BlurReveal>

            <FadeIn delay={0.32}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryButton size="lg" asChild className="rounded-none">
                  <AnchorLink href="#about">
                    Learn Our Philosophy
                    <ArrowRight className="size-4" />
                  </AnchorLink>
                </PrimaryButton>
                <TextButton asChild>
                  <AnchorLink href="#services">Explore Our Services</AnchorLink>
                </TextButton>
              </div>
            </FadeIn>
          </div>

          <div className="lg:hidden">
            <ScrollReveal delay={0.22} preset="scaleSoft" amount={0.3} className="relative mt-10">
              <div className="relative mx-auto w-full max-w-[24rem] overflow-hidden border border-primary/10 bg-white/60 px-5 py-6 shadow-[0_18px_42px_rgba(30,55,84,0.04)] backdrop-blur-[2px]">
                <div className="absolute inset-0">
                  <div className="absolute left-4 top-4 h-px w-[72%] bg-primary/[0.06]" />
                  <div className="absolute left-4 top-4 h-[72%] w-px bg-primary/[0.06]" />
                  <div className="absolute right-4 top-6 h-[68%] w-px bg-primary/[0.05]" />
                  <div className="absolute bottom-5 left-1/3 h-px w-[46%] bg-primary/[0.06]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(30,55,84,0.07),transparent_50%)]" />
                </div>

                <div className="relative">
                  <p className="fine-print">Singularis mandate</p>
                  <p className="mt-4 max-w-[12ch] font-serif text-[1.7rem] leading-[1.04] tracking-[-0.04em] text-foreground text-balance">
                    Quiet structures. Lasting continuity.
                  </p>
                  <p className="mt-4 max-w-[18ch] text-sm leading-6 text-primary/68 text-pretty">
                    Governance, stewardship, succession.
                  </p>

                  <div className="mt-6 border-t border-primary/10 pt-4">
                    {heroHighlights.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4">
                        <span className="fine-print">{item.label}</span>
                        <span className="text-sm text-primary/76">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal
            delay={0.22}
            preset="scaleSoft"
            amount={0.3}
            className="relative hidden lg:block lg:pl-8"
          >
            <div className="relative mx-auto h-[30rem] w-full max-w-[36rem]">
              <div className="absolute inset-x-0 top-0 h-px bg-primary/10" />
              <div className="absolute left-0 top-0 h-full w-px bg-primary/10" />
              <div className="absolute bottom-0 right-0 h-px w-[84%] bg-primary/10" />
              <div className="absolute right-[8%] top-[8%] h-[74%] w-px bg-primary/12" />
              <div className="absolute left-[12%] top-[12%] h-[44%] w-[68%] rounded-t-[11rem] border border-primary/10 border-b-0" />
              <div className="absolute left-[22%] top-[21%] h-[50%] w-[52%] border-l border-t border-primary/12" />
              <div className="absolute left-[10%] right-[28%] top-[67%] h-px bg-primary/10" />

              <div className="absolute left-[10%] top-[20%] max-w-[12rem]">
                <p className="fine-print">Singularis mandate</p>
                <p className="mt-4 font-serif text-[2rem] leading-[1.02] tracking-[-0.04em] text-foreground">
                  Quiet structures. Lasting continuity.
                </p>
              </div>

              <div className="absolute right-0 top-[36%] max-w-[13rem] border-t border-primary/10 pt-4">
                <p className="fine-print">Office model</p>
                <p className="mt-3 text-sm leading-7 text-primary/72">
                  Governance, stewardship, succession.
                </p>
              </div>

              <div className="absolute bottom-0 left-[10%] right-0 border-t border-primary/10">
                <div className="divide-y divide-primary/10">
                  {heroHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-6 py-4"
                    >
                      <span className="fine-print">{item.label}</span>
                      <span className="text-sm text-primary/78">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 border-y border-primary/10 md:mt-18">
          <div className="grid divide-y divide-primary/10 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-2">
            {heroMetrics.map((item, index) => (
              <ScrollReveal
                key={item.label}
                as="article"
                delay={0.38 + index * 0.07}
                preset={index % 2 === 0 ? "directionalLeft" : "blurUp"}
                className="px-0 py-6 md:px-6 xl:px-8"
              >
                <p className="fine-print">{item.label}</p>
                <p className="mt-4 max-w-[18rem] text-sm leading-7 text-primary/76">
                  {item.value}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
