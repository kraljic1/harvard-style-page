import React from 'react'
import './HarvardShield.css'

const HarvardShield: React.FC = () => {
  return (
    <div className="harvard-shield">
      <a href="/" className="shield-link">
        <img 
          src="/images/harvard-shield.svg" 
          alt="Harvard University shield with Veritas motto" 
          className="shield-image"
        />
        <span className="university-name">Harvard University</span>
      </a>
    </div>
  )
}

export default HarvardShield
