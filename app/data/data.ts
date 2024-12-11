export const categories = [
  { id: 'smoothies', name: 'Smoothies' },
  { id: 'juices', name: 'Fresh Juices' },
  { id: 'bowls', name: 'Açaí Bowls' },
  { id: 'boosters', name: 'Wellness Boosters' },
  { id: 'desserts', name: 'Healthy Desserts' },
];

export const menuItems = [
  {
    id: 1,
    name: 'Mango Tango Bliss',
    description: 'A tropical symphony of fresh mangoes, pineapple, and a hint of lime',
    price: 'MK 7,990',
    category: 'smoothies',
    nutrition: {
      calories: 280,
      protein: '4g',
      fat: '1g',
      carbs: '65g',
    },
    image: '/images/pic1.jpg',
  },
  {
    id: 2,
    name: 'Green Goddess Elixir',
    description: 'A refreshing blend of kale, cucumber, green apple, and lemon',
    price: 'MK 6,990',
    category: 'juices',
    nutrition: {
      calories: 120,
      protein: '2g',
      fat: '0.5g',
      carbs: '28g',
    },
    image: '/images/pic2.jpg',
  },
  {
    id: 3,
    name: 'Berry Blast Bowl',
    description: 'Açaí base topped with mixed berries, granola, and honey',
    price: 'MK 9,990',
    category: 'bowls',
    nutrition: {
      calories: 420,
      protein: '8g',
      fat: '14g',
      carbs: '68g',
    },
    image: '/images/pic3.jpg',
  },
  {
    id: 4,
    name: 'Immunity Booster Shot',
    description: 'Concentrated blend of ginger, turmeric, lemon, and cayenne',
    price: 'MK 4,990',
    category: 'boosters',
    nutrition: {
      calories: 30,
      protein: '1g',
      fat: '0g',
      carbs: '7g',
    },
    image: '/images/pic4.jpg',
  },
  {
    id: 5,
    name: 'Chocolate Avocado Mousse',
    description: 'Rich, creamy dessert made with avocado, cacao, and natural sweeteners',
    price: 'MK 6,990',
    category: 'desserts',
    nutrition: {
      calories: 220,
      protein: '4g',
      fat: '16g',
      carbs: '22g',
    },
    image: '/images/pic5.jpg',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah L.',
    location: 'Blantyre, Malawi',
    comment: 'The Mango Tango Bliss smoothie is out of this world! It\'s my go-to treat after yoga.',
    image: '/images/mango-talaatmw.jpg',
  },
  {
    id: 2,
    name: 'Mike R.',
    location: 'Lilongwe, Malawi',
    comment: 'I love the variety of healthy options. The Immunity Booster Shot really helps me power through my workdays!',
    image: '/images/mango-talaatmw.jpg',
  },
  {
    id: 3,
    name: 'Emily T.',
    location: 'Zomba, Malawi',
    comment: 'The açaí bowls are simply amazing. Fresh, delicious, and so Instagram-worthy!',
    image: '/images/mango-talaatmw.jpg',
  },
];

export const storeInfo = {
  name: 'Mango Taalat Mw',
  address: 'Mango Taalat Mw, Blantyre, Malawi',
  phone: '+265 1234 5678',
  email: 'info@mangotaalatmw.com',
  hours: {
    monday: '7:00 AM - 8:00 PM',
    tuesday: '7:00 AM - 8:00 PM',
    wednesday: '7:00 AM - 8:00 PM',
    thursday: '7:00 AM - 8:00 PM',
    friday: '7:00 AM - 9:00 PM',
    saturday: '8:00 AM - 9:00 PM',
    sunday: '8:00 AM - 7:00 PM',
  },
  socialMedia: {
    instagram: 'https://www.instagram.com/mangotaalatmw',
    facebook: 'https://www.facebook.com/mangotaalatmw',
    twitter: 'https://www.twitter.com/mangotaalatmw',
  },
};


export const featuredProducts = [
  {
    id: 1,
    name: 'Super Green Detox Smoothie',
    description: 'A powerful blend of kale, spinach, apple, and ginger to kickstart your day.',
    price: 'MK 8,990',
    image: '/images/pic6.jpg',
    nutrition: {
      calories: 180,
      protein: '5g',
      fat: '2g',
      carbs: '35g',
    },
  },
  {
    id: 2,
    name: 'Tropical Paradise Bowl',
    description: 'Açaí base topped with mango, pineapple, coconut flakes, and chia seeds.',
    price: 'MK 11,990',
    image: '/images/pic7.jpg',
    nutrition: {
      calories: 320,
      protein: '8g',
      fat: '12g',
      carbs: '52g',
    },
  },
  {
    id: 3,
    name: 'Immunity Booster Juice',
    description: 'Fresh orange juice infused with turmeric, ginger, and a hint of black pepper.',
    price: 'MK 7,990',
    image: '/images/pic8.jpg',
    nutrition: {
      calories: 120,
      protein: '2g',
      fat: '0.5g',
      carbs: '28g',
    },
  },
];
