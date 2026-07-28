import Link from "next/link";
import { Syringe, MonitorSmartphone, Bone, Smile, Sparkle } from "lucide-react";

const cats = [
  { name: "الأدوات اللبية", icon: Syringe, count: 86 },
  { name: "الأجهزة", icon: MonitorSmartphone, count: 54 },
  { name: "الزراعة", icon: Bone, count: 41 },
  { name: "التقويم", icon: Smile, count: 37 },
  { name: "الترميم", icon: Sparkle, count: 63 },
];

export function CategoryGrid() {
  return (
    <section className="container-app py-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <span className="text-[13px] font-bold text-primary-600">تصفح حسب الفئة</span>
          <h2 className="mt-1 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            كل ما تحتاجه عيادتك في مكان واحد
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {cats.map((c) => (
          <Link
            key={c.name}
            href={`/products?category=${encodeURIComponent(c.name)}`}
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-4 py-7 text-center transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-lift"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
              <c.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-[14.5px] font-bold text-ink-900">
                {c.name}
              </div>
              <div className="text-[12px] text-ink-300">{c.count} منتج</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
