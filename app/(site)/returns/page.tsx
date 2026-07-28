import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { RotateCcw, CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "الإرجاع والاستبدال",
  description: "سياسة سميلو للإرجاع والاستبدال خلال 14 يومًا من الاستلام.",
};

const allowed = [
  "المنتج في عبوته الأصلية وغير مستخدم",
  "طلب الإرجاع خلال 14 يومًا من تاريخ الاستلام",
  "وجود فاتورة الشراء أو رقم الطلب",
  "عيب مصنعي أو اختلاف عن الوصف المعلن",
];

const notAllowed = [
  "المواد الاستهلاكية المفتوحة (مثل مواد الطبعات والحشوات)",
  "المنتجات المخصصة حسب الطلب (كأنظمة التقويم الفردية)",
  "الأجهزة التي تجاوزت فترة الإرجاع دون عطل مصنعي",
];

export default function ReturnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="سياسة الإرجاع"
        title="الإرجاع والاستبدال"
        description="نريدك أن تكون مطمئنًا بالكامل عند الطلب من سميلو، لذا نوفر سياسة إرجاع واضحة وبسيطة."
      />

      <section className="container-app py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <RotateCcw className="h-5 w-5" />
            </div>
            <p className="text-[14.5px] leading-7 text-ink-500">
              يمكنك طلب استرجاع أو استبدال أي منتج خلال <strong className="text-ink-900">14 يومًا</strong> من
              تاريخ الاستلام، وسنقوم بمعالجة طلبك خلال 3-5 أيام عمل من استلام
              المنتج المرتجع.
            </p>
          </div>

          <div>
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
              <CheckCircle2 className="h-5 w-5 text-success" />
              شروط قبول الإرجاع
            </h2>
            <ul className="mt-4 space-y-3">
              {allowed.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-ink-500">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
              <XCircle className="h-5 w-5 text-danger" />
              استثناءات لا تشملها سياسة الإرجاع
            </h2>
            <ul className="mt-4 space-y-3">
              {notAllowed.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-ink-500">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-danger/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[13.5px] text-ink-300">
            لطلب إرجاع أو استبدال، تواصل مع فريق الدعم عبر صفحة{" "}
            <a href="/contact" className="text-primary-600 hover:underline">تواصل معنا</a> مع ذكر رقم الطلب.
          </p>
        </div>
      </section>
    </>
  );
}
