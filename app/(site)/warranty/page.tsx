import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ShieldCheck, Wrench, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "ضمان الجودة",
  description: "تعرّف على سياسة الضمان وأصالة المنتجات لدى سميلو.",
};

const items = [
  {
    icon: ShieldCheck,
    title: "ضمان الأصالة",
    desc: "كل منتج يأتي مباشرة من الوكيل المعتمد للماركة، مع إمكانية طلب شهادة أصالة لأي طلب.",
  },
  {
    icon: Wrench,
    title: "ضمان الأجهزة",
    desc: "تخضع الأجهزة لضمان الشركة المصنّعة (يتراوح عادة بين سنة وسنتين حسب الماركة)، ونساعدك في التواصل مع مركز الصيانة المعتمد عند الحاجة.",
  },
  {
    icon: FileCheck,
    title: "استبدال العيوب المصنعية",
    desc: "أي عيب مصنعي يظهر خلال فترة الضمان يتم استبداله دون تكلفة إضافية، بعد فحص المنتج من فريقنا الفني.",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <PageHeader
        eyebrow="الثقة أولًا"
        title="ضمان الجودة"
        description="نلتزم بتوفير منتجات أصلية بالكامل، وندعمك في حال ظهور أي عطل مصنعي خلال فترة الضمان."
      />

      <section className="container-app py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border bg-surface p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-[15.5px] font-bold text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-7 text-ink-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
