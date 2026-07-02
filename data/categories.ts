import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Desk Essentials',
    slug: 'desk-essentials',
    description: 'Thoughtful products that make your workspace more productive and beautiful.',
    image: '/categories/desk-essentials.svg',
    productCount: 3
  },
  {
    id: '2',
    name: 'Tech Accessories',
    slug: 'tech-accessories',
    description: 'Clever organizers and protectors for your everyday devices.',
    image: '/categories/tech-accessories.svg',
    productCount: 3
  },
  {
    id: '3',
    name: 'Travel Goods',
    slug: 'travel-goods',
    description: 'Durable bags and organizers for effortless journeys.',
    image: '/categories/travel-goods.svg',
    productCount: 3
  },
  {
    id: '4',
    name: 'Home Objects',
    slug: 'home-objects',
    description: 'Ceramics, audio, and accents that bring warmth to your space.',
    image: '/categories/home-objects.svg',
    productCount: 3
  },
  {
    id: '5',
    name: 'Bags and Carry',
    slug: 'bags-and-carry',
    description: 'Versatile backpacks and totes for modern daily life.',
    image: '/categories/bags-and-carry.svg',
    productCount: 2
  },
  {
    id: '6',
    name: 'Everyday Tools',
    slug: 'everyday-tools',
    description: 'Refined instruments for writing, crafting, and making.',
    image: '/categories/everyday-tools.svg',
    productCount: 2
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};
