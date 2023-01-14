import React from 'react';
import './brand.css';
import {google, slack, dropbox, atlassian, shopify} from '../../components/brand/import.js'

const brand = () => {
  return (
    <div className='gpt3__brands'>
      <img src={google} alt="" />
      <img src={slack} alt="" />
      <img src={dropbox} alt="" />
      <img src={atlassian} alt="" />
      <img src={shopify} alt="" />
    </div>
  )
}

export default brand