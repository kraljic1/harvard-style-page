import React from 'react'
import './FeaturedSection.css'

const FeaturedSection: React.FC = () => {
  return (
    <section className="featured-section">
      <h2 className="featured-title">The promise of stem cells</h2>
      
      <div className="featured-content-layout">
        <div className="featured-image-container">
          <img 
            src="/images/stem-cell-research.jpg" 
            alt="In a Harvard laboratory, mouse embryotic stem cell colonies are placed onto microdroplets to be arrayed on feeding plates" 
            className="featured-image"
          />
        </div>
        
        <div className="featured-content">
          <p className="featured-description">
            In a Harvard laboratory, mouse embryotic stem cell colonies are placed onto microdroplets 
            to be arrayed on feeding plates. The{' '}
            <a href="http://www.stemcell.harvard.edu/" target="_blank" rel="noopener noreferrer">
              Harvard Stem Cell Institute
            </a>{' '}
            was established in April 2004 with a mission to advance the science of stem cells from 
            the laboratory to clinical applications. To achieve this goal, HSCI will support research 
            into all aspects of stem cell biology, with special emphasis on those areas with the 
            greatest potential for improving human health.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
