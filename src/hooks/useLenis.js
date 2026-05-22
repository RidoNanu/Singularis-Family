import { useEffect } from "react"
import Lenis from "lenis"

export function useLenis() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (reducedMotion) {
      return undefined
    }

    const lenis = new Lenis({
      duration: 1.3,
      lerp: 0.075,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 0.9,
      wheelMultiplier: 0.88,
    })

    window.__lenis = lenis

    let frame = 0

    function raf(time) {
      lenis.raf(time)
      frame = window.requestAnimationFrame(raf)
    }

    frame = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(frame)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])
}
