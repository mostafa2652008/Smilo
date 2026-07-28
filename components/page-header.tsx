import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("border-b border-border bg-primary-50/40", className)}>
      <div className="container-app py-14 sm:py-16">
        {eyebrow && (
          <span className="text-[13px] font-bold text-primary-600">{eyebrow}</span>
        )}
        <h1 className="text-balance mt-1 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-balance mt-3 max-w-2xl text-[15.5px] leading-8 text-ink-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
