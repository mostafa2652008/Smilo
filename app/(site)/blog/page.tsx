import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "المدونة",
  description: "مقالات ونصائح متخصصة في إدارة العيادات ومواد ومعدات طب الأسنان.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="المدونة"
        title="مقالات ونصائح لعيادتك"
        description="محتوى متخصص يساعدك على اتخاذ قرارات أفضل عند اختيار المواد والأجهزة وإدارة عيادتك."
      />

      <section className="container-app py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-primary-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[12px] font-bold text-primary-600">
                  {post.category}
                </span>
                <h3 className="mt-1.5 line-clamp-2 font-display text-[15.5px] font-bold text-ink-900">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[13.5px] leading-6 text-ink-500">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[12px] text-ink-300">
                  <span>{new Date(post.date).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
