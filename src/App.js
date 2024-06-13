import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/Style.css';
import './assets/css/Responsive.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Navbar from './components/common/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Essential from './pages/Essential';
// import Explore from './pages/Explore';
// import Discover from './pages/Discover';
// import Started from './pages/Started';
// import FAQ from './pages/FAQ';
// import Contact from './pages/Contact';
// import Footer from '../src/components/common/Footer';
import Main from './pages/Main';
import TermsTab from './components/TermsTab'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/terms",
    element: <TermsTab />,
  },

]);

function App() {

  return (
    <RouterProvider router ={router} />
  );
}

export default App;
