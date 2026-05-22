import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { SectionShell } from "@/components/layout/SectionShell"
import { luxuryEase, editorialEase } from "@/motion/variants"

import revathiAnandPortrait from "@/assets/images/Revathi-Anand-detail-img-01.webp"
import aravindThondanPortrait from "@/assets/images/aravind-thondan-detail-img-01.webp"

/* ─── Scroll-based parallax ────────────────────────────────────────────────── */
function useParallax(ref, outputRange) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  return useTransform(scrollYProgress, [0, 1], outputRange)
}

/* ─── Reliable whileInView reveal wrapper ──────────────────────────────────── */
function Reveal({ children, delay = 0, y = 32, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 1.1, ease: luxuryEase, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Structural line decoration ───────────────────────────────────────────── */
function ArchitecturalLines() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <line x1="8%" y1="0%" x2="8%" y2="100%" stroke="rgba(30,55,84,0.045)" strokeWidth="1" />
      <line x1="92%" y1="0%" x2="92%" y2="100%" stroke="rgba(30,55,84,0.045)" strokeWidth="1" />
      <line x1="0%" y1="18%" x2="100%" y2="18%" stroke="rgba(30,55,84,0.03)" strokeWidth="1" />
      <line x1="0%" y1="82%" x2="100%" y2="82%" stroke="rgba(30,55,84,0.03)" strokeWidth="1" />
      <line x1="0%" y1="0%" x2="18%" y2="100%" stroke="rgba(30,55,84,0.022)" strokeWidth="1" />
    </svg>
  )
}

/* ─── Individual cinematic portrait ────────────────────────────────────────── */
function CinematicPortrait({ src, alt, objectPosition = "center 12%", motionY }) {
  return (
    <motion.div className="leadership-portrait-frame" style={{ y: motionY }}>
      <div className="leadership-portrait-overlay" />
      <img
        src={src}
        alt={alt}
        className="leadership-portrait-img"
        style={{ objectPosition }}
      />
      <div className="leadership-portrait-fade" />
    </motion.div>
  )
}

/* ─── Floating editorial label ──────────────────────────────────────────────── */
function EditorialLabel({ name, title, statement, align = "left", delay = 0 }) {
  return (
    <Reveal delay={delay} y={20} className={`leadership-label leadership-label--${align}`}>
      <p className="leadership-label-name">{name}</p>
      <p className="leadership-label-title">{title}</p>
      <p className="leadership-label-statement">{statement}</p>
    </Reveal>
  )
}

/* ─── Main section ─────────────────────────────────────────────────────────── */
export function LeadershipSection() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const [activeFounder, setActiveFounder] = useState(null)

  const founders = {
    revathi: {
      name: "Revathi Anand",
      title: "Director",
      excerpt: "Focused on thoughtful guidance, precision, and enduring client relationships.",
      paragraphs: [
        "Revathi has been part of Singularis since 2012 and has shaped the firm's operations and client care.",
        "Her credentials and operational rigor underpin a discreet, high-attention approach to stewardship and family service.",
      ],
    },
    aravind: {
      name: "Aravind Thondan",
      title: "Founder & Managing Director",
      excerpt: "Built around disciplined continuity, stewardship, and long-term clarity.",
      paragraphs: [
        "Aravind founded the firm with a clear purpose: to use wealth in service of long-term family ambitions.",
        "He focuses on research, transparency and client-first stewardship, preferring clarity and restraint over spectacle.",
      ],
    },
  }

  const y1 = useParallax(sectionRef, reduceMotion ? [0, 0] : [24, -24])
  const y2 = useParallax(sectionRef, reduceMotion ? [0, 0] : [-16, 32])

  return (
    <SectionShell id="leadership" className="leadership-shell">
      <div ref={sectionRef} className="leadership-inner">

        <ArchitecturalLines />

        {/* Ghost watermark */}
        <span aria-hidden="true" className="leadership-watermark">04</span>

        {/* ── Header ── */}
        <div className="leadership-header">
          <Reveal delay={0} y={16}>
            <p className="section-label">Leadership</p>
          </Reveal>
          <Reveal delay={0.1} y={28}>
            <h2 className="leadership-headline">
              Stewardship<br />
              <em>through continuity.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.22} y={16}>
            <p className="leadership-subline">
              Endurance follows when the people supporting it are built to last.
            </p>
          </Reveal>
        </div>

        {/* ── Cinematic stage ── */}
        <div className="leadership-stage">

          {/* Portrait 1 — Revathi */}
          <div className="leadership-figure leadership-figure--primary">
            <Reveal delay={0.08} y={40}>
              <CinematicPortrait
                src={revathiAnandPortrait}
                alt="Portrait of Revathi Anand"
                objectPosition="center 14%"
                motionY={y1}
              />
            </Reveal>
            <div className="leadership-label leadership-label--left">
              <p className="leadership-label-name">Revathi Anand</p>
              <p className="leadership-label-title">Director</p>
              <p className="leadership-label-statement">Focused on thoughtful guidance, precision, and enduring client relationships.</p>
              <div className="mt-4">
                <button
                  onClick={() => setActiveFounder(activeFounder === "revathi" ? null : "revathi")}
                  className="leadership-see-more"
                  aria-expanded={activeFounder === "revathi"}
                  aria-controls="revathi-bio"
                >
                  See more about Revathi
                </button>
              </div>
            </div>
            {activeFounder === "revathi" && (
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                className="overflow-hidden md:ml-6 md:flex md:flex-1 mt-6"
                id="revathi-bio"
              >
                <div className="leadership-bio">
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08, duration: 0.5 }}>
                    {founders.revathi.paragraphs[0]}
                  </motion.p>
                  <motion.p className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18, duration: 0.5 }}>
                    {founders.revathi.paragraphs[1]}
                  </motion.p>
                  <div className="mt-6">
                    <button
                      onClick={() => setActiveFounder(null)}
                      className="leadership-see-more"
                    >
                      Hide
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Center divider */}
          <motion.div
            className="leadership-divider"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: editorialEase, delay: 0.2 }}
          >
            <div className="leadership-divider-line" />
            <p className="leadership-divider-text">
              A private<br />office led<br />with intent.
            </p>
            <div className="leadership-divider-line" />
          </motion.div>

          {/* Portrait 2 — Aravind */}
          <div className="leadership-figure leadership-figure--secondary">
            <Reveal delay={0.2} y={40}>
              <CinematicPortrait
                src={aravindThondanPortrait}
                alt="Portrait of Aravind Thondan"
                objectPosition="center 12%"
                motionY={y2}
              />
            </Reveal>
            <div className="leadership-label leadership-label--right">
              <p className="leadership-label-name">Aravind Thondan</p>
              <p className="leadership-label-title">Founder & Managing Director</p>
              <p className="leadership-label-statement">Built around disciplined continuity, stewardship, and long-term clarity.</p>
                <div className="mt-4 text-right">
                <button
                  onClick={() => setActiveFounder(activeFounder === "aravind" ? null : "aravind")}
                  className="leadership-see-more"
                  aria-expanded={activeFounder === "aravind"}
                  aria-controls="aravind-bio"
                >
                  See more about Aravind
                </button>
              </div>
            </div>
            {activeFounder === "aravind" && (
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                className="overflow-hidden md:mr-6 md:flex md:flex-1 mt-6"
                id="aravind-bio"
              >
                <div className="leadership-bio text-right">
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08, duration: 0.5 }}>
                    {founders.aravind.paragraphs[0]}
                  </motion.p>
                  <motion.p className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18, duration: 0.5 }}>
                    {founders.aravind.paragraphs[1]}
                  </motion.p>
                  <div className="mt-6">
                    <button
                      onClick={() => setActiveFounder(null)}
                      className="leadership-see-more"
                    >
                      Hide
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

        </div>

        {/* ── Footer rule ── */}
        <Reveal delay={0.1} y={0}>
          <div className="leadership-footer">
            <div className="leadership-footer-rule" />
            <p className="leadership-footer-note">
              Singularis Family Office — est. in service of continuity
            </p>
            <div className="leadership-footer-rule" />
          </div>
        </Reveal>

      </div>
    </SectionShell>
  )
}