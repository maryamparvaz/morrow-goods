import { Review } from '@/types';

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    author: 'Michael T.',
    rating: 5,
    title: 'Beautiful addition to my desk',
    content: 'The Arc Desk Lamp has transformed my workspace. The warm light creates such a calm atmosphere for evening work, and the adjustable arm is perfectly weighted. Worth every penny.',
    verified: true,
    createdAt: '2024-02-10'
  },
  {
    id: '2',
    productId: '1',
    author: 'Sarah K.',
    rating: 5,
    title: 'Exceeded expectations',
    content: 'I was worried about the price, but the quality is exceptional. The touch dimmer is responsive and the light quality is perfect for reading. Beautiful minimal design.',
    verified: true,
    createdAt: '2024-01-28'
  },
  {
    id: '3',
    productId: '2',
    author: 'David L.',
    rating: 4,
    title: 'Perfect size for entryway',
    content: 'The ceramic feels substantial and the speckled finish is even more beautiful in person. Perfect for catching keys and wallet when I walk in.',
    verified: true,
    createdAt: '2024-01-15'
  },
  {
    id: '4',
    productId: '3',
    author: 'Emma R.',
    rating: 5,
    title: 'Finally, a desk mat worth buying',
    content: 'The wool felt quality is outstanding. It muffles sound, looks beautiful, and protects my desk. The Forest color is exactly as shown online.',
    verified: true,
    createdAt: '2024-02-05'
  },
  {
    id: '5',
    productId: '8',
    author: 'James W.',
    rating: 5,
    title: 'My go-to travel bag',
    content: 'The Drift Weekender has become my constant companion. The waxed canvas is holding up beautifully, and the leather trim is developing a lovely patina. Fits everything I need for 3-4 days.',
    verified: true,
    createdAt: '2024-02-12'
  }
];

export const getProductReviews = (productId: string): Review[] => {
  return reviews.filter(r => r.productId === productId);
};
