import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors " +
    "focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring " +
    "disabled:opacity-50 disabled:pointer-events-none " +
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-transparent hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground border-transparent hover:bg-destructive/90",
        outline:
          "border-input text-foreground hover:bg-accent hover:text-accent-foreground",
        soft: "bg-muted text-foreground border-transparent hover:bg-muted/80",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      withDot: {
        true: "[&_.dot]:inline-block [&_.dot]:size-1.5 [&_.dot]:rounded-full [&_.dot]:bg-current",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      withDot: false,
    },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  };

export function Badge({
  className,
  variant,
  size,
  withDot,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, withDot }), className)}
      {...props}
    />
  );
}

export default Badge;
