import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGpt3 } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
     
        <Navbar />
        <Header />
      
        <Brand />
        <WhatGpt3 />
        <Features />  
        <Possibility />
        <CTA />
        <Blog /> 
        <Footer />
    </div>
  )
}

export default App