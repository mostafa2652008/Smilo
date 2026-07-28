"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export function ProductActions({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="mt-7 flex flex-wrap items-center gap-3">
      <div className="flex items-center rounded-full border border-border">
        <button
          aria-label="إنقاص الكمية"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="flex h-11 w-11 items-center justify-center text-ink-500 hover:text-primary-600"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center font-display text-[15px] font-bold text-ink-900">
          {qty}
        </span>
        <button
          aria-label="زيادة الكمية"
          onClick={() => setQty((q) => q + 1)}
          className="flex h-11 w-11 items-center justify-center text-ink-500 hover:text-primary-600"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <Button
        size="lg"
        disabled={product.outOfStock}
        onClick={handleAdd}
        className="min-w-[190px]"
      >
        {added ? (
          <>
            أُضيف للسلة
            <Check className="h-4 w-4" />
          </>
        ) : product.outOfStock ? (
          "غير متوفر حاليًا"
        ) : (
          <>
            أضف إلى السلة
            <ShoppingBag className="h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  );
}
