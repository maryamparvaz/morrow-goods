'use client';

import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function CartDrawer() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getShipping = useCartStore((state) => state.getShipping);
  const getTotal = useCartStore((state) => state.getTotal);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
        <p className="text-lg font-medium mb-2">Your cart is empty</p>
        <p className="text-sm text-muted-foreground mb-6">
          Add some items to your cart to get started.
        </p>
        <Link href="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Cart items */}
      <div className="flex-1 overflow-auto py-4">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4">
              {/* Product image */}
              <div className="w-20 h-20 rounded-md bg-secondary overflow-hidden shrink-0">
                <img
                  src={item.product.images[0]?.url}
                  alt={item.product.images[0]?.alt || item.product.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-sm line-clamp-1">{item.product.name}</h4>
                    {item.selectedColor && (
                      <p className="text-xs text-muted-foreground">{item.selectedColor.name}</p>
                    )}
                    {item.selectedSize && (
                      <p className="text-xs text-muted-foreground">{item.selectedSize.name}</p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      disabled={item.quantity >= item.product.stock}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="font-medium text-sm">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order summary */}
      <div className="border-t pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatPrice(getSubtotal())}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span>{getShipping() === 0 ? 'Free' : formatPrice(getShipping())}</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>{formatPrice(getTotal())}</span>
        </div>
        <Link href="/checkout" className="block">
          <Button className="w-full" size="lg">
            Checkout
          </Button>
        </Link>
        <Link href="/cart" className="block">
          <Button variant="outline" className="w-full" size="lg">
            View Cart
          </Button>
        </Link>
      </div>
    </div>
  );
}
