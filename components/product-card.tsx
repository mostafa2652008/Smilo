"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Star, ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-surface shadow-soft transition-shadow hover:shadow-lift"
    >
      <Link
        href={`/products/${product.id}`}
        className="relative block aspect-[4/3.4] overflow-hidden bg-primary-50"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            product.outOfStock && "opacity-40 grayscale"
          )}
        />

        {product.tag && !product.outOfStock && (
          <div className="absolute top-3 right-3">
            <Badge variant={product.tag.variant}>{product.tag.label}</Badge>
          </div>
        )}
        {product.outOfStock && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-ink-900/85 px-4 py-1.5 text-[13px] font-bold text-white">
              غير متوفر حاليًا
            </span>
          </div>
        )}

      </Link>

      <button
        aria-label="إضافة إلى المفضلة"
        className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-500 shadow-soft backdrop-blur transition-colors hover:text-danger active:scale-90"
      >
        <Heart className="h-4 w-4" />
      </button>

      <div className="p-4">
        <span className="text-[12px] font-semibold text-primary-600">
          {product.brand}
        </span>
        <Link href={`/products/${product.id}`}>
          <h3 className="mt-1 line-clamp-1 font-display text-[15px] font-bold text-ink-900 hover:text-primary-600">
            {product.name}
          </h3>
        </Link>

        <div className="mt-1.5 flex items-center gap-1 text-[12.5px]">
          <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
          <span className="font-semibold text-ink-700">{product.rating}</span>
          <span className="text-ink-300">({product.reviews})</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-extrabold text-ink-900">
              {product.price.toFixed(2)}$
            </span>
            {product.oldPrice && (
              <span className="text-[13px] text-ink-300 line-through">
                {product.oldPrice.toFixed(2)}$
              </span>
            )}
          </div>
          <button
            aria-label="إضافة للسلة"
            disabled={product.outOfStock}
            onClick={handleAdd}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full transition-colors active:scale-90 disabled:opacity-40",
              added
                ? "bg-success text-white"
                : "bg-primary-50 text-primary-600 hover:bg-primary-500 hover:text-white"
            )}
          >
            {added ? (
              <Check className="h-4 w-4" />
            ) : (
              <ShoppingBag className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
