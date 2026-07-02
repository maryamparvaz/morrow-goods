import HeroSection from '@/components/sections/HeroSection';
import CategorySection from '@/components/sections/CategorySection';
import ProductSection from '@/components/sections/ProductSections';
import BenefitsSection from '@/components/sections/BenefitsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { getNewArrivals, getBestSellers, getFeaturedProducts } from '@/data/products';

export default function Home() {
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <HeroSection />
      <CategorySection />
      <ProductSection
        title="New Arrivals"
        subtitle="The latest additions to our collection"
        products={newArrivals}
        viewAllLink="/products?sort=newest"
      />
      <BenefitsSection />
      <ProductSection
        title="Best Sellers"
        subtitle="Customer favorites, chosen again and again"
        products={bestSellers}
        viewAllLink="/products?sort=best-sellers"
      />
      <NewsletterSection />
    </div>
  );
}
