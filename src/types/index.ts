export interface Category {
  name: string;
  emoji: string;
  href?: string;
}

export interface NewsItem {
  title: string;
  description?: string;
  author?: string;
  href?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  imageUrl: string;
  imageAlt: string;
  isOnSale?: boolean;
  badge?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}
