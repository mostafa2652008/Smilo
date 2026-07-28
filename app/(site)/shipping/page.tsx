import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Truck, Clock, MapPin, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "الشحن والتوصيل",
  description: "تفاصيل مواعيد وتكلفة الشحن لطلبات سميلو داخل مصر.",
};

const zones = [
  { zone: "القاهرة الكبرى والجيزة", time: "24 ساعة" },
  { zone: "الإسكندرية والدلتا", time: "24-48 ساعة" },
  { zone: "الصعيد وباقي المحافظات", time: "48-72 ساعة" },
];

export default function ShippingPage() {
  return (
    <>
      <PageHeader
        eyebrow="معلومات الشحن"
        title="الشحن والتوصيل"
        description="نحرص على وصول طلبك بأسرع وقت ممكن دون المساس بسلامة المنتجات."
      />

      <section className="container-app py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Truck, title: "شحن مجاني", desc: "للطلبات فوق 200 دولار" },
            { icon: Clock, title: "توصيل سريع", desc: "خلال 24-48 ساعة غالبًا" },
            { icon: PackageCheck, title: "تغليف آمن", desc: "حماية كاملة للمواد الحساسة" },
            { icon: MapPin, title: "تغطية واسعة", desc: "لمعظم محافظات مصر" },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-[15px] font-bold text-ink-900">{f.title}</h3>
              <p className="mt-1.5 text-[13.5px] text-ink-500">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-right text-[14px]">
            <thead className="bg-primary-50/60">
              <tr>
                <th className="px-6 py-4 font-display font-bold text-ink-900">المنطقة</th>
                <th className="px-6 py-4 font-display font-bold text-ink-900">مدة التوصيل المتوقعة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {zones.map((z) => (
                <tr key={z.zone}>
                  <td className="px-6 py-4 text-ink-700">{z.zone}</td>
                  <td className="px-6 py-4 font-semibold text-ink-900">{z.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-[13.5px] text-ink-300">
          * قد تختلف مواعيد التوصيل خلال المواسم أو الظروف الجوية الاستثنائية. ستصلك رسالة تتبع فور شحن طلبك.
        </p>
      </section>
    </>
  );
}
