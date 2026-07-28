import { Hero } from "@/components/hero";
import { BrandMarquee } from "@/components/brand-marquee";
import { ValueProps } from "@/components/value-props";
import { CategoryGrid } from "@/components/category-grid";
import { FeaturedProducts } from "@/components/featured-products";
import { QuoteBanner } from "@/components/quote-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <ValueProps />
      <CategoryGrid />
      <FeaturedProducts />
      <QuoteBanner />
    </>
  );
}
