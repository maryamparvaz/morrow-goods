import { FAQ } from '@/types';

export const faqs: FAQ[] = [
  {
    id: '1',
    category: 'Orders',
    question: 'How do I track my order?',
    answer: 'Once your order ships, you\'ll receive an email with a tracking number and link. You can also check your order status by logging into your account and viewing your order history.'
  },
  {
    id: '2',
    category: 'Orders',
    question: 'Can I modify or cancel my order?',
    answer: 'You can modify or cancel your order within 2 hours of placing it. After that window, our warehouse begins processing and we cannot accept changes. Please contact us immediately if you need to make changes.'
  },
  {
    id: '3',
    category: 'Returns',
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of delivery for items in original condition with all tags attached. Some categories like personalized items are final sale. Return shipping is free for exchanges.'
  },
  {
    id: '4',
    category: 'Returns',
    question: 'How do I start a return?',
    answer: 'Log into your account, find your order, and click "Start Return." You\'ll receive a prepaid shipping label. Once we receive and inspect your return, we\'ll process your refund within 3-5 business days.'
  },
  {
    id: '5',
    category: 'Shipping',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to over 40 countries worldwide. International shipping rates and delivery times vary by destination. Import duties and taxes may apply and are the responsibility of the customer.'
  },
  {
    id: '6',
    category: 'Shipping',
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days. Express shipping (1-3 business days) is available at checkout for an additional fee. Orders placed before 2 PM ET typically ship the same business day.'
  },
  {
    id: '7',
    category: 'Product Questions',
    question: 'Are your products covered by a warranty?',
    answer: 'All Morrow products come with a 1-year warranty against manufacturing defects. We also offer an extended 3-year protection plan at checkout for additional peace of mind.'
  },
  {
    id: '8',
    category: 'Product Questions',
    question: 'How do I care for leather products?',
    answer: 'For our leather goods, we recommend occasional conditioning with a quality leather balm. Avoid prolonged exposure to direct sunlight or water. Unlacquered brass will develop a natural patina over time.'
  }
];

export const getFAQByCategory = (category: string): FAQ[] => {
  return faqs.filter(f => f.category === category);
};
