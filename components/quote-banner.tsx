import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuoteBanner() {
  return (
    <section className="container-app py-16">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-l from-primary-600 to-primary-500 px-8 py-14 text-center sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold-400/20"
        />
        <h2 className="relative text-balance mx-auto max-w-xl font-display text-2xl font-extrabold text-white sm:text-3xl">
          تحتاج توريد بالجملة لعيادتك أو مركزك الطبي؟
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-[15px] text-primary-50">
          احصل على عرض سعر مخصص خلال 24 ساعة مع خصومات خاصة للكميات الكبيرة
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button variant="gold" size="lg" asChild>
            <Link href="/quote">
              اطلب عرض سعر الآن
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            className="border border-white/30 bg-white/10 text-white hover:bg-white/20"
            asChild
          >
            <Link href="/contact">تواصل مع فريق المبيعات</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
