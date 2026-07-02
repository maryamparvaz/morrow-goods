import { Truck, Shield, Award, RotateCcw } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On all orders over $150',
  },
  {
    icon: Shield,
    title: 'Secure Checkout',
    description: 'SSL encrypted payments',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Curated materials & design',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: '30-day hassle-free returns',
  },
];

export default function BenefitsSection() {
  return (
    <section className="border-y bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4">
              <div className="rounded-full bg-background shadow-sm p-2.5 shrink-0 ring-1 ring-border/50">
                <benefit.icon className="h-5 w-5 text-foreground" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-sm mb-0.5">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
