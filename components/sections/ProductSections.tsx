import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/ProductCard';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
}

export default function ProductSection({
  title,
  subtitle,
  products,
  viewAllLink,
}: ProductSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          {viewAllLink && (
            <Link href={viewAllLink} className="hidden sm:block">
              <Button variant="ghost" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {viewAllLink && (
          <Link href={viewAllLink} className="block sm:hidden mt-6">
            <Button variant="outline" className="w-full">
              View All
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
}
