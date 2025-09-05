import { Product, NewsItem } from '../types';

export const featuredProduct: Product = {
  id: "leather-jacket-001",
  title: "Featured: Vintage Leather Jackets Collection",
  description: "Discover our exclusive collection of vintage leather jackets, carefully curated from the finest materials and timeless designs. Each piece tells a story of craftsmanship and style that transcends generations. From classic motorcycle jackets to sophisticated blazers, our collection offers premium quality at unbeatable prices. Limited quantities available - shop now to secure your perfect vintage piece.",
  price: 299.99,
  originalPrice: 449.99,
  discount: 33,
  imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  imageAlt: "Vintage Brown Leather Jacket",
  isOnSale: true,
  badge: "SALE"
};

export const promotionalItems: NewsItem[] = [
  {
    title: "Flash Sale: Designer Denim Collection",
    description: "Up to 50% off premium jeans and jackets",
    author: "Limited Time Offer"
  },
  {
    title: "Spring Collection 2024",
    description: "Discover lightweight fabrics and vibrant colors"
  }
];

export const styleNews: NewsItem[] = [
  {
    title: "How to style vintage pieces for modern looks",
    href: "#"
  },
  {
    title: "Sustainable fashion: Why vintage is trending",
    href: "#"
  },
  {
    title: "Celebrity spotted in our vintage collection",
    href: "#"
  }
];
