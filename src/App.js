import React from 'react'
import './App.css'
import { Article, Brand, CTA, Navbar, Feature, Featureh2 } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App