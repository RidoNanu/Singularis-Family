import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[0.4rem] border text-[0.78rem] font-medium tracking-[0.1em] normal-case transition-[background-color,border-color,color,opacity,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground shadow-[0_6px_16px_rgba(30,55,84,0.08)] hover:border-[#17314d] hover:bg-[#17314d] hover:shadow-[0_8px_20px_rgba(30,55,84,0.1)]",
        secondary:
          "border-primary/24 bg-transparent text-primary hover:bg-primary/[0.05] hover:border-primary/34",
        ghost:
          "border-transparent bg-transparent text-primary/72 hover:bg-primary/[0.04] hover:text-primary",
        text:
          "border-transparent bg-transparent px-0 text-primary/80 hover:text-primary hover:opacity-90",
        minimalLink:
          "border-transparent bg-transparent px-0 text-primary/72 hover:text-primary hover:translate-x-[1px]",
        outline:
          "border-primary/22 bg-transparent text-primary hover:bg-primary/[0.04] hover:border-primary/34",
        destructive:
          "border-destructive/20 bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-[0.74rem]",
        lg: "h-12 px-6 text-[0.8rem]",
        icon: "size-10 rounded-[0.4rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

function PrimaryButton(props) {
  return <Button variant="default" {...props} />
}

function SecondaryButton(props) {
  return <Button variant="secondary" {...props} />
}

function TextButton(props) {
  return <Button variant="text" size="sm" {...props} />
}

function MinimalLinkButton(props) {
  return <Button variant="minimalLink" size="sm" {...props} />
}

export { Button, PrimaryButton, SecondaryButton, TextButton, MinimalLinkButton }
