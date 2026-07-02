# Morrow Goods

<p align="center">
  <strong>Considered goods for modern everyday living.</strong>
</p>

<p align="center">
  A premium e-commerce frontend built with Next.js 13, TypeScript, and Tailwind CSS.<br/>
  Designed to showcase modern frontend engineering practices for a professional portfolio.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-13.5-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.2-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

## Overview

**Morrow Goods** is a curated lifestyle e-commerce store featuring carefully selected modern everyday products: tech accessories, desk essentials, home goods, travel items, bags, and minimal lifestyle pieces.

This project demonstrates a complete, polished online shopping experience with a calm, elegant design inspired by premium DTC brands like Aesop, Muji, and COS.

### Key Features

- **Complete E-commerce Flow** - Browse, filter, search, add to cart, and checkout
- **Product Catalog** - 16 curated products across 6 categories
- **Advanced Filtering** - Filter by category, price range, and search query
- **Smart Sorting** - Sort by newest, best sellers, price, and rating
- **Detailed Product Pages** - Color/size selectors, image gallery, stock status
- **Cart Management** - Persistent cart with Zustand + localStorage
- **Checkout Flow** - Complete multi-step checkout with form validation
- **Responsive Design** - Optimized for mobile, tablet, and desktop

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/morrow-goods.git
cd morrow-goods

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 13](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible UI components |
| [Zustand](https://zustand-demo.pmnd.rs/) | Cart state management |
| [React Hook Form](https://react-hook-form.com/) | Form handling |
| [Zod](https://zod.dev/) | Schema validation |
| [Lucide](https://lucide.dev/) | Icons |

---

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── products/             # Product listing & detail
│   ├── cart/                 # Shopping cart
│   ├── checkout/             # Checkout flow
│   ├── about/                # Brand story
│   └── contact/              # Contact form
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── product/              # ProductCard
│   ├── cart/                 # CartDrawer
│   ├── sections/             # Homepage sections
│   └── ui/                   # shadcn/ui components
├── data/                     # Mock product data
├── store/                    # Zustand cart store
├── types/                    # TypeScript interfaces
└── lib/                      # Utility functions
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, categories, products |
| `/products` | Product listing with filters and sorting |
| `/products/:slug` | Individual product detail page |
| `/cart` | Shopping cart with quantity controls |
| `/checkout` | Multi-step checkout form |
| `/about` | Brand story and values |
| `/contact` | Contact form and FAQ |

---

## Features in Detail

### Product Filtering & Sorting

All filtering happens client-side with instant results:

- **Search** - Filter by product name and description
- **Category** - Single category selection
- **Price Range** - Preset ranges (under $50, $50-100, etc.)
- **Sort Options** - Newest, best sellers, price, rating

### Cart Functionality

Managed with Zustand and persisted to localStorage:

```typescript
// Add to cart
addItem(product, quantity, color, size)

// Update quantity
updateQuantity(productId, newQuantity)

// Calculate totals
getSubtotal()
getShipping() // Free over $150
getTotal()
```

### Responsive Design

- Mobile-first approach
- Hamburger menu on mobile
- Sheet-based filters on mobile
- Adaptive product grids (2-4 columns)
- Touch-friendly interactions

---

## Design System

### Color Palette

A warm neutral palette designed for a premium, editorial feel:

| Token | Light | Usage |
|-------|-------|-------|
| Background | `#faf9f7` | Page background |
| Foreground | `#262320` | Text |
| Primary | `#262320` | Buttons, emphasis |
| Secondary | `#f2efe9` | Cards, sections |
| Muted | `#8a8578` | Secondary text |

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Sizes**: Responsive scale with Tailwind

### Spacing

Consistent 8px base unit with semantic classes:

```css
.section-padding { padding: 4rem 0; }
.container-wide { max-width: 80rem; }
```

---

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/morrow-goods)

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## Engineering Highlights

<details>
<summary><strong>TypeScript Integration</strong></summary>

Strongly typed throughout with interfaces for all data structures:

```typescript
interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  colors: ProductColor[];
  sizes?: ProductSize[];
  // ... more fields
}

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: ProductColor;
  selectedSize?: ProductSize;
}
```

</details>

<details>
<summary><strong>Zustand Store Pattern</strong></summary>

Clean state management with computed getters:

```typescript
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity, color, size) => { /* ... */ },
      getItemCount: () => get().items.reduce((t, i) => t + i.quantity, 0),
      getSubtotal: () => get().items.reduce((t, i) => t + i.product.price * i.quantity, 0),
    }),
    { name: 'morrow-cart' }
  )
);
```

</details>

<details>
<summary><strong>Accessibility</strong></summary>

- ARIA labels on all interactive elements
- Focus-visible states
- Keyboard navigation support
- Color contrast ratios meet WCAG AA
- Screen reader friendly markup

</details>

---

## Future Improvements

- [ ] Add product images with Next.js Image optimization
- [ ] Implement user authentication with Supabase
- [ ] Move product data to Supabase database
- [ ] Add Stripe payment integration
- [ ] Implement full-text search
- [ ] Add product reviews with authentication
- [ ] Wishlist functionality
- [ ] Order history tracking

---

## Screenshots

Coming soon.

---

## Credits

Built by a frontend developer passionate about thoughtful design and clean code.

- Design inspired by [Aesop](https://www.aesop.com/), [Muji](https://www.muji.us/), [COS](https://www.cos.com/)
- Icons from [Lucide](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

---

## License

MIT License - feel free to use this project for your own learning and portfolio.
