'use client';

import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getShipping = useCartStore((state) => state.getShipping);
  const getTotal = useCartStore((state) => state.getTotal);

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mb-6" />
        <h1 className="text-2xl font-serif font-medium mb-3">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          Looks like you haven&apos;t added anything to your cart yet. Browse our collection to find something you love.
        </p>
        <Link href="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-serif font-medium mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-lg divide-y">
              {items.map((item) => (
                <div key={item.product.id} className="p-6 flex gap-4">
                  {/* Product image */}
                  <Link href={`/products/${item.product.slug}`} className="shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-md bg-secondary overflow-hidden">
                      <img
                        src={item.product.images[0]?.url}
                        alt={item.product.images[0]?.alt || item.product.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </Link>

                  {/* Product info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-medium hover:underline"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {item.product.category}
                        </p>
                        {item.selectedColor && (
                          <p className="text-sm text-muted-foreground">
                            Color: {item.selectedColor.name}
                          </p>
                        )}
                        {item.selectedSize && (
                          <p className="text-sm text-muted-foreground">
                            Size: {item.selectedSize.name}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.product.id)}
                        className="shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity selector */}
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-10 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-medium">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-muted-foreground">
                            {formatPrice(item.product.price)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue shopping */}
            <div className="mt-6">
              <Link href="/products">
                <Button variant="outline">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-background rounded-lg p-6 sticky top-24">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>

              {/* Promo code */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Promo Code</label>
                <div className="flex gap-2">
                  <Input placeholder="Enter code" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(getSubtotal())}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {getShipping() === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      formatPrice(getShipping())
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>{formatPrice(getTotal())}</span>
                </div>
              </div>

              <Link href="/checkout" className="block mt-6">
                <Button className="w-full" size="lg">
                  Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Free shipping on orders over $150
              </p>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-2 gap-4 text-center text-xs text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Secure Checkout</p>
                    <p>SSL encrypted</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Easy Returns</p>
                    <p>30-day policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
