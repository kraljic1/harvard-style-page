import React from 'react'
import './BottomNavigation.css'

interface BottomNavItem {
  icon: string
  label: string
  href: string
}

const bottomNavItems: BottomNavItem[] = [
  { icon: '📅', label: 'Events', href: 'http://www.news.harvard.edu/gazette/calendar/' },
  { icon: '🔬', label: 'Research', href: 'http://www.researchmatters.harvard.edu/' },
  { icon: '📷', label: 'Multimedia', href: 'http://www.hno.harvard.edu/multimedia/' },
]

const BottomNavigation: React.FC = () => {
  return (
    <nav className="bottom-navigation">
      <div className="bottom-nav-container">
        <ul className="bottom-nav-list">
          {bottomNavItems.map((item, index) => (
            <li key={item.href} className="bottom-nav-item">
              <a 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bottom-nav-link"
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default BottomNavigation
