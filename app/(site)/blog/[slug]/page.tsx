import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="container-app py-10 sm:py-14">
      <nav className="mb-6 flex items-center gap-1.5 text-[13px] text-ink-300">
        <Link href="/" className="hover:text-primary-600">الرئيسية</Link>
        <ChevronLeft className="h-3.5 w-3.5" />
        <Link href="/blog" className="hover:text-primary-600">المدونة</Link>
      </nav>

      <div className="mx-auto max-w-3xl">
        <span className="text-[13px] font-bold text-primary-600">{post.category}</span>
        <h1 className="text-balance mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-3 flex items-center gap-2 text-[13px] text-ink-300">
          <span>
            {new Date(post.date).toLocaleDateString("ar-EG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div className="mt-8 space-y-5">
          {post.content.map((para, i) => (
            <p key={i} className="text-[16px] leading-9 text-ink-700">
              {para}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
