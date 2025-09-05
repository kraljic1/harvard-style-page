import React from 'react';
import { categories } from '../../data/categories';

const CategoriesSidebar: React.FC = () => {
  return (
    <aside className="w-1/5 pr-4">
      <div className="sidebar-box">
        <h3 className="font-serif font-bold text-sm mb-3 text-gray-800">
          Shop Categories
        </h3>
        <ul className="space-y-1">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-xs">{category.emoji}</span>
              <a 
                href={category.href || "#"} 
                className="link-red text-xs hover:underline block py-1"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CategoriesSidebar;
