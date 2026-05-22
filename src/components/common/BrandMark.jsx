import { cn } from "@/lib/utils"
import logo from "@/assets/images/dbbb60e7-eac2-4cf6-a4c2-aa384461fe7d.png"

export function BrandMark({ className, compact = false }) {
  const logoClassName = compact
    ? "object-contain h-10 w-10 md:h-12 md:w-12"
    : "object-contain h-12 w-12 md:h-14 md:w-14"

  return (
    <div className={cn("flex items-center gap-2.5 md:gap-3", className)}>
      <img
        src={logo}
        alt="Singularis Family logo"
        className={logoClassName}
      />

      <div className="flex min-w-0 flex-col">
        <span className="truncate text-[0.7rem] font-medium uppercase tracking-[0.28em] text-primary md:text-[0.76rem]">
          Singularis
        </span>
        <span className="truncate text-[0.56rem] font-medium uppercase tracking-[0.3em] text-primary/52 md:text-[0.62rem]">
          Family
        </span>
        {!compact && (
          <span className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-primary/46">
            Legacy Governance Office
          </span>
        )}
      </div>
    </div>
  )
}
