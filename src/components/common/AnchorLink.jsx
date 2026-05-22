import { forwardRef } from "react"

import { scrollToHash } from "@/utils/scrollToHash"

export const AnchorLink = forwardRef(function AnchorLink(
  { href = "#", onClick, ...props },
  ref,
) {
  function handleClick(event) {
    onClick?.(event)

    if (!event.defaultPrevented) {
      scrollToHash(event, href)
    }
  }

  return <a ref={ref} href={href} onClick={handleClick} {...props} />
})
