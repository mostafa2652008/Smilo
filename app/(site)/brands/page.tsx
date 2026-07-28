import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "الماركات",
  description: "تصفّح أكثر من 50 ماركة عالمية معتمدة لمستلزمات وأجهزة طب الأسنان.",
};

const brands = [
  { name: "Dentsply Sirona", country: "سويسرا", specialty: "الأدوات اللبية والأجهزة" },
  { name: "3M ESPE", country: "الولايات المتحدة", specialty: "مواد الترميم والبلمرة" },
  { name: "Align Technology", country: "الولايات المتحدة", specialty: "أنظمة التقويم الشفاف" },
  { name: "Straumann", country: "سويسرا", specialty: "زراعة الأسنان" },
  { name: "Tokuyama", country: "اليابان", specialty: "المواد التجميلية" },
  { name: "Cavex", country: "هولندا", specialty: "مواد الطبعات" },
  { name: "Melag", country: "ألمانيا", specialty: "أجهزة التعقيم" },
  { name: "KaVo Kerr", country: "ألمانيا", specialty: "الأجهزة والتوربينات" },
];

export default function BrandsPage() {
  return (
    <>
      <PageHeader
        eyebrow="شركاؤنا"
        title="أكثر من 50 ماركة عالمية موثوقة"
        description="نتعامل مباشرة مع الوكلاء المعتمدين لكل ماركة، لضمان أصالة كل منتج يصل إلى عيادتك."
      />

      <section className="container-app py-14 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b) => (
            <Link
              key={b.name}
              href={`/products?brand=${encodeURIComponent(b.name)}`}
              className="group rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-[12px] font-extrabold text-primary-700">
                {b.name.slice(0, 2)}
              </span>
              <h3 className="mt-4 font-display text-[15px] font-bold text-ink-900">
                {b.name}
              </h3>
              <p className="mt-1 text-[12.5px] text-ink-300">{b.country}</p>
              <p className="mt-2 text-[13px] text-ink-500">{b.specialty}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
