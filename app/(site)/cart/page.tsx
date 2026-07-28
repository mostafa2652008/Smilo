"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { lines, setQuantity, removeItem, subtotal } = useCart();

  if (lines.length === 0) {
    return (
      <div className="container-app py-24 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-50 text-primary-500">
          <ShoppingBag className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-extrabold text-ink-900">
          سلتك فارغة حاليًا
        </h1>
        <p className="mt-2 text-[15px] text-ink-500">
          تصفّح المنتجات وأضف ما تحتاجه لعيادتك
        </p>
        <Button className="mt-7" size="lg" asChild>
          <Link href="/products">
            تصفّح المنتجات
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    );
  }

  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="container-app py-10 sm:py-14">
      <h1 className="font-display text-3xl font-extrabold text-ink-900">سلة المشتريات</h1>
      <p className="mt-1.5 text-[15px] text-ink-500">
        {lines.length} {lines.length === 1 ? "منتج" : "منتجات"} في السلة
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-4">
          {lines.map((line) => (
            <div
              key={line.product.id}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4"
            >
              <Link
                href={`/products/${line.product.id}`}
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-primary-50"
              >
                <Image
                  src={line.product.image}
                  alt={line.product.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </Link>

              <div className="min-w-0 flex-1">
                <span className="text-[11.5px] font-semibold text-primary-600">
                  {line.product.brand}
                </span>
                <Link href={`/products/${line.product.id}`}>
                  <h3 className="truncate font-display text-[14.5px] font-bold text-ink-900 hover:text-primary-600">
                    {line.product.name}
                  </h3>
                </Link>
                <span className="text-[13.5px] font-semibold text-ink-700">
                  {line.product.price.toFixed(2)}$
                </span>
              </div>

              <div className="flex items-center rounded-full border border-border shrink-0">
                <button
                  aria-label="إنقاص الكمية"
                  onClick={() => setQuantity(line.product.id, line.quantity - 1)}
                  className="flex h-9 w-9 items-center justify-center text-ink-500 hover:text-primary-600"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-6 text-center text-[13.5px] font-bold text-ink-900">
                  {line.quantity}
                </span>
                <button
                  aria-label="زيادة الكمية"
                  onClick={() => setQuantity(line.product.id, line.quantity + 1)}
                  className="flex h-9 w-9 items-center justify-center text-ink-500 hover:text-primary-600"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="w-16 shrink-0 text-left font-display text-[14.5px] font-extrabold text-ink-900">
                {(line.product.price * line.quantity).toFixed(2)}$
              </div>

              <button
                aria-label="إزالة من السلة"
                onClick={() => removeItem(line.product.id)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-300 hover:bg-danger/10 hover:text-danger"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="h-fit rounded-xl border border-border bg-surface p-6">
          <h2 className="font-display text-[15px] font-bold text-ink-900">ملخص الطلب</h2>
          <div className="mt-4 space-y-3 text-[14px]">
            <div className="flex justify-between text-ink-500">
              <span>المجموع الفرعي</span>
              <span className="font-semibold text-ink-900">{subtotal.toFixed(2)}$</span>
            </div>
            <div className="flex justify-between text-ink-500">
              <span>الشحن</span>
              <span className="font-semibold text-ink-900">
                {shipping === 0 ? "مجاني" : `${shipping.toFixed(2)}$`}
              </span>
            </div>
            {shipping > 0 && (
              <p className="text-[12px] text-primary-600">
                أضف {(200 - subtotal).toFixed(2)}$ أخرى للحصول على شحن مجاني
              </p>
            )}
          </div>
          <div className="mt-4 flex justify-between border-t border-border pt-4">
            <span className="font-display font-bold text-ink-900">الإجمالي</span>
            <span className="font-display text-lg font-extrabold text-ink-900">
              {total.toFixed(2)}$
            </span>
          </div>
          <Button size="lg" className="mt-6 w-full" asChild>
            <Link href="/checkout">
              إتمام الطلب
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Link
            href="/products"
            className="mt-3 block text-center text-[13.5px] font-semibold text-ink-500 hover:text-primary-600"
          >
            متابعة التسوق
          </Link>
        </div>
      </div>
    </div>
  );
}
