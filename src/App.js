import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/Style.css';
import './assets/css/Responsive.css'

import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Essential from './pages/Essential';
import Explore from './pages/Explore';
import Discover from './pages/Discover';
import Started from './pages/Started';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Footer from '../src/components/common/Footer';

function App() {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

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
      <Footer />
    </div>
  );
}

export default App;
