import React from 'react'
import './NewsSection.css'

const NewsSection: React.FC = () => {
  return (
    <section className="news-section">
      <div className="news-date">June 30, 2005</div>
      <hr className="news-divider" />
      
      <div className="news-item">
        <div className="news-content">
          <h3 className="news-title">
            <strong>Jay Light named acting dean of Harvard Business School</strong>
          </h3>
          <p className="news-subtitle">Faculty advisory group formed for dean search</p>
          <a href="http://www.news.harvard.edu/gazette/daily/2005/06/30-hbsdean.html" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="news-more-link">
            <strong>More</strong>
          </a>
        </div>
        <div className="news-photo">
          <img src="/images/jay-light.jpg" alt="Jay O. Light" className="news-image" />
          <div className="photo-caption">
            <a href="http://www.news.harvard.edu/gazette/daily/2005/06/30-hbsdean.html" 
               target="_blank" 
               rel="noopener noreferrer">
              Jay O. Light
            </a>
          </div>
        </div>
      </div>

      <div className="news-item">
        <div className="news-content">
          <h3 className="news-title">
            <strong>New route to cell death found</strong>
          </h3>
          <p className="news-subtitle">Could be involved in stroke and Alzheimer's</p>
          <a href="http://www.news.harvard.edu/gazette/daily/2005/06/30-celldeath.html" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="news-more-link">
            <strong>More</strong>
          </a>
        </div>
        <div className="news-photo">
          <img src="/images/cell-death-researchers.jpg" alt="Junying Yuan and Alexei Degterev" className="news-image" />
          <div className="photo-caption">
            <a href="http://www.news.harvard.edu/gazette/daily/2005/06/30-celldeath.html" 
               target="_blank" 
               rel="noopener noreferrer">
              Junying Yuan and Alexei Degterev
            </a>
          </div>
        </div>
      </div>

      <div className="other-news-section">
        <h3 className="other-news-title">In Other News</h3>
        
        <div className="other-news-item">
          <a href="http://www.news.harvard.edu/gazette/daily/2005/06/29-native.html" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="other-news-link">
            Introducing Native American teens to college admissions
          </a>
        </div>
        
        <div className="other-news-item">
          <a href="http://www.bidmc.harvard.edu/?node_id=1000&mainFrameSrc=/tools/newsnow/pr_out.asp?pr_id=726" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="other-news-link">
            Study shows how sleep improves memory
          </a>
        </div>
        
        <div className="other-news-item">
          <a href="http://www.ksg.harvard.edu/ksgnews/Features/news/062405_vnpm.htm" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="other-news-link">
            Improving higher education in Vietnam
          </a>
        </div>

        <div className="news-footer">
          <a href="http://www.news.harvard.edu/gazette/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="gazette-link">
            <strong>HARVARD GAZETTE</strong>
          </a>
          <span className="divider"> | </span>
          <a href="/news/" className="headlines-link">
            <strong>RECENT HEADLINES</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
