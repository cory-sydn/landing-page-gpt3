import React from 'react';
import './header.css';
import { useState } from 'react';
import Group from '../../assets/Group 81.png';
import Head from "../../assets/Illustration.svg";
import Active from '../../assets/Active.png';


const Header = () => {
  // const [ isShown, setIsShown ] = useState(false);

  return (
    <div className='gpt3__header section_padding' id='home'>

      <div className='gpt3__header-content split'>
        <h1 className="gradient__text">Let's Build Something Amazing With GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content_input'>
          <input type="email" placeholder='Your Email Adress'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content_people'>
          <img src={Group} alt="photos of some fraction of our clients"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>        
      </div>

      <div className='gpt3__header-content_img split'>
        <img src={Head} alt="gpt3 illustration"/>
    
      {/*          
      <Head 
      onMouseEvent={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}  />       
        { isShown && (
            <Active/>
          )} */}

      </div>
     
    </div>
  );
};

export default Header;