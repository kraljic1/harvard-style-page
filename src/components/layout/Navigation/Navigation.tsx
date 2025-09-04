import React from 'react'
import './Navigation.css'

interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

const secondaryNavItems: NavigationItem[] = [
  { label: 'President', href: 'http://www.president.harvard.edu/', external: true },
  { label: 'Administration', href: '/administration/' },
  { label: 'Schools', href: '/academics/' },
  { label: 'Neighbors & Visitors', href: '/community/' },
  { label: 'Athletics', href: 'http://gocrimson.ocsn.com/', external: true },
  { label: 'Alumni', href: 'http://www.haa.harvard.edu/', external: true },
  { label: 'Search', href: 'http://search.harvard.edu:8765/', external: true },
]

const Navigation: React.FC = () => {
  return (
    <nav className="secondary-navigation">
      <div className="nav-container">
        <ul className="nav-list">
          {secondaryNavItems.map((item, index) => (
            <li key={item.href} className="nav-item">
              {index > 0 && <span className="nav-bullet">•</span>}
              <a 
                href={item.href} 
                className="nav-link"
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
