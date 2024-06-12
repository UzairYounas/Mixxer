import React from "react";
import Navbar from "../components/common/Navbar";

import appstore from "../assets/Images/appstore.png";
import playstore from "../assets/Images/playstore.png";
import homeimg from '../assets/Images/bg.svg'

function Home() {
  return (
    <div className="home-bg">
      <div className="container">
        <div className="d-flex flex-column gap-4 text-white" style={{paddingTop: '162px', paddingBottom: '320px'}}>
          <h1>Ready to amplify your social life?</h1>
          <p className="mb-0">
            Experience the next level of social networking with Mixxer. <br />
            Download Mixxer now and let the adventure begin!
          </p>
          <button className="p-2 mb-3">Download the app</button>
          <div className="d-flex flex-column gap-2">
            <img src={playstore} />
            <img src={appstore} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// style={{marginTop: '90px', paddingBottom: '150px'}}