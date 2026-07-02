import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Search, Package, Leaf } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Search,
      title: 'Considered Selection',
      description: 'Every product is chosen with intention. We look for items that solve real problems, last for years, and look beautiful in your home.',
    },
    {
      icon: Heart,
      title: 'Quality Over Quantity',
      description: 'We would rather offer fewer excellent products than fill our shelves with mediocrity. Each item meets our rigorous standards.',
    },
    {
      icon: Package,
      title: 'Honest Materials',
      description: 'We believe in transparency about what things are made of and where they come from. No hidden costs, no compromises.',
    },
    {
      icon: Leaf,
      title: 'Reasonable Footprint',
      description: 'We work with makers who share our commitment to sustainable practices, thoughtful packaging, and responsible sourcing.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-serif font-medium mb-6">
              We believe the objects we live with should be chosen with care.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Morrow started with a simple observation: most of the things we use daily were bought without much thought. They were either the cheapest option, the most convenient, or simply what was available. We wanted better—and we thought you might too.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[4/3] rounded-lg bg-secondary">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl font-serif text-muted-foreground/10">M</span>
                </div>
              </div>
            </div>
            <div className="max-w-xl">
              <h2 className="text-3xl font-serif font-medium mb-6">
                The story behind Morrow
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Morrow was founded in 2021 by a small team of designers and makers who shared a frustration with the state of modern consumption. We had all bought things that broke after a few months, looked dated within a year, or never quite worked the way they were supposed to.
                </p>
                <p>
                  We started asking questions: What if every purchase was intentional? What if the things we owned actually lasted? What if design meant more than just how something looks?
                </p>
                <p>
                  That conversation became Morrow—a curated collection of everyday objects that meet our standards for quality, utility, and aesthetic. We&apos;re not trying to sell you everything. We&apos;re trying to help you find the things worth keeping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-medium mb-4">What we stand for</h2>
            <p className="text-muted-foreground">
              Every decision at Morrow is guided by these core principles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Morrow */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif font-medium mb-6">
                Why Morrow?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We spend months researching, testing, and living with products before adding them to our collection. We visit workshops, talk to makers, and understand the materials and processes behind everything we sell.
                </p>
                <p>
                  When you buy from Morrow, you&apos;re not just buying a product. You&apos;re getting our research, our standards, and our promise that this thing is worth your money and your space.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/products">
                  <Button>
                    Explore the Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-lg bg-secondary">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="aspect-square rounded-md bg-secondary/50" />
                    <div className="aspect-square rounded-md bg-secondary/50" />
                    <div className="aspect-square rounded-md bg-secondary/50" />
                    <div className="aspect-square rounded-md bg-secondary/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-4">
            Ready for better everyday objects?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Browse our curated collection of carefully chosen products for modern everyday living.
          </p>
          <Link href="/products">
            <Button variant="secondary" size="lg">
              Shop the Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
