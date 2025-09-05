import React from 'react'
import './QuickLinks.css'

interface QuickLink {
  title: string
  subtitle: string
  href: string
}

const quickLinks: QuickLink[] = [
  {
    title: 'Events',
    subtitle: 'Events',
    href: 'http://www.news.harvard.edu/gazette/calendar/'
  },
  {
    title: 'Research Matters',
    subtitle: 'Research',
    href: 'http://www.researchmatters.harvard.edu/'
  },
  {
    title: 'Media gallery',
    subtitle: 'Multimedia',
    href: 'http://www.hno.harvard.edu/multimedia/'
  }
]

const QuickLinks: React.FC = () => {
  return (
    <div className="quick-links">
      {quickLinks.map((link) => (
        <div key={link.href} className="quick-link-item">
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="quick-link">
            {link.title}
          </a>
          <br />
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="quick-link-subtitle">
            <strong>{link.subtitle}</strong>
          </a>
        </div>
      ))}
    </div>
  )
}

export default QuickLinks
