import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smilo-dental.example"),
title: {
  default: "Smilo | مستلزمات طب الأسنان الاحترافية للعيادات",
  template: "%s | Smilo",
},
  description:
    "سميلو منصة متخصصة في توريد مستلزمات وأجهزة طب الأسنان للعيادات والمراكز الطبية، بجودة عالمية وشحن سريع وضمان أصالة المنتجات.",
  keywords: [
    "مستلزمات طب الأسنان",
    "أجهزة طب الأسنان",
    "متجر تجهيزات عيادات أسنان",
    "سميلو",
  ],
  openGraph: {
    title: "Smilo | مستلزمات طب الأسنان الاحترافية للعيادات",
    description:
      "تسوّق أفضل ماركات مستلزمات طب الأسنان العالمية بثقة وسرعة توصيل عالية.",
    locale: "ar_EG",
    type: "website",
  },
};

// Root layout stays minimal on purpose: the public storefront (Header,
// Footer, cart state) lives in app/(site)/layout.tsx, and the admin panel
// in app/admin/layout.tsx has its own separate chrome. This keeps the
// admin panel fully isolated from the public site's navigation and cart.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
