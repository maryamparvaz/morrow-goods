import { Product } from '@/types';

export const products: Product[] = [
  // Desk Essentials
  {
    id: '1',
    slug: 'arc-desk-lamp',
    name: 'Arc Desk Lamp',
    category: 'Desk Essentials',
    categorySlug: 'desk-essentials',
    price: 145,
    compareAtPrice: 180,
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural desk lamp with adjustable arm and warm diffused light.',
    longDescription: 'The Arc Desk Lamp combines form and function with its minimalist silhouette and fully adjustable arm. The weighted base provides stability while the warm 2700K LED creates the perfect ambient glow for late-night work sessions or relaxed reading.',
    features: ['Adjustable arm and head', 'Touch dimmer control', 'Warm 2700K LED', 'Memory function', '6-foot braided cord'],
    materials: ['Powder-coated steel', 'Solid brass accents', 'Matte silicone shade'],
    colors: [
      { id: 'c1', name: 'Matte Black', hex: '#1a1a1a' },
      { id: 'c2', name: 'Warm White', hex: '#f5f0e8' },
      { id: 'c3', name: 'Sage Green', hex: '#8b9a7d' }
    ],
    isNew: true,
    isBestSeller: false,
    stock: 23,
    images: [
      { id: 'i1', url: '/products/arc-lamp-1.svg', alt: 'Arc Desk Lamp in Matte Black' },
      { id: 'i2', url: '/products/arc-lamp-2.svg', alt: 'Arc Desk Lamp side view' },
      { id: 'i3', url: '/products/arc-lamp-3.svg', alt: 'Arc Desk Lamp on a modern desk' }
    ],
    tags: ['lighting', 'desk', 'modern', 'adjustable'],
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    slug: 'formal-ceramic-tray',
    name: 'Forma Ceramic Tray',
    category: 'Desk Essentials',
    categorySlug: 'desk-essentials',
    price: 68,
    rating: 4.6,
    reviewCount: 89,
    description: 'A handcrafted ceramic tray for organizing everyday carry items.',
    longDescription: 'The Forma Ceramic Tray brings quiet elegance to your desktop or entryway. Each piece is slip-cast and finished by hand, resulting in subtle variations that make every tray unique. Perfect for keys, coins, and small accessories.',
    features: ['Hand-finished surface', 'Non-slip cork backing', 'Raised edges', 'Stackable design'],
    materials: ['High-fire ceramic', 'Natural cork backing'],
    colors: [
      { id: 'c4', name: 'Speckled White', hex: '#e8e4df' },
      { id: 'c5', name: 'Charcoal', hex: '#363636' },
      { id: 'c6', name: 'Terracotta', hex: '#c67c5e' }
    ],
    isNew: false,
    isBestSeller: true,
    stock: 45,
    images: [
      { id: 'i4', url: '/products/forma-tray-1.svg', alt: 'Forma Ceramic Tray in Speckled White' }
    ],
    tags: ['organization', 'ceramic', 'desktop', 'handmade'],
    createdAt: '2023-11-20'
  },
  {
    id: '3',
    slug: 'haven-desk-mat',
    name: 'Haven Desk Mat',
    category: 'Desk Essentials',
    categorySlug: 'desk-essentials',
    price: 89,
    compareAtPrice: 110,
    rating: 4.9,
    reviewCount: 203,
    description: 'A premium wool-felt desk mat that protects your workspace in style.',
    longDescription: 'The Haven Desk Mat is crafted from 5mm premium wool felt, providing a soft, durable surface for your daily work. Naturally water-resistant and acoustic-dampening, it creates a calmer, more focused workspace environment.',
    features: ['5mm thick wool felt', 'Water-resistant', 'Acoustic dampening', 'Non-slip backing', 'Complimentary cable organizer'],
    materials: ['100% wool felt', 'Natural rubber backing'],
    colors: [
      { id: 'c7', name: 'Oatmeal', hex: '#d9cec0' },
      { id: 'c8', name: 'Charcoal', hex: '#3d3d3d' },
      { id: 'c9', name: 'Forest', hex: '#2d4739' }
    ],
    sizes: [
      { id: 's1', name: 'Medium (60x40cm)', stock: 32 },
      { id: 's2', name: 'Large (90x45cm)', stock: 18 }
    ],
    isNew: false,
    isBestSeller: true,
    stock: 50,
    images: [
      { id: 'i5', url: '/products/haven-mat-1.svg', alt: 'Haven Desk Mat in Oatmeal' }
    ],
    tags: ['desk', 'felt', 'workspace', 'protection'],
    createdAt: '2023-09-10'
  },
  // Tech Accessories
  {
    id: '4',
    slug: 'cove-charging-stand',
    name: 'Cove Charging Stand',
    category: 'Tech Accessories',
    categorySlug: 'tech-accessories',
    price: 79,
    rating: 4.7,
    reviewCount: 156,
    description: 'A minimalist charging stand that keeps your devices organized and powered.',
    longDescription: 'The Cove Charging Stand elegantly manages your daily tech ritual. With built-in cable management and a weighted aluminum base, it provides a dedicated home for your phone and smartwatch to charge overnight without the clutter.',
    features: ['Adjustable viewing angle', 'Cable management system', 'Weighted base', 'Qi-compatible', 'Nightstand mode support'],
    materials: ['Anodized aluminum', 'Silicone padding', 'Braided nylon cable'],
    colors: [
      { id: 'c10', name: 'Silver', hex: '#c0c0c0' },
      { id: 'c11', name: 'Graphite', hex: '#4a4a4a' },
      { id: 'c12', name: 'Rose Gold', hex: '#b76e79' }
    ],
    isNew: false,
    isBestSeller: true,
    stock: 67,
    images: [
      { id: 'i6', url: '/products/cove-stand-1.svg', alt: 'Cove Charging Stand in Silver' }
    ],
    tags: ['charging', 'tech', 'organization', 'aluminum'],
    createdAt: '2023-08-05'
  },
  {
    id: '5',
    slug: 'atlas-cable-organizer',
    name: 'Atlas Cable Organizer',
    category: 'Tech Accessories',
    categorySlug: 'tech-accessories',
    price: 35,
    rating: 4.5,
    reviewCount: 78,
    description: 'A sleek silicone cable organizer that keeps cords tidy and accessible.',
    longDescription: 'The Atlas Cable Organizer brings order to the chaos of modern desk setups. Five flexible slots hold cables of various sizes, while the weighted silicone base stays firmly in place. Easy access means no more fumbling for fallen cords.',
    features: ['5 cable slots', 'Weighted base', 'Adhesive mounting option', 'Universal compatibility'],
    materials: ['Silicone', 'Iron weight'],
    colors: [
      { id: 'c13', name: 'Stone', hex: '#8b8680' },
      { id: 'c14', name: 'Obsidian', hex: '#232323' }
    ],
    isNew: true,
    isBestSeller: false,
    stock: 89,
    images: [
      { id: 'i7', url: '/products/atlas-organizer-1.svg', alt: 'Atlas Cable Organizer' }
    ],
    tags: ['cable', 'organization', 'desk', 'silicone'],
    createdAt: '2024-02-01'
  },
  {
    id: '6',
    slug: 'mono-laptop-sleeve',
    name: 'Mono Laptop Sleeve',
    category: 'Tech Accessories',
    categorySlug: 'tech-accessories',
    price: 95,
    compareAtPrice: 120,
    rating: 4.8,
    reviewCount: 142,
    description: 'A refined laptop sleeve in premium full-grain leather with microfiber lining.',
    longDescription: 'The Mono Laptop Sleeve offers protection with refined aesthetics. Crafted from full-grain vegetable-tanned leather, it develops a beautiful patina over time. The soft microfiber interior cushions your device while maintaining a slim profile.',
    features: ['Full-grain leather', 'Microfiber lining', 'Magnetic closure', 'Accessory pocket', 'Fits 13-16" laptops'],
    materials: ['Full-grain leather', 'Microfiber lining', 'Magnetic closure'],
    colors: [
      { id: 'c15', name: 'Cognac', hex: '#8b4513' },
      { id: 'c16', name: 'Black', hex: '#1a1a1a' },
      { id: 'c17', name: 'Natural', hex: '#d4b896' }
    ],
    sizes: [
      { id: 's3', name: '13-inch', stock: 25 },
      { id: 's4', name: '15-inch', stock: 30 },
      { id: 's5', name: '16-inch', stock: 15 }
    ],
    isNew: false,
    isBestSeller: true,
    stock: 70,
    images: [
      { id: 'i8', url: '/products/mono-sleeve-1.svg', alt: 'Mono Laptop Sleeve in Cognac' }
    ],
    tags: ['laptop', 'leather', 'protection', 'minimal'],
    createdAt: '2023-06-20'
  },
  // Travel Goods
  {
    id: '7',
    slug: 'fold-travel-pouch',
    name: 'Fold Travel Pouch',
    category: 'Travel Goods',
    categorySlug: 'travel-goods',
    price: 55,
    rating: 4.6,
    reviewCount: 91,
    description: 'A clever folding toiletry pouch with multiple compartments and hanging hook.',
    longDescription: 'The Fold Travel Pouch simplifies your travel routine. Unfold it to reveal multiple mesh compartments for organized storage, then hang it by the integrated hook. When packed, it folds flat and secures with a quiet magnetic closure.',
    features: ['4 mesh compartments', '2 zip pockets', 'Hanging hook', 'Magnetic closure', 'Hangs flat or rolls'],
    materials: ['Recycled nylon', 'Mesh panels', 'YKK zippers'],
    colors: [
      { id: 'c18', name: 'Navy', hex: '#1e3a5f' },
      { id: 'c19', name: 'Olive', hex: '#556b2f' },
      { id: 'c20', name: 'Black', hex: '#1a1a1a' }
    ],
    isNew: false,
    isBestSeller: false,
    stock: 54,
    images: [
      { id: 'i9', url: '/products/fold-pouch-1.svg', alt: 'Fold Travel Pouch in Navy' }
    ],
    tags: ['travel', 'toiletry', 'organization', 'foldable'],
    createdAt: '2023-07-15'
  },
  {
    id: '8',
    slug: 'drift-weekender-bag',
    name: 'Drift Weekender Bag',
    category: 'Travel Goods',
    categorySlug: 'travel-goods',
    price: 245,
    compareAtPrice: 295,
    rating: 4.9,
    reviewCount: 187,
    description: 'A spacious canvas weekender with leather trim and thoughtful interior organization.',
    longDescription: 'The Drift Weekender Bag is built for spontaneous escapes. Waxed canvas sheds light rain while leather trim and brass hardware develop character over time. The interior features a dedicated shoe compartment and laptop sleeve for seamless transitions.',
    features: ['Waxed canvas exterior', 'Full-grain leather trim', 'Brass hardware', 'Shoe compartment', 'Padded laptop sleeve', 'Removable shoulder strap'],
    materials: ['Waxed canvas', 'Full-grain leather', 'Brass hardware', 'Cotton twill lining'],
    colors: [
      { id: 'c21', name: 'Sand', hex: '#c2b280' },
      { id: 'c22', name: 'Charcoal', hex: '#36454f' },
      { id: 'c23', name: ' Olive', hex: '#4a5d23' }
    ],
    isNew: true,
    isBestSeller: true,
    stock: 18,
    images: [
      { id: 'i10', url: '/products/drift-bag-1.svg', alt: 'Drift Weekender Bag in Sand' }
    ],
    tags: ['travel', 'weekend', 'canvas', 'leather'],
    createdAt: '2024-01-10'
  },
  {
    id: '9',
    slug: 'passage-passport-wallet',
    name: 'Passage Passport Wallet',
    category: 'Travel Goods',
    categorySlug: 'travel-goods',
    price: 78,
    rating: 4.7,
    reviewCount: 134,
    description: 'A slim passport wallet with RFID blocking and hidden pockets for travel documents.',
    longDescription: 'The Passage Passport Wallet keeps your essential documents secure and accessible. RFID-blocking technology protects your data, while multiple card slots, a passport pocket, and a hidden compartment for emergency cash cover every travel scenario.',
    features: ['RFID blocking', 'Passport pocket', '6 card slots', 'Hidden compartment', 'Ticket slot'],
    materials: ['Full-grain leather', 'RFID-blocking lining'],
    colors: [
      { id: 'c24', name: 'Cognac', hex: '#8b4513' },
      { id: 'c25', name: 'Black', hex: '#1a1a1a' },
      { id: 'c26', name: 'Espresso', hex: '#3c2415' }
    ],
    isNew: false,
    isBestSeller: false,
    stock: 42,
    images: [
      { id: 'i11', url: '/products/passage-wallet-1.svg', alt: 'Passage Passport Wallet in Cognac' }
    ],
    tags: ['travel', 'passport', 'wallet', 'RFID'],
    createdAt: '2023-10-05'
  },
  // Home Objects
  {
    id: '10',
    slug: 'ember-home-speaker',
    name: 'Ember Home Speaker',
    category: 'Home Objects',
    categorySlug: 'home-objects',
    price: 189,
    rating: 4.8,
    reviewCount: 98,
    description: 'A warm-sounding Bluetooth speaker wrapped in premium wool fabric.',
    longDescription: 'The Ember Home Speaker delivers room-filling sound wrapped in acoustic wool fabric. Custom-tuned drivers provide balanced audio across all volumes, while the minimalist design complements any space. Group multiple speakers for whole-home audio.',
    features: ['360° sound', 'Custom drivers', 'Wool fabric wrap', 'Multi-room pairing', 'Voice assistant compatible', '12-hour battery'],
    materials: ['Acoustic wool fabric', 'Aluminum frame', 'Recycled plastic'],
    colors: [
      { id: 'c27', name: 'Heather Grey', hex: '#9e9e9e' },
      { id: 'c28', name: 'Moss', hex: '#5e7054' },
      { id: 'c29', name: 'Terracotta', hex: '#c67c5e' }
    ],
    isNew: true,
    isBestSeller: false,
    stock: 28,
    images: [
      { id: 'i12', url: '/products/ember-speaker-1.svg', alt: 'Ember Home Speaker in Heather Grey' }
    ],
    tags: ['audio', 'bluetooth', 'speaker', 'wool'],
    createdAt: '2024-02-15'
  },
  {
    id: '11',
    slug: 'solstice-candle-holder',
    name: 'Solstice Candle Holder',
    category: 'Home Objects',
    categorySlug: 'home-objects',
    price: 48,
    rating: 4.5,
    reviewCount: 67,
    description: 'A sculptural brass candle holder with a weighted base and timeless form.',
    longDescription: 'The Solstice Candle Holder brings quiet ritual to your daily routine. Hand-cast in solid brass with a weighted base, it accommodates standard tapers while creating striking shadows. The unlacquered finish develops a natural patina over time.',
    features: ['Solid brass construction', 'Weighted base', 'Fits standard tapers', 'Unlacquered finish'],
    materials: ['Solid brass', 'Steel weight'],
    colors: [
      { id: 'c30', name: 'Brass', hex: '#b5a642' },
      { id: 'c31', name: 'Nickel', hex: '#727472' }
    ],
    isNew: false,
    isBestSeller: false,
    stock: 36,
    images: [
      { id: 'i13', url: '/products/solstice-holder-1.svg', alt: 'Solstice Candle Holder in Brass' }
    ],
    tags: ['home', 'candle', 'brass', 'decor'],
    createdAt: '2023-12-01'
  },
  {
    id: '12',
    slug: 'ridge-planter',
    name: 'Ridge Planter',
    category: 'Home Objects',
    categorySlug: 'home-objects',
    price: 62,
    rating: 4.6,
    reviewCount: 54,
    description: 'A textured stoneware planter with integrated drainage and matching saucer.',
    longDescription: 'The Ridge Planter combines organic texture with practical design. Hand-thrown stoneware features a ribbed exterior that catches the light, while the integrated drainage hole and matching saucer ensure healthy plants without mess.',
    features: ['Integrated drainage', 'Matching saucer', 'Hand-thrown texture', 'Indoor/outdoor use'],
    materials: ['High-fire stoneware', 'Lead-free glaze'],
    colors: [
      { id: 'c32', name: 'Cream', hex: '#f5f5dc' },
      { id: 'c33', name: 'Slate', hex: '#708090' },
      { id: 'c34', name: 'Blush', hex: '#de8e8e' }
    ],
    sizes: [
      { id: 's6', name: 'Small (12cm)', stock: 40 },
      { id: 's7', name: 'Medium (18cm)', stock: 25 }
    ],
    isNew: false,
    isBestSeller: false,
    stock: 65,
    images: [
      { id: 'i14', url: '/products/ridge-planter-1.svg', alt: 'Ridge Planter in Cream' }
    ],
    tags: ['home', 'planter', 'plants', 'ceramic'],
    createdAt: '2023-05-20'
  },
  // Bags and Carry
  {
    id: '13',
    slug: 'northline-backpack',
    name: 'Northline Backpack',
    category: 'Bags and Carry',
    categorySlug: 'bags-and-carry',
    price: 195,
    rating: 4.9,
    reviewCount: 215,
    description: 'A versatile everyday backpack in weather-resistant materials with dedicated laptop compartment.',
    longDescription: 'The Northline Backpack is designed for the modern commute. Weather-resistant recycled nylon protects your essentials, while the suspended laptop compartment fits devices up to 16 inches. Quick-access pockets keep daily items within reach.',
    features: ['Weather-resistant', 'Suspended laptop sleeve (16")', 'Quick-access pockets', 'Padded straps', 'Chest stabilizer', 'Hidden security pocket'],
    materials: ['Recycled nylon', 'Coated canvas bottom', 'Recycled polyester lining'],
    colors: [
      { id: 'c35', name: 'Black', hex: '#1a1a1a' },
      { id: 'c36', name: 'Navy', hex: '#1e3a5f' },
      { id: 'c37', name: 'Forest', hex: '#228b22' }
    ],
    isNew: false,
    isBestSeller: true,
    stock: 33,
    images: [
      { id: 'i15', url: '/products/northline-pack-1.svg', alt: 'Northline Backpack in Black' }
    ],
    tags: ['backpack', 'commute', 'laptop', 'everyday'],
    createdAt: '2023-04-15'
  },
  {
    id: '14',
    slug: 'commute-tote',
    name: 'Commute Tote',
    category: 'Bags and Carry',
    categorySlug: 'bags-and-carry',
    price: 125,
    compareAtPrice: 150,
    rating: 4.7,
    reviewCount: 89,
    description: 'A structured canvas tote with interior organization and zip closure.',
    longDescription: 'The Commute Tote elevates the everyday carry. Heavy canvas provides structure and durability, while the interior organization keeps essentials sorted. A secure zip top and reinforced handles handle daily demands with quiet confidence.',
    features: ['Zip closure', 'Interior pockets', 'Padded laptop sleeve', 'Reinforced handles', 'Removable crossbody strap'],
    materials: ['Heavy cotton canvas', 'Full-grain leather trim', 'Cotton twill lining'],
    colors: [
      { id: 'c38', name: 'Natural', hex: '#d4b896' },
      { id: 'c39', name: 'Charcoal', hex: '#36454f' }
    ],
    isNew: false,
    isBestSeller: false,
    stock: 47,
    images: [
      { id: 'i16', url: '/products/commute-tote-1.svg', alt: 'Commute Tote in Natural' }
    ],
    tags: ['tote', 'commute', 'canvas', 'everyday'],
    createdAt: '2023-08-20'
  },
  // Everyday Tools
  {
    id: '15',
    slug: 'precision-pen-set',
    name: 'Precision Pen Set',
    category: 'Everyday Tools',
    categorySlug: 'everyday-tools',
    price: 42,
    rating: 4.8,
    reviewCount: 156,
    description: 'A set of three refillable pens in brass, stainless steel, and matte black.',
    longDescription: 'The Precision Pen Set brings intention to everyday writing. Three distinct finishes—unlacquered brass, brushed stainless steel, and matte black—share the same balanced weight and smooth German mechanism. Refillable for years of use.',
    features: ['German mechanism', 'Refillable design', 'Three finishes', 'Presentation box', 'Compatible with standard refills'],
    materials: ['Solid brass', 'Stainless steel', 'Matte coating'],
    colors: [
      { id: 'c40', name: 'Mixed Set', hex: '#8b8680' }
    ],
    isNew: true,
    isBestSeller: false,
    stock: 72,
    images: [
      { id: 'i17', url: '/products/pen-set-1.svg', alt: 'Precision Pen Set' }
    ],
    tags: ['pens', 'writing', 'tools', 'gift'],
    createdAt: '2024-01-25'
  },
  {
    id: '16',
    slug: 'everyday-carry-knife',
    name: 'Everyday Carry Knife',
    category: 'Everyday Tools',
    categorySlug: 'everyday-tools',
    price: 88,
    rating: 4.6,
    reviewCount: 98,
    description: 'A slim folding knife with wooden handle scales and premium steel blade.',
    longDescription: 'The Everyday Carry Knife brings craft to a daily tool. Premium Sandvik steel holds a razor edge, while walnut handle scales provide comfortable grip and warm aesthetics. The slim profile disappears in a pocket until needed.',
    features: ['Sandvik 14C28N steel', 'Walnut handle scales', 'Liner lock', 'Deep carry clip', 'Lanyard hole'],
    materials: ['Sandvik steel', 'Walnut wood', 'Stainless steel hardware'],
    colors: [
      { id: 'c41', name: 'Walnut', hex: '#5d432c' }
    ],
    isNew: false,
    isBestSeller: false,
    stock: 29,
    images: [
      { id: 'i18', url: '/products/edc-knife-1.svg', alt: 'Everyday Carry Knife in Walnut' }
    ],
    tags: ['knife', 'EDC', 'tool', 'wood'],
    createdAt: '2023-03-10'
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(p => p.categorySlug === categorySlug);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.isNew);
};

export const getBestSellers = (): Product[] => {
  return products.filter(p => p.isBestSeller);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 6);
};

export const getRelatedProducts = (productId: string, limit = 4): Product[] => {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  return products
    .filter(p => p.id !== productId && p.categorySlug === product.categorySlug)
    .slice(0, limit);
};
