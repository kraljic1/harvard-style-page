import React from 'react'
import FeaturedSection from '../../sections/FeaturedSection/FeaturedSection'
import SchoolsSection from '../../sections/SchoolsSection/SchoolsSection'
import NewsSection from '../../sections/NewsSection/NewsSection'
import BottomNavigation from '../../ui/BottomNavigation/BottomNavigation'
import './MainContent.css'

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <div className="content-container">
        <div className="content-layout">
          <div className="main-column">
            <FeaturedSection />
          </div>
          <div className="news-column">
            <NewsSection />
          </div>
          <div className="sidebar-column">
            <SchoolsSection />
          </div>
        </div>
      </div>
      <BottomNavigation />
    </main>
  )
}

export default MainContent
