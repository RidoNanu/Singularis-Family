export function scrollToHash(event, href) {
  if (!href?.startsWith("#")) {
    return
  }

  const target = document.querySelector(href)

  if (!target) {
    return
  }

  event.preventDefault()

  if (window.__lenis) {
    window.__lenis.scrollTo(target, { offset: -84 })
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  window.history.replaceState(null, "", href)
}
