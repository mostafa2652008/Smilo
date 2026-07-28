import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { QuoteForm } from "@/components/quote-form";
import { Clock, Percent, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "اطلب عرض سعر",
  description: "احصل على عرض سعر مخصص لمشترياتك بالجملة من مستلزمات طب الأسنان.",
};

const perks = [
  { icon: Clock, title: "رد خلال 24 ساعة", desc: "فريق المبيعات يراجع طلبك ويرد بعرض مفصّل" },
  { icon: Percent, title: "خصومات الكميات", desc: "أسعار تنافسية كلما زادت الكمية المطلوبة" },
  { icon: ShieldCheck, title: "منتجات أصلية", desc: "ضمان أصالة كامل على كل عنصر في العرض" },
];

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="طلب بالجملة"
        title="اطلب عرض سعر مخصص لعيادتك"
        description="سواء كنت تدير عيادة واحدة أو سلسلة مراكز طبية، أخبرنا باحتياجك وسنرسل لك عرض سعر تفصيليًا خلال 24 ساعة."
      />

      <section className="container-app py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {perks.map((p) => (
              <div key={p.title} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <p.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="font-semibold text-ink-900">{p.title}</div>
                  <div className="text-[13.5px] text-ink-500">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
