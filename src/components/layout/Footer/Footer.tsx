import React from 'react'
import './Footer.css'

interface FooterLink {
  label: string
  href: string
}

const footerLinks: FooterLink[] = [
  { label: 'About Harvard', href: '/about/' },
  { label: 'Directories', href: '/directories/' },
  { label: 'Contact Us', href: '/siteguide/email/' },
  { label: 'Info Tech', href: '/infotech/' },
  { label: 'News', href: 'http://www.hno.harvard.edu/' },
  { label: 'Site Guide', href: '/siteguide/' },
]

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <ul className="footer-links">
            {footerLinks.map((link, index) => (
              <li key={link.href} className="footer-link-item">
                {index > 0 && <span className="footer-bullet">•</span>}
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="footer-copyright">
          <p>
            Copyright © 2005 The President and Fellows of Harvard College
          </p>
          <p>
            <a href="/siteguide/copyright.html" className="footer-link">
              Reporting copyright infringements
            </a>
            {' • '}
            <a href="/siteguide/privacy.html" className="footer-link">
              Privacy statement
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
