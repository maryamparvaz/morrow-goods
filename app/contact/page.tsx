'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle, Package, RotateCcw, Truck, CircleHelp as HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const supportCategories = [
  { icon: Package, title: 'Orders', description: 'Track your order or check status' },
  { icon: RotateCcw, title: 'Returns', description: 'Start a return or exchange' },
  { icon: Truck, title: 'Shipping', description: 'Delivery questions and timelines' },
  { icon: HelpCircle, title: 'Product Questions', description: 'Size, materials, and care info' },
];

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of delivery. Items must be unused and in original packaging.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days. Express shipping (1-3 days) is available at checkout.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to over 40 countries. Rates and delivery times vary by destination.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/20 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-medium mb-4">
            Get in touch
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a question or need help with an order? We&apos;re here to help. Our team typically responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-background rounded-lg p-8 border">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Message sent!</h3>
                    <p className="text-muted-foreground">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-medium mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="order">Order Question</SelectItem>
                            <SelectItem value="product">Product Inquiry</SelectItem>
                            <SelectItem value="return">Return or Exchange</SelectItem>
                            <SelectItem value="shipping">Shipping Question</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          placeholder="How can we help?"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              {/* Direct contact */}
              <div className="bg-background rounded-lg p-6 border">
                <h3 className="font-medium mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:hello@morrow.com" className="hover:underline">
                        hello@morrow.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+18005551234" className="hover:underline">
                        1-800-555-1234
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p>Portland, Oregon</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Response time: Within 24 hours on business days
                </p>
              </div>

              {/* Quick help */}
              <div className="bg-background rounded-lg p-6 border">
                <h3 className="font-medium mb-4">Quick Help</h3>
                <div className="space-y-3">
                  {supportCategories.map((cat) => (
                    <div
                      key={cat.title}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <cat.icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-sm">{cat.title}</p>
                        <p className="text-xs text-muted-foreground">{cat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-medium text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-background rounded-lg p-6 border">
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            For more questions, visit our{' '}
            <Link href="#" className="underline hover:text-foreground">
              Help Center
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
