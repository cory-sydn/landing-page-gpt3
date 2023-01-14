import React from 'react';
import './footer.css';
import logo from '../../assets/GPT-3.png';

const footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading section__padding">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button href="#">Request Early Access</button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_heading">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
         <div className="gpt3__footer-links-container">
           <div>
              <h4>Links</h4>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
           </div>
           <div>
             <h4>Company</h4>
             <p>Terms & Conditions</p>
             <p>Privacy Policy</p>
             <p>Contact</p>
           </div>
           <div>
             <h4>Get in touch</h4>
             <p>Crechterwoord K12 182 DK Alknjkcb</p>
             <p>085-132567</p>
             <p>info@payme.net</p>
           </div>
         </div>
      </div>
      <div className='gpt3__footer-links-container_legality'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
      
  )
}

export default footer