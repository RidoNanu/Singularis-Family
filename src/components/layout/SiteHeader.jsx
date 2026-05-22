import { useEffect, useEffectEvent, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"

import { AnchorLink } from "@/components/common/AnchorLink"
import { BrandMark } from "@/components/common/BrandMark"
import { PrimaryButton, SecondaryButton } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { navigationItems } from "@/constants/navigation"
import { cn } from "@/lib/utils"

const primaryNavigationItems = navigationItems.filter((item) => !item.cta)
const ctaNavigationItem = navigationItems.find((item) => item.cta)

function NavigationList({ className, onSelect, items = primaryNavigationItems }) {
  return (
    <div className={cn("flex items-center gap-10", className)}>
      {items.map((item) => (
        <AnchorLink
          key={item.href}
          href={item.href}
          onClick={onSelect}
          className="nav-link after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary/28 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          {item.label}
        </AnchorLink>
      ))}
    </div>
  )
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 18 : false,
  )
  const [menuOpen, setMenuOpen] = useState(false)

  const syncScrollState = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 18)
  })

  useEffect(() => {
    function onScroll() {
      syncScrollState()
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-all duration-500",
          isScrolled
            ? "border-primary/10 bg-white/82 shadow-[0_12px_38px_rgba(30,55,84,0.06)] backdrop-blur-md"
            : "border-primary/8 bg-white/96",
        )}
      >
        <Container className="flex items-center justify-between gap-3 py-3.5 md:gap-5 md:py-[1.125rem]">
          <AnchorLink href="#home" aria-label="Singularis Family home">
            <BrandMark compact />
          </AnchorLink>

          <nav className="hidden lg:flex">
            <NavigationList />
          </nav>

          {ctaNavigationItem ? (
            <div className="hidden lg:flex">
              <PrimaryButton
                size="sm"
                asChild
                className="rounded-none text-[0.72rem] font-medium uppercase tracking-[0.16em]"
              >
                <AnchorLink href={ctaNavigationItem.href}>
                  {ctaNavigationItem.label}
                  <ArrowUpRight className="size-4" />
                </AnchorLink>
              </PrimaryButton>
            </div>
          ) : null}

          <SecondaryButton
            size="icon"
            className="lg:hidden size-9 rounded-[0.7rem] border-primary/12 bg-white/72 shadow-[0_6px_16px_rgba(30,55,84,0.05)] backdrop-blur-sm"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </SecondaryButton>
        </Container>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-primary/10 lg:hidden"
            >
              <Container className="py-4">
                <NavigationList
                  className="flex-col items-start gap-4"
                  items={primaryNavigationItems}
                  onSelect={() => setMenuOpen(false)}
                />
                {ctaNavigationItem ? (
                  <PrimaryButton
                    size="sm"
                    asChild
                    className="mt-5 rounded-none text-[0.72rem] font-medium uppercase tracking-[0.16em]"
                  >
                    <AnchorLink
                      href={ctaNavigationItem.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {ctaNavigationItem.label}
                      <ArrowUpRight className="size-4" />
                    </AnchorLink>
                  </PrimaryButton>
                ) : null}
              </Container>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
