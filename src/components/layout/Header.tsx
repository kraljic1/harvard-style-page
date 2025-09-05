import React from 'react';
import { mainNavigation } from '../../data/navigation';

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Brand Logo and Title */}
      <div className="bg-brand-red text-white p-4">
        <div className="flex items-center">
          <div className="bg-white text-red-800 px-3 py-2 mr-4 font-bold border-2 border-white">
            VT Logo
          </div>
          <h1 className="font-serif text-2xl font-bold">Vintage Threads</h1>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="nav-gradient py-2">
        <div className="text-center">
          {mainNavigation.map((item, index) => (
            <React.Fragment key={item.label}>
              <a href={item.href} className="link-red mx-2 text-sm font-medium">
                {item.label}
              </a>
              {index < mainNavigation.length - 1 && (
                <span className="text-gray-600">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
