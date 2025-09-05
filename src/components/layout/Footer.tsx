import React from 'react';
import { footerNavigation } from '../../data/navigation';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-8">
      {/* Footer Navigation */}
      <div className="bg-brand-red text-white py-2">
        <div className="text-center">
          {footerNavigation.map((item, index) => (
            <React.Fragment key={item.label}>
              <a href={item.href} className="text-white mx-2 text-xs hover:underline">
                {item.label}
              </a>
              {index < footerNavigation.length - 1 && (
                <span className="text-red-200">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-vintage-beige py-3">
        <p className="text-center text-xs text-gray-700 mb-2">
          Copyright © 2024 Vintage Threads Premium Clothing Store
        </p>
        <div className="text-center">
          <a href="#" className="link-red text-xs hover:underline mx-2">
            Terms & Conditions
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="link-red text-xs hover:underline mx-2">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
