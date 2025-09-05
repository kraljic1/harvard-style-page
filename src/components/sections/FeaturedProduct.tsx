import React from 'react';
import { featuredProduct } from '../../data/products';

const FeaturedProduct: React.FC = () => {
  const { title, description, price, originalPrice, discount, imageUrl, imageAlt, badge } = featuredProduct;

  return (
    <main className="w-1/2 px-4">
      <article>
        <h1 className="font-serif text-xl font-bold mb-2 text-gray-900">
          {title}
        </h1>
        <p className="text-xs text-gray-600 mb-4">New Arrival - Limited Stock</p>
        
        {/* Product Image */}
        <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg shadow-lg">
          <img 
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          {badge && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
              {badge}
            </div>
          )}
        </div>
        
        <p className="text-sm leading-relaxed text-gray-800 mb-4">
          {description}
        </p>
        
        {/* Pricing */}
        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          {discount && (
            <span className="bg-red-100 text-red-800 px-2 py-1 text-xs font-bold rounded">
              {discount}% OFF
            </span>
          )}
        </div>
      </article>
    </main>
  );
};

export default FeaturedProduct;
