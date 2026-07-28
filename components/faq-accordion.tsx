"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-surface">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
              aria-expanded={open}
            >
              <span className="font-display text-[15px] font-bold text-ink-900">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-4.5 w-4.5 shrink-0 text-ink-300 transition-transform duration-300",
                  open && "rotate-180 text-primary-600"
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0 overflow-hidden px-6">
                <p className="text-[14.5px] leading-7 text-ink-500">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
