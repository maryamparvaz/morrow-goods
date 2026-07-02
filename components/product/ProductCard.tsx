'use client';

import Link from 'next/link';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { Product, ProductColor, ProductSize } from '@/types';
import { formatPrice, getDiscountPercentage } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/store/cart';

interface ProductCardProps {
  product: Product;
  className?: string;
  showQuickAdd?: boolean;
}

export default function ProductCard({ product, className, showQuickAdd = true }: ProductCardProps) {
  const discount = product.compareAtPrice
    ? getDiscountPercentage(product.price, product.compareAtPrice)
    : 0;

  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, product.colors[0], product.sizes?.[0]);
    openCart();
  };

  return (
    <div className={cn('group relative flex flex-col', className)}>
      {/* Product image */}
      <Link
        href={`/products/${product.slug}`}
        className="relative overflow-hidden rounded-lg bg-secondary/30 aspect-[4/5] block ring-1 ring-border/40"
      >
        <img
          src={product.images[0]?.url}
          alt={product.images[0]?.alt || product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Hover overlay with quick add */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          {showQuickAdd && (
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground border-0 text-xs font-medium px-2 py-1">
              New
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive" className="text-xs font-medium px-2 py-1">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Best seller badge - bottom right */}
        {product.isBestSeller && !product.isNew && (
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs font-medium px-2 py-1">
              Best Seller
            </Badge>
          </div>
        )}

        {/* Low stock indicator */}
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute bottom-3 left-3">
            <Badge variant="outline" className="bg-background/90 backdrop-blur-sm text-xs font-medium px-2 py-1 border-orange-200 text-orange-700">
              Only {product.stock} left
            </Badge>
          </div>
        )}
      </Link>

      {/* Product info */}
      <div className="mt-4 flex flex-col gap-1.5">
        {/* Category */}
        <Link
          href={`/products?category=${product.categorySlug}`}
          className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          {product.category}
        </Link>

        {/* Name */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3.5 h-3.5',
                  i < Math.floor(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-secondary text-secondary'
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{product.reviewCount} reviews</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-1">
          <span className="text-lg font-medium text-foreground">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>

      {/* Quick actions - visible on hover desktop, always visible mobile */}
      <div className="mt-4 flex items-center gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
        <Button
          onClick={handleAddToCart}
          className="flex-1"
          size="sm"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon" className="shrink-0 h-9 w-9">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
    </div>
  );
}
