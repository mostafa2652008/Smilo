import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع فريق سميلو لأي استفسار عن المنتجات أو الطلبات أو الشراكات.",
};

const info = [
  { icon: Phone, title: "الهاتف", value: "+20 100 000 0000", dir: "ltr" as const },
  { icon: Mail, title: "البريد الإلكتروني", value: "support@smilo-dental.example", dir: "ltr" as const },
  { icon: MapPin, title: "العنوان", value: "القاهرة، مصر" },
  { icon: Clock, title: "ساعات العمل", value: "السبت - الخميس، 9 ص - 6 م" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="تواصل معنا"
        title="نحن هنا لمساعدتك"
        description="سواء كان لديك سؤال عن منتج، طلب، أو فرصة شراكة، فريقنا جاهز للرد خلال يوم عمل واحد."
      />

      <section className="container-app py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {info.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <item.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-[13px] text-ink-300">{item.title}</div>
                  <div className="font-semibold text-ink-900" dir={item.dir}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
