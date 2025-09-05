import React from 'react'
import './TopNavigation.css'

interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

const topNavItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Admissions & Financial Aid', href: '/admissions/' },
  { label: 'Employment', href: 'http://atwork.harvard.edu/', external: true },
  { label: 'Libraries', href: 'http://lib.harvard.edu/', external: true },
  { label: 'Museums', href: '/museums/' },
  { label: 'Arts', href: '/arts/' },
]

const TopNavigation: React.FC = () => {
  return (
    <nav className="top-navigation">
      <ul className="nav-list">
        {topNavItems.map((item, index) => (
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
    </nav>
  )
}

export default TopNavigation
