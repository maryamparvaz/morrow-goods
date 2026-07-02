import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { categories } from '@/data/categories';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  className?: string;
}

function CategoryCard({ title, description, href, image, className }: CategoryCardProps) {
  return (
    <Link href={href} className={cn('group block', className)}>
      <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-xl overflow-hidden bg-secondary/60 mb-4 ring-1 ring-border/50 group-hover:ring-primary/20 transition-all duration-300">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}

export default function CategorySection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 lg:mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-2">Browse</p>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium">Shop by Category</h2>
          </div>
          <Link href="/products" className="hidden sm:block">
            <Button variant="ghost" className="group text-muted-foreground hover:text-foreground">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 lg:gap-x-8 lg:gap-y-10">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              description={category.description}
              href={`/products?category=${category.slug}`}
              image={category.image}
            />
          ))}
        </div>

        <Link href="/products" className="block sm:hidden mt-8">
          <Button variant="outline" className="w-full">
            View All Products
          </Button>
        </Link>
      </div>
    </section>
  );
}
