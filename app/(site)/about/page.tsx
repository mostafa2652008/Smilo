import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Target, Users, Globe2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرّف على قصة سميلو ورسالتنا في دعم عيادات طب الأسنان بمنتجات موثوقة.",
};

const values = [
  { icon: Target, title: "رسالتنا", desc: "تبسيط الوصول لأفضل مستلزمات طب الأسنان العالمية لكل عيادة، بغض النظر عن حجمها أو موقعها." },
  { icon: Users, title: "عملاؤنا أولًا", desc: "نبني علاقات طويلة الأمد مع أطباء الأسنان عبر دعم فني حقيقي، لا مجرد بيع منتجات." },
  { icon: Globe2, title: "شراكات عالمية", desc: "نتعامل مباشرة مع أكثر من 50 ماركة عالمية معتمدة لضمان أصالة كل منتج." },
  { icon: Award, title: "جودة لا تتنازل", desc: "كل منتج يمر بفحص جودة قبل الشحن، مع ضمان استبدال فوري لأي عيب مصنعي." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title="نبني الثقة بين عيادات الأسنان ومورّديها"
        description="منذ انطلاقنا، ونحن نعمل على جعل عملية توريد مستلزمات طب الأسنان أسرع وأكثر شفافية وموثوقية لآلاف العيادات حول العالم."
      />

      <section className="container-app py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
              alt="فريق عمل سميلو في مركز التوزيع"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              قصتنا بدأت من احتياج حقيقي
            </h2>
            <p className="mt-4 text-[15.5px] leading-8 text-ink-500">
              لاحظنا أن عيادات كثيرة تفقد وقتًا وجهدًا في البحث عن موردين
              موثوقين لمستلزمات وأجهزة طب الأسنان، وسط انتشار المنتجات غير
              الأصلية في السوق. فقررنا بناء منصة تجمع أفضل الماركات العالمية
              في مكان واحد، مع شفافية كاملة في الأسعار والتوفر وسرعة الشحن.
            </p>
            <p className="mt-4 text-[15.5px] leading-8 text-ink-500">
              اليوم، نفخر بخدمة أكثر من 1000 عيادة، ونواصل التوسع في شبكة
              شركائنا لنبقى الخيار الأول لكل طبيب أسنان يبحث عن الجودة
              والسرعة.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-[15px] font-bold text-ink-900">
                {v.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-6 text-ink-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
