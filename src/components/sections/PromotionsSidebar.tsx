import React from 'react';
import { promotionalItems, styleNews } from '../../data/products';

const PromotionsSidebar: React.FC = () => {
  return (
    <aside className="w-3/10 pl-4">
      <div className="space-y-4">
        {/* Flash Sale Box */}
        <div className="sidebar-box">
          <div className="w-full h-20 mb-2 overflow-hidden rounded">
            <img 
              src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Designer Denim Jeans" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-serif font-bold text-sm mb-2 text-gray-800">
            {promotionalItems[0].title}
          </h3>
          <p className="text-xs text-gray-700 mb-2">
            {promotionalItems[0].description}
          </p>
          <a href="#" className="link-red text-xs hover:underline">Shop Now</a>
          <p className="text-xs text-gray-600 mt-2 italic">
            {promotionalItems[0].author}
          </p>
        </div>

        {/* New Arrivals Box */}
        <div className="sidebar-box">
          <div className="w-full h-20 mb-2 overflow-hidden rounded">
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Spring Fashion Collection" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-serif font-bold text-sm mb-2 text-gray-800">
            {promotionalItems[1].title}
          </h3>
          <h4 className="font-bold text-xs mb-2 text-gray-800">
            Fresh styles for the season
          </h4>
          <p className="text-xs text-gray-700 mb-2">
            {promotionalItems[1].description}
          </p>
          <a href="#" className="link-red text-xs hover:underline">Explore</a>
        </div>

        {/* Style News Box */}
        <div className="sidebar-box">
          <h3 className="font-serif font-bold text-sm mb-3 text-gray-800">
            Style News
          </h3>
          <ul className="space-y-2">
            {styleNews.map((news, index) => (
              <li key={index}>
                <a href={news.href} className="link-red text-xs hover:underline">
                  {news.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Label */}
        <div className="text-center mt-4">
          <p className="text-xs font-bold text-gray-700">
            VINTAGE THREADS | STYLE UPDATES
          </p>
        </div>
      </div>
    </aside>
  );
};

export default PromotionsSidebar;
