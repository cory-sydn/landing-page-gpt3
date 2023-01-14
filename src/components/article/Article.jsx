import React from 'react';
import './article.css';

const Article = ({date, image, title}) => {
  return (
    <div className='gpt3__article-container'>
      <div className="gpt3__article-container_image">
        <img src={image} alt="blog"/>
      </div>
        <div className="gpt3__article-text">          
          <p>{date}</p>
          <div className="gpt3__article-container_title">
            <h1>{title}</h1>
          </div>
          <p>Read Full Article</p>
        </div>
    </div>
  )
};

export default Article