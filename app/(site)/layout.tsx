import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/lib/cart-context";
import { AnalyticsInit } from "@/components/analytics-init";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <CartProvider>
      <AnalyticsInit />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-full focus:bg-primary-600 focus:px-5 focus:py-2 focus:text-white"
      >
        تخطي إلى المحتوى الرئيسي
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </CartProvider>
  );
}
