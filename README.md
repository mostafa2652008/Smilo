# سميلو (Smilo) — منصة مستلزمات طب الأسنان

نسخة عربية (RTL) محسّنة من تصميم Figma الأصلي، مبنية بأحدث ممارسات
هندسة الواجهات الأمامية. هذا المستودع يحتوي على **موقع العملاء فقط** —
لوحة التحكم أداة منفصلة تمامًا، راجع القسم الأخير.

## التقنيات المستخدمة

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (بنظام Theme Tokens عبر `@theme`)
- مكوّنات بأسلوب **shadcn/ui** (Button, Badge, Card, Input) مبنية على
  Radix Primitives و `class-variance-authority`
- **Framer Motion** للحركات والتفاعلات الدقيقة
- **Lucide Icons**
- **Firebase Firestore** لقراءة المنتجات (بدون أي كتابة من الموقع نفسه)

## إعداد Firebase (مطلوب قبل التشغيل)

الموقع يقرأ المنتجات من **Firestore** فقط — لا يوجد أي تسجيل دخول أو
كتابة بيانات من هنا؛ كل التعديل يتم من لوحة التحكم المنفصلة.

1. أنشئ مشروعًا على [console.firebase.google.com](https://console.firebase.google.com)
   (أو استخدم مشروعًا موجودًا).
2. من **Build → Firestore Database**، أنشئ قاعدة بيانات.
3. من تبويب **Rules**، الصق محتوى ملف `firestore.rules` الموجود في جذر
   هذا المشروع، ثم انشر (Publish).
4. من **Project settings → General → Your apps**، أضف تطبيق Web واحصل
   على بيانات الإعداد (`firebaseConfig`).
5. انسخ `.env.local.example` إلى `.env.local` واملأ القيم بما حصلت عليه.

```bash
cp .env.local.example .env.local
```

القاعدة تبدأ فارغة — لملئها ببيانات تجريبية أو إضافة منتجاتك الحقيقية،
استخدم لوحة التحكم المنفصلة (راجع آخر قسم في هذا الملف).

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح http://localhost:3000

## البناء للإنتاج

```bash
npm run build
npm start
```

> ملاحظة: يتطلب أول تشغيل لـ `npm run build` اتصالًا بالإنترنت لتحميل
> خطوط Google Fonts (Cairo و Tajawal) عبر `next/font/google`، ثم يتم
> تخزينها محليًا وتُضمَّن ضمن الحزمة النهائية (لا حاجة للإنترنت وقت
> التشغيل الفعلي للموقع).

## بنية المشروع

```
app/
  layout.tsx           تخطيط الجذر: html/body + الخطوط + SEO فقط
  (site)/               مجموعة مسارات الموقع (لا تؤثر على الروابط الفعلية)
    layout.tsx            Header + Footer + CartProvider + رابط تخطي للمحتوى
    page.tsx                الرئيسية
    products/page.tsx        كل المنتجات (تُقرأ من Firestore، فلاتر فئة/ماركة عبر URL)
    products/[id]/             تفاصيل منتج (من Firestore) + منتجات مشابهة
    cart/ checkout/              السلة (localStorage) وإتمام الطلب (واجهة فقط)
    brands/ categories/ offers/    صفحات تصفح
    blog/ blog/[slug]/               المدونة ومقال فردي
    about/ contact/ quote/            من نحن، تواصل معنا، طلب عرض سعر
    faq/ shipping/ returns/ warranty/  صفحات معلومات وسياسات
    privacy/ terms/ careers/
  globals.css           Design Tokens (ألوان، خطوط، ظلال، حركات)
components/
  header.tsx / footer.tsx     الهيدر (+ قائمة جوال) والفوتر
  hero.tsx / brand-marquee.tsx / value-props.tsx / category-grid.tsx / featured-products.tsx / quote-banner.tsx   أقسام الرئيسية
  product-card.tsx / product-actions.tsx   بطاقة المنتج وإجراءات صفحة التفاصيل
  contact-form.tsx / quote-form.tsx         نماذج تفاعلية
  faq-accordion.tsx                          أكورديون الأسئلة الشائعة
  page-header.tsx                             رأس موحّد للصفحات الثابتة
  analytics-init.tsx                           تفعيل Firebase Analytics في المتصفح
  ui/                                          Button, Badge, Card, Input
lib/
  firebase.ts             تهيئة Firebase (Firestore + Analytics فقط — بدون Auth)
  products-service.ts       قراءة المنتجات من Firestore (وبذر بيانات تجريبية اختياري)
  cart-context.tsx            حالة السلة العامة للموقع (React Context + localStorage)
  utils.ts / products.ts (النوع + بيانات البذر) / posts.ts (بيانات المدونة الثابتة)
firestore.rules         قواعد أمان Firestore الجاهزة للنشر
.env.local.example       متغيرات بيئة Firebase المطلوبة
```

### السلة والدفع
السلة تُدار بالكامل من جهة العميل عبر `CartProvider` وتُخزَّن في `localStorage`
لتبقى محفوظة بين الزيارات. صفحة الدفع نموذج واجهة كامل (بيانات شحن + ملخص +
تأكيد) لكنها **غير متصلة ببوابة دفع أو قاعدة بيانات طلبات فعلية** — عند ربط
الموقع بخدمة حقيقية ستحتاج توصيل `handleSubmit` في `app/(site)/checkout/page.tsx`
بواجهة API خلفية أو مجموعة `orders` في Firestore.

## قرارات التصميم الرئيسية (مقارنة بتصميم Figma الأصلي)

- **الاتجاه والخطوط**: تحويل كامل إلى RTL مع خطي **Cairo** (العناوين)
  و **Tajawal** (النصوص) بدلاً من الخط اللاتيني الافتراضي، مع تكبير
  ارتفاع الأسطر (leading) وتباعد الحروف ليناسب القراءة العربية.
- **الهوية اللونية**: تم الحفاظ على العائلة اللونية الأساسية (تركواز/أخضر
  طبي) مع إضافة لون ذهبي هادئ كإشارة ثقة وفخامة (تقييمات، شارات "الأكثر
  مبيعًا")، بدلاً من التدرج الأزرق-الأخضر العام في التصميم الأصلي.
- **البطاقات العائمة في الـ Hero**: أعيد تصميمها كعناصر زجاجية
  (glassmorphism) بحركة دخول متتالية (staggered) بدل ظهورها الثابت.
- **الأزرار والبطاقات**: حواف دائرية أكبر، ظلال ناعمة متدرجة (soft →
  lift عند التمرير)، وتفاعلات دقيقة (scale عند الضغط، رفع البطاقة عند
  hover).
- **تجربة الجوال**: قائمة جانبية (Drawer) بدل تكديس عناصر التنقل، وشريط
  علوي قابل للإغلاق بدلاً من شريط ثابت يزاحم المحتوى.
- **الوصولية (Accessibility)**: روابط تخطي للمحتوى، تباين ألوان متوافق
  مع WCAG AA، حالات focus-visible واضحة، ودعم `prefers-reduced-motion`.

## لوحة التحكم — أداة منفصلة تمامًا

**لوحة التحكم مش جزء من هذا المشروع، ومفيش أي أثر ليها في الموقع
المنشور.** هي مجلد منفصل تمامًا اسمه `smilo-admin/` (بتوصيل منفصل)،
مبني بـ **HTML/CSS/JS عادي بدون أي أداة بناء** — تفتحه محليًا على جهازك
بدبل كليك، من غير ما ترفعه على الإنترنت أبدًا. مفيش أي رابط أو مسار زي
`/admin` جوه هذا المشروع يودّي لها.

الأداة دي بتتواصل مباشرة مع نفس مشروع Firebase (Firestore + Authentication)
اللي هذا الموقع بيقرأ منه فقط، فأي تعديل تعمله فيها (سعر، خصم، منتج
جديد...) بيظهر فورًا في الموقع بعد تحديث الصفحة. راجع `smilo-admin/README.md`
لخطوات التشغيل الكاملة.
