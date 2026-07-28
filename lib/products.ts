export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "الأدوات اللبية" | "الأجهزة" | "الزراعة" | "التقويم" | "الترميم";
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  tag?: { label: string; variant: "primary" | "gold" | "danger" | "dark" };
  outOfStock?: boolean;
  description: string;
  specs: { label: string; value: string }[];
};

export const seedProducts: Product[] = [
  {
    id: "protaper-gold",
    name: "مبارد بروتيبر جولد الدوارة",
    brand: "Dentsply Sirona",
    category: "الأدوات اللبية",
    price: 89.99,
    oldPrice: 119.99,
    rating: 4.6,
    reviews: 347,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    tag: { label: "خصم 25٪", variant: "danger" },
    description:
      "مبارد دوارة بتقنية المعالجة الحرارية المتقدمة توفر مرونة استثنائية ومقاومة للكسر أثناء تحضير القنوات الجذرية، مصممة لتقليل وقت العلاج مع الحفاظ على الشكل التشريحي الأصلي للقناة.",
    specs: [
      { label: "العلامة التجارية", value: "Dentsply Sirona" },
      { label: "المادة", value: "سبيكة نيكل تيتانيوم M-Wire" },
      { label: "العبوة", value: "6 مبارد" },
      { label: "الاستخدام", value: "علاج قنوات الجذر" },
      { label: "بلد المنشأ", value: "سويسرا" },
    ],
  },
  {
    id: "elipar-deepcure",
    name: "جهاز إليبار ديب كيور LED",
    brand: "3M ESPE",
    category: "الأجهزة",
    price: 649,
    rating: 4.5,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    tag: { label: "جديد", variant: "primary" },
    description:
      "جهاز بلمرة LED بشدة ضوئية عالية وموحّدة تضمن تصلبًا كاملاً وسريعًا للحشوات التجميلية، مع بطارية تدوم طوال يوم العمل وتصميم خفيف يقلل إجهاد اليد.",
    specs: [
      { label: "العلامة التجارية", value: "3M ESPE" },
      { label: "شدة الضوء", value: "1470 mW/cm²" },
      { label: "وقت الشحن", value: "الشحن السريع خلال ساعتين" },
      { label: "الضمان", value: "سنتان" },
    ],
  },
  {
    id: "invisalign-clear",
    name: "تقويم إنفيزلاين الشفاف",
    brand: "Align Technology",
    category: "التقويم",
    price: 1299,
    rating: 4.8,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    tag: { label: "الأفضل مبيعًا", variant: "gold" },
    description:
      "نظام تقويم شفاف بالكامل مصمم رقميًا لكل حالة على حدة، يوفر تصحيحًا دقيقًا لإطباق الأسنان دون الحاجة لأسلاك أو حاصرات معدنية، مع خطة علاج تفاعلية.",
    specs: [
      { label: "العلامة التجارية", value: "Align Technology" },
      { label: "المدة المتوسطة للعلاج", value: "6-18 شهرًا" },
      { label: "التصميم", value: "مخصص رقميًا لكل حالة" },
      { label: "الصيانة", value: "قابل للإزالة والتنظيف" },
    ],
  },
  {
    id: "straumann-blx",
    name: "غرسة سترومان BLX",
    brand: "Straumann",
    category: "الزراعة",
    price: 449,
    oldPrice: 520,
    rating: 4.9,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
    tag: { label: "الأكثر طلبًا", variant: "dark" },
    description:
      "غرسة أسنان بتصميم ذاتي الحفر يتيح ثباتًا أوليًا ممتازًا حتى في العظم منخفض الكثافة، بسطح SLActive المعزز لتسريع الالتئام العظمي.",
    specs: [
      { label: "العلامة التجارية", value: "Straumann" },
      { label: "المادة", value: "تيتانيوم-زركونيوم Roxolid" },
      { label: "السطح", value: "SLActive" },
      { label: "الضمان", value: "مدى الحياة" },
    ],
  },
  {
    id: "tokuyama-estelite",
    name: "حشوات توكوياما إستلايت",
    brand: "Tokuyama",
    category: "الترميم",
    price: 79.5,
    rating: 4.4,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    description:
      "حشوة تجميلية بجسيمات فائقة النعومة تمنح لمعانًا طبيعيًا يدوم ومطابقة لونية دقيقة مع مينا الأسنان الطبيعية، وسهلة النحت والتلميع.",
    specs: [
      { label: "العلامة التجارية", value: "Tokuyama" },
      { label: "النوع", value: "راتنج مركب نانوي" },
      { label: "عدد الألوان المتاحة", value: "20 لونًا" },
      { label: "العبوة", value: "حقنة 4 جرام" },
    ],
  },
  {
    id: "cavex-alginate",
    name: "مادة طبعات كافيكس ألجينات",
    brand: "Cavex",
    category: "الأدوات اللبية",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.5,
    reviews: 412,
    image:
      "https://images.unsplash.com/photo-1616012479488-d334f3221c17?q=80&w=800&auto=format&fit=crop",
    tag: { label: "خصم 22٪", variant: "danger" },
    outOfStock: true,
    description:
      "مادة طبعات ألجينات سريعة التماسك بدقة تفاصيل عالية واستقرار أبعاد ممتاز، ونكهة منعشة تقلل شعور المريض بعدم الارتياح أثناء أخذ الطبعة.",
    specs: [
      { label: "العلامة التجارية", value: "Cavex" },
      { label: "وقت التماسك", value: "2 دقيقة" },
      { label: "العبوة", value: "500 جرام" },
      { label: "النكهة", value: "نعناع" },
    ],
  },
  {
    id: "melag-vacuklav",
    name: "جهاز تعقيم ميلاج فاكيوكلاف 31 B+",
    brand: "Melag",
    category: "الأجهزة",
    price: 2199,
    rating: 4.7,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?q=80&w=800&auto=format&fit=crop",
    tag: { label: "جديد", variant: "primary" },
    description:
      "جهاز تعقيم بالبخار من الفئة B يوفر تعقيمًا شاملاً لجميع أنواع الأدوات المجوفة والمصمتة والمغلفة، مع دورات سريعة وشاشة لمس بديهية وتوثيق رقمي للدورات.",
    specs: [
      { label: "العلامة التجارية", value: "Melag" },
      { label: "الفئة", value: "B" },
      { label: "السعة", value: "31 لترًا" },
      { label: "زمن الدورة القياسية", value: "39 دقيقة" },
    ],
  },
  {
    id: "kavo-multiflex",
    name: "تيربين كافو ملتيفلكس LUX",
    brand: "KaVo Kerr",
    category: "الأجهزة",
    price: 389,
    rating: 4.6,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop",
    description:
      "تيربين عالي السرعة بإضاءة LED متكاملة ومقبض مقاوم للانزلاق، مصمم لتقليل الاهتزاز والضوضاء أثناء العمل مع كفاءة قطع عالية.",
    specs: [
      { label: "العلامة التجارية", value: "KaVo Kerr" },
      { label: "السرعة", value: "حتى 320,000 دورة/دقيقة" },
      { label: "الإضاءة", value: "LED عالية الكثافة" },
      { label: "التوافق", value: "نظام وصلات متعدد" },
    ],
  },
];

export const categories = [
  "الكل",
  "الأدوات اللبية",
  "الأجهزة",
  "الزراعة",
  "التقويم",
  "الترميم",
] as const;
