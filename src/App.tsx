import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CategoriesSidebar from './components/sections/CategoriesSidebar';
import FeaturedProduct from './components/sections/FeaturedProduct';
import PromotionsSidebar from './components/sections/PromotionsSidebar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Main Container */}
      <div className="brand-container">
        <Header />
        
        {/* Three Column Layout */}
        <div className="flex p-4">
          <CategoriesSidebar />
          <FeaturedProduct />
          <PromotionsSidebar />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
