import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "كيف تجمع سميلو بياناتك وتستخدمها وتحميها.",
};

const sections = [
  {
    title: "البيانات التي نجمعها",
    body: "نجمع البيانات التي تقدمها مباشرة عند إنشاء حساب أو تقديم طلب أو التواصل معنا، مثل الاسم واسم العيادة والبريد الإلكتروني ورقم الهاتف والعنوان. كما نجمع بيانات تصفح تقنية بشكل تلقائي (مثل نوع الجهاز والمتصفح) لتحسين تجربة الاستخدام.",
  },
  {
    title: "كيف نستخدم بياناتك",
    body: "نستخدم بياناتك لتنفيذ طلباتك والتواصل معك بشأنها، وتحسين خدماتنا، وإرسال عروض أو تحديثات إذا وافقت على ذلك. لا نبيع بياناتك لأي طرف ثالث لأغراض تسويقية.",
  },
  {
    title: "مشاركة البيانات",
    body: "قد نشارك بعض بياناتك مع شركاء الشحن ومزودي خدمات الدفع فقط بالقدر اللازم لإتمام طلبك، وبموجب اتفاقيات تحفظ سرية بياناتك.",
  },
  {
    title: "أمان البيانات",
    body: "نطبق إجراءات تقنية وتنظيمية لحماية بياناتك من الوصول غير المصرح به أو الفقدان أو سوء الاستخدام.",
  },
  {
    title: "حقوقك",
    body: "يمكنك في أي وقت طلب الاطلاع على بياناتك أو تعديلها أو حذفها عبر التواصل مع فريق الدعم.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="سياساتنا" title="سياسة الخصوصية" />
      <section className="container-app py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-[13.5px] text-ink-300">آخر تحديث: يوليو 2026</p>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-bold text-ink-900">{s.title}</h2>
              <p className="mt-2 text-[14.5px] leading-7 text-ink-500">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
