import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-full border border-border bg-surface px-5 text-sm text-ink-900 placeholder:text-ink-300",
          "transition-colors focus-visible:border-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
