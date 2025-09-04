import React from 'react'
import QuickLinks from '../../ui/QuickLinks/QuickLinks'
import './SchoolsSection.css'

interface School {
  name: string
  href: string
}

const leftColumnSchools: School[] = [
  { name: 'College/Graduate', href: 'http://www.fas.harvard.edu/' },
  { name: 'Business', href: 'http://www.hbs.edu/' },
  { name: 'Continuing Education', href: 'http://www.dce.harvard.edu/' },
  { name: 'Design', href: 'http://www.gsd.harvard.edu/' },
  { name: 'Divinity', href: 'http://www.hds.harvard.edu/' },
  { name: 'Education', href: 'http://www.gse.harvard.edu/' },
]

const rightColumnSchools: School[] = [
  { name: 'Government', href: 'http://www.ksg.harvard.edu/' },
  { name: 'Law', href: 'http://www.law.harvard.edu/' },
  { name: 'Dental', href: 'http://www.hsdm.harvard.edu/' },
  { name: 'Medical', href: 'http://www.hms.harvard.edu/' },
  { name: 'Public Health', href: 'http://www.hsph.harvard.edu/' },
  { name: 'Radcliffe Institute', href: 'http://www.radcliffe.edu/' },
]

const SchoolsSection: React.FC = () => {
  return (
    <div className="schools-section">
      <h2 className="section-title">SCHOOLS OF HARVARD</h2>
      
      <div className="schools-grid">
        <div className="schools-column">
          {leftColumnSchools.map((school) => (
            <div key={school.href} className="school-item">
              <a href={school.href} target="_blank" rel="noopener noreferrer" className="school-link">
                {school.name}
              </a>
            </div>
          ))}
        </div>
        
        <div className="schools-column">
          {rightColumnSchools.map((school) => (
            <div key={school.href} className="school-item">
              <a href={school.href} target="_blank" rel="noopener noreferrer" className="school-link">
                {school.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <QuickLinks />
    </div>
  )
}

export default SchoolsSection
