"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

const navItems = [
  { label: "المنتجات", href: "/products" },
  { label: "الماركات", href: "/brands" },
  { label: "الفئات", href: "/categories" },
  { label: "العروض", href: "/offers" },
  { label: "المدونة", href: "/blog" },
  { label: "من نحن", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [topbarOpen, setTopbarOpen] = useState(true);
  const { itemCount } = useCart();

  return (
    <div className="sticky top-0 z-50">
      {topbarOpen && (
        <div className="relative bg-ink-900 text-white text-[13px]">
          <div className="container-app flex items-center justify-center gap-2 py-2 text-center">
            <Sparkles className="h-3.5 w-3.5 text-gold-400 shrink-0" />
            <span className="font-medium">
              شحن سريع مجاني للطلبات فوق{" "}
              <strong className="text-primary-200">200 دولار</strong> · استخدم
              كود <strong className="text-gold-400">SMILO25</strong> لخصم 25٪
              على أول طلب
            </span>
            <button
              onClick={() => setTopbarOpen(false)}
              aria-label="إغلاق الشريط"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/60 hover:bg-white/10 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      <header className="border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="container-app flex h-[76px] items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-soft">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M12 3c-2.5 0-4.5 1.6-5.4 3.7C5.9 8.4 5 10.9 5 13c0 3.6 1.4 7 2.6 7 .9 0 1-1.7 1.3-3.3.3-1.6.7-3.2 2.1-3.2s1.8 1.6 2.1 3.2c.3 1.6.4 3.3 1.3 3.3 1.2 0 2.6-3.4 2.6-7 0-2.1-.9-4.6-1.6-6.3C16.5 4.6 14.5 3 12 3Z"
                  fill="currentColor"
                />
              </svg>
            </span>
        <span className="font-display text-xl font-extrabold text-ink-900" dir="ltr">
  Smilo
</span>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-1 rounded-full px-4 py-2 text-[14.5px] font-semibold text-ink-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
              >
                {item.label}
                {(item.label === "المنتجات" || item.label === "الفئات") && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-rotate-180" />
                )}
              </Link>
            ))}
          </nav>

          {/* Search - desktop */}
          <div className="relative hidden md:block w-full max-w-[260px]">
            <Search className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
            <Input placeholder="ابحث عن منتج..." className="pr-11" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <IconAction icon={Heart} label="المفضلة" hideOnMobile />
            <IconAction icon={ShoppingBag} count={itemCount} label="السلة" href="/cart" />
            <IconAction icon={User} label="الحساب" hideOnMobile />
            <Button className="hidden lg:inline-flex" size="md">
              اطلب عرض سعر
            </Button>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-primary-50"
              aria-label="فتح القائمة"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[82%] max-w-sm bg-surface p-6 shadow-lift transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="font-display text-lg font-extrabold">القائمة</span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-primary-50"
              aria-label="إغلاق القائمة"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="relative mb-5">
            <Search className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
            <Input placeholder="ابحث عن منتج..." className="pr-11" />
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] font-semibold text-ink-700 hover:bg-primary-50 hover:text-primary-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button className="w-full mt-6" size="lg">
            اطلب عرض سعر
          </Button>
        </div>
      </div>
    </div>
  );
}

function IconAction({
  icon: Icon,
  count,
  label,
  hideOnMobile,
  href,
}: {
  icon: React.ElementType;
  count?: number;
  label: string;
  hideOnMobile?: boolean;
  href?: string;
}) {
  const classes = cn(
    "relative flex h-10 w-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-primary-50 hover:text-primary-700",
    hideOnMobile && "hidden sm:flex"
  );
  const content = (
    <>
      <Icon className="h-[18px] w-[18px]" />
      {typeof count === "number" && count > 0 && (
        <span className="absolute -top-0.5 -left-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold-500 px-1 text-[10px] font-bold text-white">
          {count}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={label} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button aria-label={label} className={classes}>
      {content}
    </button>
  );
}
