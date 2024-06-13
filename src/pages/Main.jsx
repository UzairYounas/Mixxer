import React from 'react'

import Navbar from '../components/common/Navbar';
import Home from './Home';
import About from './About';
import Essential from './Essential';
import Explore from './Explore';
import Discover from './Discover';
import Started from './Started';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from '../components/common/Footer';

function Main({setToggleState}) {
    const handleScroll = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <div>
      <Navbar handleScroll={handleScroll} />
      <div id="home">
        <Home />
      </div>
      
      <div id="about">
        <About />
      </div>
        <Essential />
        <div id="feature">
        <Explore />
      </div>
        <Discover />
        <Started />
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer setToggleState={setToggleState}  />
    </div>
  )
}

export default Main;
