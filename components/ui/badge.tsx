import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full text-[12px] font-bold px-3 py-1 leading-none",
  {
    variants: {
      variant: {
        primary: "bg-primary-50 text-primary-700 ring-1 ring-primary-200",
        gold: "bg-gold-100 text-gold-500 ring-1 ring-gold-400/40",
        danger: "bg-danger/10 text-danger",
        dark: "bg-ink-900 text-white",
        outline: "bg-white/90 text-ink-700 ring-1 ring-border backdrop-blur",
      },
    },
    defaultVariants: { variant: "primary" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
