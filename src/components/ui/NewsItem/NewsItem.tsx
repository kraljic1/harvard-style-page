import React from 'react'
import './NewsItem.css'

interface NewsItemProps {
  date: string
  title: string
  subtitle: string
  href: string
  imageUrl?: string
  imagePeople?: string[]
}

const NewsItem: React.FC<NewsItemProps> = ({ 
  date, 
  title, 
  subtitle, 
  href, 
  imageUrl, 
  imagePeople 
}) => {
  return (
    <article className="news-item">
      <div className="news-content">
        {date && <div className="news-date">{date}</div>}
        <h3 className="news-title">
          <strong>{title}</strong>
        </h3>
        <p className="news-subtitle">{subtitle}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="news-more-link">
          <strong>More</strong>
        </a>
      </div>
      
      {imageUrl && (
        <div className="news-image-container">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img 
              src={imageUrl} 
              alt={imagePeople ? imagePeople.join(' and ') : title}
              className="news-image"
            />
          </a>
          {imagePeople && (
            <div className="image-caption">
              <a href={href} target="_blank" rel="noopener noreferrer" className="caption-link">
                {imagePeople.join(' and ')}
              </a>
            </div>
          )}
        </div>
      )}
    </article>
  )
}

export default NewsItem
