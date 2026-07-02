import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'Shop All', href: '/products' },
    { label: 'Desk Essentials', href: '/products?category=desk-essentials' },
    { label: 'Tech Accessories', href: '/products?category=tech-accessories' },
    { label: 'Travel Goods', href: '/products?category=travel-goods' },
    { label: 'Home Objects', href: '/products?category=home-objects' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Journal', href: '#' },
  ],
  support: [
    { label: 'Shipping', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Care Instructions', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block mb-5">
                <span className="font-serif text-2xl font-medium tracking-tight">Morrow</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs mb-6 leading-relaxed">
                Considered goods for modern everyday living. Carefully chosen objects that make daily life a little more thoughtful.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Shop links */}
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Shop</h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Morrow Goods. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
