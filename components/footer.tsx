import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "الشركة",
    links: [
      { label: "من نحن", href: "/about" },
      { label: "المدونة", href: "/blog" },
      { label: "وظائف", href: "/careers" },
      { label: "تواصل معنا", href: "/contact" },
    ],
  },
  {
    title: "التسوق",
    links: [
      { label: "كل المنتجات", href: "/products" },
      { label: "الماركات", href: "/brands" },
      { label: "العروض والخصومات", href: "/offers" },
      { label: "طلب عرض سعر بالجملة", href: "/quote" },
    ],
  },
  {
    title: "الدعم",
    links: [
      { label: "الأسئلة الشائعة", href: "/faq" },
      { label: "الشحن والتوصيل", href: "/shipping" },
      { label: "الإرجاع والاستبدال", href: "/returns" },
      { label: "ضمان الجودة", href: "/warranty" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-ink-900 text-white">
      <div className="container-app py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-extrabold">سميلو</span>
            <p className="mt-4 max-w-xs text-[14.5px] leading-7 text-white/60">
              منصة عربية متخصصة في توريد مستلزمات وأجهزة طب الأسنان للعيادات
              والمراكز الطبية، بموثوقية عالمية وسرعة تلبي احتياج عملك.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="تابعنا"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-primary-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14.5px] text-white/60 transition-colors hover:text-primary-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 border-t border-white/10 pt-8 text-[13.5px] text-white/50 sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary-300" />
            <span dir="ltr">+20 100 000 0000</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary-300" />
            <span>support@smilo-dental.example</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary-300" />
            <span>القاهرة، مصر</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-app flex flex-col items-center justify-between gap-2 text-[12.5px] text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} سميلو. جميع الحقوق محفوظة.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/70">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
