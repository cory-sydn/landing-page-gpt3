import React from 'react'
import Article from '../../components/article/Article'
import './blog.css';
import {firstimg, secondsimg, thirdimg, fourthimg, fifthimg} from '../../containers/blog/import.js';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className='gpt3__blog-container_groupA'>
          <Article image={fifthimg} date="Sep 16, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__container-groupB">
          <div>
            <Article image={secondsimg} date="Sep 16, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
          <div>
            <Article image={thirdimg} date="Sep 16, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
          <div>
            <Article image={fourthimg} date="Sep 16, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
          <div>
            <Article image={firstimg} date="Sep 16, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Blog