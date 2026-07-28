"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllProducts } from "@/lib/products-service";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  const [items, setItems] = useState<Product[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    getAllProducts()
      .then((all) => {
        if (!cancelled) setItems(all.slice(0, 8));
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="container-app py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-[13px] font-bold text-primary-600">
            الأكثر طلبًا هذا الأسبوع
          </span>
          <h2 className="mt-1 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            منتجات مختارة لعيادتك
          </h2>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/products">
            عرض كل المنتجات
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {items === null ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-[4/5.2] animate-pulse rounded-xl bg-primary-50" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border py-16 text-center text-ink-300">
          لا توجد منتجات بعد — أضِف منتجات من لوحة التحكم.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
