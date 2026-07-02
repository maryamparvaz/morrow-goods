export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  longDescription: string;
  features: string[];
  materials: string[];
  colors: ProductColor[];
  sizes?: ProductSize[];
  isNew: boolean;
  isBestSeller: boolean;
  stock: number;
  images: ProductImage[];
  tags: string[];
  createdAt: string;
}

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
}

export interface ProductSize {
  id: string;
  name: string;
  stock: number;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: ProductColor;
  selectedSize?: ProductSize;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  verified: boolean;
  createdAt: string;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface SortOption {
  id: string;
  label: string;
  value: string;
}

export interface FilterState {
  category: string | null;
  priceRange: [number, number];
  search: string;
  sortBy: string;
}

export interface CheckoutForm {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  phone: string;
  saveInfo: boolean;
  shippingMethod: string;
  paymentMethod: string;
}
