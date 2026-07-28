"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary-500" />
        <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
          تم إرسال رسالتك
        </h3>
        <p className="mt-1.5 text-[14px] text-ink-500">
          سيتواصل معك فريقنا خلال يوم عمل واحد.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-ink-700">
            الاسم <span className="text-danger">*</span>
          </span>
          <Input required placeholder="اسمك الكامل" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-ink-700">
            البريد الإلكتروني <span className="text-danger">*</span>
          </span>
          <Input required type="email" dir="ltr" placeholder="name@clinic.com" />
        </label>
        <div className="sm:col-span-2">
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-semibold text-ink-700">
              الموضوع
            </span>
            <Input placeholder="استفسار عن منتج، طلب، شراكة..." />
          </label>
        </div>
        <div className="sm:col-span-2">
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-semibold text-ink-700">
              الرسالة <span className="text-danger">*</span>
            </span>
            <textarea
              required
              rows={5}
              placeholder="اكتب رسالتك هنا..."
              className="w-full rounded-2xl border border-border bg-surface px-5 py-3 text-sm text-ink-900 placeholder:text-ink-300 transition-colors focus-visible:border-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100"
            />
          </label>
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-5">
        إرسال الرسالة
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
