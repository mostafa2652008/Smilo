"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { categories, type Product } from "@/lib/products";
import { getAllProducts } from "@/lib/products-service";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsContent />
    </Suspense>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const brandParam = searchParams.get("brand");

  const [allProducts, setAllProducts] = useState<Product[] | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("الكل");

  useEffect(() => {
    let cancelled = false;
    getAllProducts()
      .then((data) => {
        if (!cancelled) setAllProducts(data);
      })
      .catch(() => {
        if (!cancelled) setAllProducts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (categoryParam && (categories as readonly string[]).includes(categoryParam)) {
      setActiveCategory(categoryParam as (typeof categories)[number]);
    }
  }, [categoryParam]);

  const filtered = useMemo(() => {
    if (!allProducts) return null;
    let list = allProducts;
    if (activeCategory !== "الكل") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (brandParam) {
      list = list.filter((p) => p.brand === brandParam);
    }
    return list;
  }, [allProducts, activeCategory, brandParam]);

  return (
    <div className="container-app py-10 sm:py-14">
      <div className="mb-8">
        <span className="text-[13px] font-bold text-primary-600">المتجر</span>
        <h1 className="mt-1 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
          كل المنتجات
        </h1>
        <p className="mt-2 max-w-xl text-[15px] text-ink-500">
          تصفّح مجموعتنا الكاملة من الأجهزة والمستلزمات المعتمدة من أفضل
          الماركات العالمية.
        </p>
      </div>

      {/* Filter bar */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-colors",
                activeCategory === cat
                  ? "border-primary-500 bg-primary-500 text-white shadow-soft"
                  : "border-border bg-surface text-ink-700 hover:border-primary-300 hover:text-primary-700"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-[13.5px] font-semibold text-ink-700 hover:border-primary-300">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            الفلاتر
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-[13.5px] font-semibold text-ink-700 hover:border-primary-300">
            الأكثر شيوعًا
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {brandParam && (
        <div className="mb-6 flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-[13px] font-semibold text-primary-700">
            الماركة: {brandParam}
            <a href="/products" aria-label="إزالة فلتر الماركة">
              <X className="h-3.5 w-3.5" />
            </a>
          </span>
        </div>
      )}

      {filtered === null ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-[4/5.2] animate-pulse rounded-xl bg-primary-50" />
          ))}
        </div>
      ) : (
        <>
          <p className="mb-5 text-[13.5px] text-ink-300">
            عرض {filtered.length} من {allProducts?.length ?? 0} منتج
          </p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border py-24 text-center text-ink-300">
              لا توجد منتجات مطابقة حاليًا
            </div>
          )}
        </>
      )}
    </div>
  );
}
