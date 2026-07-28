import type { Metadata } from "next";
import Link from "next/link";
import { Syringe, MonitorSmartphone, Bone, Smile, Sparkle, ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "الفئات",
  description: "تصفّح مستلزمات طب الأسنان حسب الفئة: أدوات لبية، أجهزة، زراعة، تقويم، وترميم.",
};

const cats = [
  { name: "الأدوات اللبية", icon: Syringe, desc: "مبارد دوارة، مواد قنوات، أدوات تحضير وحشو الجذور." },
  { name: "الأجهزة", icon: MonitorSmartphone, desc: "أجهزة تعقيم، بلمرة، تصوير، وتوربينات عالية السرعة." },
  { name: "الزراعة", icon: Bone, desc: "غرسات أسنان وأدوات جراحية معتمدة من أفضل الماركات." },
  { name: "التقويم", icon: Smile, desc: "أنظمة تقويم شفافة وتقليدية بمواصفات دقيقة." },
  { name: "الترميم", icon: Sparkle, desc: "حشوات تجميلية ومواد ترميم بمطابقة لونية عالية." },
];

export default function CategoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="تصفح المتجر"
        title="كل الفئات"
        description="اختر الفئة المناسبة لاحتياج عيادتك وتصفّح المنتجات المرتبطة بها مباشرة."
      />

      <section className="container-app py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {cats.map((c) => (
            <Link
              key={c.name}
              href={`/products?category=${encodeURIComponent(c.name)}`}
              className="group flex items-start gap-4 rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-lift"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-[16px] font-bold text-ink-900">
                  {c.name}
                </h3>
                <p className="mt-1 text-[13.5px] leading-6 text-ink-500">{c.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-primary-600">
                  تصفّح المنتجات
                  <ArrowLeft className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
