"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Truck, ShieldCheck, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "300+", label: "منتج" },
  { value: "50+", label: "ماركة عالمية" },
  { value: "1000+", label: "عيادة سعيدة" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/70 via-bg to-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-gold-100/60 blur-3xl"
      />

      <div className="container-app grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-[13px] font-bold text-primary-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            موثوق من أكثر من 1000 عيادة أسنان حول العالم
          </div>

          <h1 className="text-balance mt-6 font-display text-4xl font-extrabold leading-[1.2] text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            مستلزمات طب أسنان احترافية
            <br />
            مصممة <span className="text-primary-500">لعيادات</span> اليوم
          </h1>

          <p className="text-balance mt-5 max-w-lg text-[16.5px] leading-8 text-ink-500">
            أجهزة ومستلزمات ومواد استهلاكية عالية الجودة، بتوصيل سريع وموثوقية
            تامة — لخدمة أفضل أطباء الأسنان حول العالم.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="/products">
                تصفّح المنتجات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">اطلب عرض سعر</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-ink-900">
                  {s.value}
                </div>
                <div className="text-[13px] text-ink-500">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image column with floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] border-4 border-white shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=900&auto=format&fit=crop"
              alt="طبيب أسنان يفحص أشعة سينية داخل عيادة حديثة"
              fill
              priority
              sizes="(min-width: 1024px) 440px, 90vw"
              className="object-cover"
            />
          </div>

          <FloatingCard
            className="-top-6 -right-4 sm:right-2"
            delay={0.5}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-[11px] font-extrabold text-primary-700">
                3M
              </span>
              <div>
                <div className="text-[11px] text-ink-300">ماركة رائدة</div>
                <div className="text-[13px] font-bold text-ink-900">3M ESPE</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="top-1/3 -left-6 sm:-left-10" delay={0.7}>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary-500" />
              <div>
                <div className="text-[13px] font-bold text-ink-900">
                  توصيل سريع
                </div>
                <div className="text-[11px] text-success">متاح غدًا</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="bottom-16 -right-2 sm:right-1" delay={0.9}>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <div className="mt-1 text-[13px] font-bold text-ink-900">4.9 / 5.0</div>
            <div className="text-[11px] text-ink-300">+12,400 تقييم</div>
          </FloatingCard>

          <FloatingCard className="-bottom-6 -left-4 sm:left-2" delay={1.1}>
            <div className="flex items-center gap-2">
              <PackageCheck className="h-4 w-4 text-success" />
              <div>
                <div className="text-[13px] font-bold text-ink-900">متوفر بالمخزون</div>
                <div className="text-[11px] text-ink-300">248 قطعة جاهزة</div>
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className={`absolute z-10 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-lift backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}
