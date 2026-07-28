"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Star, Truck, ShieldCheck, PackageCheck } from "lucide-react";
import { getProductById, getAllProducts } from "@/lib/products-service";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { ProductActions } from "@/components/product-actions";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const [related, setRelated] = useState<Product[]>([]);

  useEffect(() => {
    let cancelled = false;
    getProductById(params.id).then(async (p) => {
      if (cancelled) return;
      setProduct(p);
      if (p) {
        const all = await getAllProducts();
        setRelated(
          all.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4)
        );
      }
    });
    return () => {
      cancelled = true;
    };
  }, [params.id]);

  if (product === undefined) {
    return (
      <div className="container-app py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-square animate-pulse rounded-2xl bg-primary-50" />
          <div className="space-y-4">
            <div className="h-4 w-24 animate-pulse rounded bg-primary-50" />
            <div className="h-8 w-3/4 animate-pulse rounded bg-primary-50" />
            <div className="h-24 w-full animate-pulse rounded bg-primary-50" />
          </div>
        </div>
      </div>
    );
  }

  if (product === null) {
    return (
      <div className="container-app py-24 text-center">
        <h1 className="font-display text-2xl font-extrabold text-ink-900">
          المنتج غير موجود
        </h1>
        <p className="mt-2 text-[15px] text-ink-500">
          قد يكون هذا المنتج غير متاح أو تم حذفه.
        </p>
        <Link href="/products" className="mt-6 inline-block text-primary-600 hover:underline">
          العودة إلى كل المنتجات
        </Link>
      </div>
    );
  }

  return (
    <div className="container-app py-10 sm:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1.5 text-[13px] text-ink-300">
        <Link href="/" className="hover:text-primary-600">الرئيسية</Link>
        <ChevronLeft className="h-3.5 w-3.5" />
        <Link href="/products" className="hover:text-primary-600">المنتجات</Link>
        <ChevronLeft className="h-3.5 w-3.5" />
        <span className="text-ink-500">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-primary-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 92vw"
            className="object-cover"
          />
          {product.tag && !product.outOfStock && (
            <div className="absolute top-4 right-4">
              <Badge variant={product.tag.variant}>{product.tag.label}</Badge>
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <span className="text-[13px] font-bold text-primary-600">
            {product.brand}
          </span>
          <h1 className="text-balance mt-1 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-[13.5px]">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < Math.round(product.rating)
                      ? "h-4 w-4 fill-gold-400 text-gold-400"
                      : "h-4 w-4 text-border"
                  }
                />
              ))}
            </div>
            <span className="font-semibold text-ink-700">{product.rating}</span>
            <span className="text-ink-300">({product.reviews} تقييم)</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-3xl font-extrabold text-ink-900">
              {product.price.toFixed(2)}$
            </span>
            {product.oldPrice && (
              <span className="text-lg text-ink-300 line-through">
                {product.oldPrice.toFixed(2)}$
              </span>
            )}
          </div>

          <p className="mt-5 max-w-lg text-[15px] leading-8 text-ink-500">
            {product.description}
          </p>

          <ProductActions product={product} />

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <MiniFeature icon={Truck} title="توصيل سريع" desc="خلال 24-48 ساعة" />
            <MiniFeature icon={ShieldCheck} title="ضمان أصالة" desc="منتج معتمد 100٪" />
            <MiniFeature
              icon={PackageCheck}
              title={product.outOfStock ? "غير متوفر" : "متوفر بالمخزون"}
              desc={product.outOfStock ? "أعلمني عند التوفر" : "جاهز للشحن"}
            />
          </div>

          {/* Specs */}
          {product.specs?.length > 0 && (
            <div className="mt-10 rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-[15px] font-bold text-ink-900">
                المواصفات
              </h2>
              <dl className="mt-4 divide-y divide-border">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex justify-between py-2.5 text-[13.5px]">
                    <dt className="text-ink-500">{s.label}</dt>
                    <dd className="font-semibold text-ink-900">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 font-display text-2xl font-extrabold text-ink-900">
            منتجات مشابهة
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function MiniFeature({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-3">
      <Icon className="h-4 w-4 shrink-0 text-primary-500" />
      <div>
        <div className="text-[12.5px] font-bold text-ink-900">{title}</div>
        <div className="text-[11.5px] text-ink-300">{desc}</div>
      </div>
    </div>
  );
}
