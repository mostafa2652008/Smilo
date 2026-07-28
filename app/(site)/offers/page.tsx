"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { ProductCard } from "@/components/product-card";
import { getAllProducts } from "@/lib/products-service";
import type { Product } from "@/lib/products";

export default function OffersPage() {
  const [items, setItems] = useState<Product[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    getAllProducts()
      .then((all) => {
        if (!cancelled) setItems(all.filter((p) => p.oldPrice));
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="عروض محدودة"
        title="خصومات على منتجات مختارة"
        description="استخدم كود SMILO25 للحصول على خصم إضافي 25٪ على أول طلب، بجانب العروض الحالية على المنتجات التالية."
      />

      <section className="container-app py-14 sm:py-16">
        {items === null ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[4/5.2] animate-pulse rounded-xl bg-primary-50" />
            ))}
          </div>
        ) : items.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <p className="text-center text-ink-300">لا توجد عروض متاحة حاليًا.</p>
        )}
      </section>
    </>
  );
}
