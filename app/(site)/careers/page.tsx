import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "وظائف",
  description: "انضم إلى فريق سميلو وكن جزءًا من رحلة تطوير قطاع طب الأسنان.",
};

const openings = [
  { title: "أخصائي مبيعات B2B", location: "القاهرة", type: "دوام كامل" },
  { title: "مسؤول خدمة عملاء", location: "القاهرة", type: "دوام كامل" },
  { title: "مسؤول مخزون ولوجستيات", location: "الجيزة", type: "دوام كامل" },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="انضم إلينا"
        title="ابنِ مستقبلك المهني معنا"
        description="نبحث دائمًا عن مواهب شغوفة بتحسين تجربة عيادات طب الأسنان في المنطقة."
      />

      <section className="container-app py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-4">
          {openings.map((job) => (
            <div
              key={job.title}
              className="flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center"
            >
              <div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary-500" />
                  <h3 className="font-display text-[15.5px] font-bold text-ink-900">
                    {job.title}
                  </h3>
                </div>
                <div className="mt-2 flex items-center gap-4 text-[13px] text-ink-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {job.type}
                  </span>
                </div>
              </div>
              <Button variant="secondary" asChild>
                <Link href="/contact">تقدّم الآن</Link>
              </Button>
            </div>
          ))}

          <p className="pt-4 text-center text-[13.5px] text-ink-300">
            لا تجد وظيفة مناسبة؟ راسلنا عبر{" "}
            <Link href="/contact" className="text-primary-600 hover:underline">
              صفحة التواصل
            </Link>{" "}
            وأخبرنا بمجال خبرتك.
          </p>
        </div>
      </section>
    </>
  );
}
