import { AnchorLink } from "@/components/common/AnchorLink"
import { BrandMark } from "@/components/common/BrandMark"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/animations/Reveal"
import { navigationItems } from "@/constants/navigation"

export function SiteFooter() {
  return (
    <footer className="relative z-10 bg-[linear-gradient(180deg,#fbfcfd,white)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-px bg-primary/8" />
        <div className="absolute right-[8%] top-[8%] h-[74%] w-px bg-primary/12" />
      </div>

      <Container className="relative py-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal className="relative">
            <div className="max-w-lg">
              <p className="fine-print">Singularis mandate</p>
              <h2 className="mt-4 font-serif text-[2rem] md:text-[2.75rem] leading-[1.02] tracking-[-0.02em] text-foreground">
                Quiet structures. Lasting continuity.
              </h2>

              <p className="mt-6 body-copy text-base text-primary/72 max-w-xl">
                Singularis Family offers a discreet and enduring presence for governance, stewardship and legacy. We prioritise clarity and permanence over rhetoric.
              </p>

              <div className="mt-8 h-px bg-primary/10 w-full" />
            </div>
          </Reveal>

          <Reveal className="relative" delay={80}>
            <div className="flex flex-col items-start gap-8">
              <div className="w-full">
                <BrandMark className="!gap-4" />
                <p className="mt-3 fine-print text-primary/64">
                  Independent premium presentation for governance-led family capital.
                </p>
              </div>

              <div className="hidden sm:block w-full max-w-sm rounded-lg bg-white/60 backdrop-blur-sm p-6 border border-primary/8 shadow-[0_8px_30px_rgba(30,55,84,0.04)]">
                <p className="fine-print">Begin a private conversation</p>
                <p className="mt-3 text-sm text-primary/72">
                  To begin a discreet dialogue about governance, succession or stewardship, request a private conversation with our office.
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <AnchorLink
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-md bg-foreground text-white px-4 py-2 text-sm shadow-sm hover:opacity-95"
                  >
                    Private access
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </AnchorLink>

                  <AnchorLink href="#contact" className="fine-print text-primary/72">
                    Request an introduction
                  </AnchorLink>
                </div>
              </div>

              <div className="w-full pt-6 border-t border-primary/10">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  {navigationItems.map((item) => (
                    <AnchorLink key={item.href} href={item.href} className="fine-print">
                      {item.label}
                    </AnchorLink>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-primary/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary/72">© {new Date().getFullYear()} Singularis Family. All rights reserved.</p>
            <p className="text-sm text-primary/72">For professional use only — discretion advised.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
