import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const variantClasses = {
      default: "bg-chocolate text-white hover:bg-espresso border border-chocolate",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-white bg-transparent text-white hover:bg-white hover:text-chocolate",
      secondary: "bg-ivory text-chocolate hover:bg-sand",
      ghost: "hover:bg-sand text-chocolate",
      link: "text-chocolate underline-offset-4 hover:underline",
    }

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3 py-1",
      lg: "h-11 px-8 py-3",
      icon: "h-10 w-10",
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center text-sm font-medium transition-all focus:outline-none disabled:opacity-50 uppercase tracking-wide rounded",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button }

