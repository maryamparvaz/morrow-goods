'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Heart, Minus, Plus, Truck, RotateCcw, Shield, ChevronRight, Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { getProductReviews } from '@/data/reviews';
import { formatPrice, getDiscountPercentage } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ProductCard from '@/components/product/ProductCard';
import { useCartStore } from '@/store/cart';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Product not found</h1>
          <Link href="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.compareAtPrice
    ? getDiscountPercentage(product.price, product.compareAtPrice)
    : 0;

  const reviews = getProductReviews(product.id);
  const relatedProducts = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor, selectedSize);
    openCart();
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-foreground">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href={`/products?category=${product.categorySlug}`}
            className="hover:text-foreground"
          >
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/30 ring-1 ring-border/50">
              <img
                src={product.images[activeImage]?.url || product.images[0]?.url}
                alt={product.images[activeImage]?.alt || product.name}
                className="h-full w-full object-cover"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-primary text-primary-foreground">New</Badge>
                )}
                {discount > 0 && <Badge variant="destructive">-{discount}%</Badge>}
              </div>
            </div>

            {/* Thumbnail images */}
            <div className="flex gap-3">
              {product.images.map((image, i) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    'w-20 h-20 rounded-md overflow-hidden border-2 bg-secondary/30 transition-colors',
                    activeImage === i ? 'border-primary' : 'border-transparent'
                  )}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pt-4">
            {/* Category */}
            <Link
              href={`/products?category=${product.categorySlug}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {product.category}
            </Link>

            {/* Title */}
            <h1 className="text-3xl font-serif font-medium mt-2 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-muted text-muted'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-8">{product.description}</p>

            {/* Color selector */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Color</span>
                  <span className="text-sm text-muted-foreground">{selectedColor?.name}</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        'w-10 h-10 rounded-full border-2 transition-all',
                        selectedColor?.id === color.id
                          ? 'border-foreground scale-110'
                          : 'border-muted'
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <span className="font-medium mb-3 block">Size</span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      disabled={size.stock === 0}
                      className={cn(
                        'px-4 py-2 rounded-md border text-sm transition-all',
                        selectedSize?.id === size.id
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-foreground',
                        size.stock === 0 && 'opacity-50 cursor-not-allowed'
                      )}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <span className="font-medium mb-3 block">Quantity</span>
              <div className="flex items-center border rounded-md w-fit">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 mb-6">
              <Button onClick={handleAddToCart} className="flex-1" size="lg">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>

            {/* Stock status */}
            <div className="mb-8">
              {product.stock > 10 ? (
                <p className="text-sm text-green-600">In Stock</p>
              ) : product.stock > 0 ? (
                <p className="text-sm text-orange-600">Low Stock - Only {product.stock} left</p>
              ) : (
                <p className="text-sm text-destructive">Out of Stock</p>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y">
              <div className="flex flex-col items-center text-center">
                <Truck className="h-5 w-5 mb-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Free shipping over $150</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="h-5 w-5 mb-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">30-day returns</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-5 w-5 mb-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">1-year warranty</span>
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="details">
                <AccordionTrigger>Product Details</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{product.longDescription}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="features">
                <AccordionTrigger>Features</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {product.materials.map((material, i) => (
                      <li key={i}>{material}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Free standard shipping on orders over $150. Express shipping available at checkout.</p>
                    <p>Free returns within 30 days of delivery. Items must be unused and in original packaging.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-medium mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
