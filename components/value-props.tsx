import { Truck, ShieldCheck, Headphones, RotateCcw } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "شحن سريع وموثوق",
    desc: "توصيل خلال 24-48 ساعة لأغلب المدن الرئيسية",
  },
  {
    icon: ShieldCheck,
    title: "ضمان الأصالة",
    desc: "منتجات أصلية 100٪ من الوكلاء المعتمدين مباشرة",
  },
  {
    icon: Headphones,
    title: "دعم فني متخصص",
    desc: "فريق دعم يفهم احتياجات عيادتك على مدار الأسبوع",
  },
  {
    icon: RotateCcw,
    title: "إرجاع مرن",
    desc: "استبدال أو استرجاع خلال 14 يومًا بلا تعقيد",
  },
];

export function ValueProps() {
  return (
    <section className="container-app py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="group rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-[15px] font-bold text-ink-900">
              {item.title}
            </h3>
            <p className="mt-1.5 text-[13.5px] leading-6 text-ink-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
