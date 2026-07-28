"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Lock } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // No backend wired up — simulate order placement.
    setTimeout(() => {
      setSubmitting(false);
      setPlaced(true);
      clear();
    }, 900);
  }

  if (placed) {
    return (
      <div className="container-app py-24 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-50 text-primary-500">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-extrabold text-ink-900">
          تم استلام طلبك بنجاح
        </h1>
        <p className="mx-auto mt-2 max-w-sm text-[15px] text-ink-500">
          سيتواصل معك فريقنا لتأكيد التفاصيل خلال 24 ساعة. رقم الطلب سيصلك عبر
          البريد الإلكتروني.
        </p>
        <Button className="mt-7" size="lg" asChild>
          <Link href="/products">متابعة التسوق</Link>
        </Button>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="container-app py-24 text-center">
        <h1 className="font-display text-2xl font-extrabold text-ink-900">
          سلتك فارغة
        </h1>
        <p className="mt-2 text-[15px] text-ink-500">
          أضف منتجات إلى السلة قبل إتمام الطلب
        </p>
        <Button className="mt-7" size="lg" asChild>
          <Link href="/products">تصفّح المنتجات</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container-app py-10 sm:py-14">
      <h1 className="font-display text-3xl font-extrabold text-ink-900">إتمام الطلب</h1>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <section className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-display text-[15px] font-bold text-ink-900">
              بيانات التوصيل
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="الاسم الكامل" required>
                <Input required placeholder="مثال: أحمد محمد" />
              </Field>
              <Field label="اسم العيادة" required>
                <Input required placeholder="عيادة الابتسامة الذهبية" />
              </Field>
              <Field label="رقم الهاتف" required>
                <Input required dir="ltr" placeholder="+20 100 000 0000" />
              </Field>
              <Field label="البريد الإلكتروني" required>
                <Input required type="email" dir="ltr" placeholder="name@clinic.com" />
              </Field>
              <Field label="المدينة" required>
                <Input required placeholder="القاهرة" />
              </Field>
              <Field label="الرمز البريدي">
                <Input dir="ltr" placeholder="12345" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="العنوان بالتفصيل" required>
                  <Input required placeholder="اسم الشارع، رقم المبنى، الحي" />
                </Field>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-display text-[15px] font-bold text-ink-900">
              طريقة الدفع
            </h2>
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-3 text-[13.5px] text-primary-700">
              <Lock className="h-4 w-4 shrink-0" />
              الدفع عند الاستلام، أو تحويل بنكي بعد تأكيد الطلب هاتفيًا.
            </div>
          </section>
        </div>

        {/* Summary */}
        <div className="h-fit rounded-xl border border-border bg-surface p-6">
          <h2 className="font-display text-[15px] font-bold text-ink-900">ملخص الطلب</h2>
          <ul className="mt-4 space-y-3 border-b border-border pb-4">
            {lines.map((l) => (
              <li key={l.product.id} className="flex justify-between text-[13.5px]">
                <span className="text-ink-500">
                  {l.product.name} × {l.quantity}
                </span>
                <span className="font-semibold text-ink-900">
                  {(l.product.price * l.quantity).toFixed(2)}$
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 text-[14px]">
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
          </div>
          <div className="mt-4 flex justify-between border-t border-border pt-4">
            <span className="font-display font-bold text-ink-900">الإجمالي</span>
            <span className="font-display text-lg font-extrabold text-ink-900">
              {total.toFixed(2)}$
            </span>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full" disabled={submitting}>
            {submitting ? "جارِ التأكيد..." : "تأكيد الطلب"}
            {!submitting && <ArrowLeft className="h-4 w-4" />}
          </Button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-ink-700">
        {label}
        {required && <span className="text-danger"> *</span>}
      </span>
      {children}
    </label>
  );
}
