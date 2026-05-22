import { motion } from "framer-motion"

import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { ClosingSection } from "@/components/sections/ClosingSection"
import { GovernancePillarsSection } from "@/components/sections/GovernancePillarsSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { LeadershipSection } from "@/components/sections/LeadershipSection"
import { LegacyVisionSection } from "@/components/sections/LegacyVisionSection"
import { PhilosophySection } from "@/components/sections/PhilosophySection"
import { PrivacyTrustSection } from "@/components/sections/PrivacyTrustSection"
import { StrategicFrameworkSection } from "@/components/sections/StrategicFrameworkSection"
import { useLenis } from "@/hooks/useLenis"
import { luxuryEase } from "@/motion/variants"

function App() {
  useLenis()

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[0.9rem] focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <div className="relative min-h-screen overflow-x-clip">
        <SiteHeader />

        <main id="main-content" className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(30,55,84,0.08),transparent_44%)]" />
            <HeroSection />
            <LeadershipSection />
            <PhilosophySection />
            <GovernancePillarsSection />
            <LegacyVisionSection />
            <StrategicFrameworkSection />
            <PrivacyTrustSection />
            <ClosingSection />
          </motion.div>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}

export default App
