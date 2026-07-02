'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium mb-4">
            Join the journey
          </h2>
          <p className="text-muted-foreground mb-8">
            Get early access to new arrivals, exclusive offers, and thoughtful content delivered to your inbox.
          </p>

          {submitted ? (
            <div className="bg-background rounded-lg p-6 text-center">
              <p className="font-medium mb-2">Thanks for subscribing</p>
              <p className="text-sm text-muted-foreground">
                We&apos;ll send updates to your inbox soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
