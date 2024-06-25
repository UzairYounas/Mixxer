import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/Style.css';
import './assets/css/Responsive.css'
import './assets/css/FeatureResponsive.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
