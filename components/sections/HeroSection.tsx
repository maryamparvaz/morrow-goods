import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/categories/desk-essentials.svg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            {/* Tagline */}
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Considered Goods
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight leading-[1.1] mb-6">
              Better everyday objects, chosen with care.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Discover refined tech accessories, home essentials, and travel pieces made for work, weekends, and everything between.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="group px-8">
                  Shop New Arrivals
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="px-8">
                  Explore Collection
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border/50 flex flex-wrap items-center gap-6 lg:gap-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free shipping over $150</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>30-day returns</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
