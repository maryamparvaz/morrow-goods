'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Shield, Truck, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const checkoutSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address: z.string().min(1, 'Address is required'),
  apartment: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().optional(),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
  phone: z.string().optional(),
  saveInfo: z.boolean().optional(),
  shippingMethod: z.string().min(1, 'Select a shipping method'),
  paymentMethod: z.string().min(1, 'Select a payment method'),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getShipping = useCartStore((state) => state.getShipping);
  const getTotal = useCartStore((state) => state.getTotal);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      apartment: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'US',
      phone: '',
      saveInfo: false,
      shippingMethod: 'standard',
      paymentMethod: 'card',
    },
  });

  const shippingCost = form.watch('shippingMethod') === 'express' ? 15 : getShipping();

  const onSubmit = (data: CheckoutFormValues) => {
    console.log('Checkout data:', data);
    setSubmitted(true);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-serif font-medium mb-3">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Add items to your cart before checking out.</p>
        <Link href="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-serif font-medium mb-3">Thank you for your order!</h1>
        <p className="text-muted-foreground mb-2">We&apos;ll send you an email confirmation shortly.</p>
        <p className="text-muted-foreground mb-6">Order #MRW-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
        <Link href="/products">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to cart
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Checkout form */}
          <div>
            <h1 className="text-3xl font-serif font-medium mb-8">Checkout</h1>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Contact information */}
                <div>
                  <h2 className="text-lg font-medium mb-4">Contact Information</h2>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                {/* Shipping address */}
                <div>
                  <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="mt-4 space-y-4">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Street address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="apartment"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Apartment, suite, etc. (optional)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid sm:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="UK">United Kingdom</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="saveInfo"
                      render={({ field }) => (
                        <FormItem className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Save this information for next time
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Separator />

                {/* Shipping method */}
                <div>
                  <h2 className="text-lg font-medium mb-4">Shipping Method</h2>
                  <FormField
                    control={form.control}
                    name="shippingMethod"
                    render={({ field }) => (
                      <FormItem>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="space-y-3"
                        >
                          <FormItem className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <FormControl>
                                <RadioGroupItem value="standard" />
                              </FormControl>
                              <div>
                                <FormLabel className="font-medium">Standard Shipping</FormLabel>
                                <p className="text-sm text-muted-foreground">5-7 business days</p>
                              </div>
                            </div>
                            <span className="font-medium">
                              {getSubtotal() >= 150 ? 'Free' : '$8.50'}
                            </span>
                          </FormItem>
                          <FormItem className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <FormControl>
                                <RadioGroupItem value="express" />
                              </FormControl>
                              <div>
                                <FormLabel className="font-medium">Express Shipping</FormLabel>
                                <p className="text-sm text-muted-foreground">1-3 business days</p>
                              </div>
                            </div>
                            <span className="font-medium">$15.00</span>
                          </FormItem>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                {/* Payment method */}
                <div>
                  <h2 className="text-lg font-medium mb-4">Payment Method</h2>
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="space-y-3"
                        >
                          <FormItem className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <FormControl>
                                <RadioGroupItem value="card" />
                              </FormControl>
                              <div>
                                <FormLabel className="font-medium">Credit Card</FormLabel>
                                <p className="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
                              </div>
                            </div>
                            <CreditCard className="h-5 w-5 text-muted-foreground" />
                          </FormItem>
                          <FormItem className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <FormControl>
                                <RadioGroupItem value="paypal" />
                              </FormControl>
                              <div>
                                <FormLabel className="font-medium">PayPal</FormLabel>
                                <p className="text-sm text-muted-foreground">Pay with PayPal</p>
                              </div>
                            </div>
                          </FormItem>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Card details placeholder */}
                  {form.watch('paymentMethod') === 'card' && (
                    <div className="mt-4 space-y-4">
                      <div>
                        <Label>Card Number</Label>
                        <Input placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Expiry</Label>
                          <Input placeholder="MM / YY" />
                        </div>
                        <div>
                          <Label>CVV</Label>
                          <Input placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Place order button */}
                <Button type="submit" className="w-full" size="lg">
                  Place Order - {formatPrice(getSubtotal() + (shippingCost || 0))}
                </Button>

                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck className="h-4 w-4" />
                    <span>Free returns</span>
                  </div>
                </div>
              </form>
            </Form>
          </div>

          {/* Order summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-background rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-md bg-secondary overflow-hidden shrink-0 relative">
                      <img
                        src={item.product.images[0]?.url}
                        alt={item.product.images[0]?.alt || item.product.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.selectedColor?.name || 'Default'}
                      </p>
                    </div>
                    <span className="font-medium text-sm">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Totals */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(getSubtotal())}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {shippingCost === 0 ? 'Free' : formatPrice(shippingCost || 0)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>{formatPrice(getSubtotal() + (shippingCost || 0))}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
