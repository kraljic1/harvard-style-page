import React from 'react'
import HarvardShield from '../../ui/HarvardShield/HarvardShield'
import TopNavigation from '../../ui/TopNavigation/TopNavigation'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-row">
          <HarvardShield />
          <TopNavigation />
        </div>
      </div>
    </header>
  )
}

export default Header
