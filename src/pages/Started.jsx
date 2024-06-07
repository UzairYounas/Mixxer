import React from "react";

import playstore from "../assets/Images/playstore.png";
import appstore from "../assets/Images/appstore.png";

import starter from "../assets/Images/starter.png";

function Started() {
  return (
    <div className="container start-bg">
      <div className="row">
        <div className="col-md-6">
          <img src={starter} className="w-100" />
        </div>

        <div className="col-md-6 d-flex flex-column  justify-content-center">
          <div className="d-flex flex-column justify-content-center gap-3">
            <h3>Get Started with MIXXER</h3>
            <h5 style={{paddingRight: '150px'}}>
              Create, Discover, and Join
              <span> Mixxer. Download Mixxer Now To Get Started!</span>
            </h5>
          </div>
          <div className="d-flex gap-3" style={{marginTop: '110px'}}>
            <img src={playstore} style={{ width: "180px" }} />
            <img src={appstore} style={{ width: "180px" }} />
          </div>
          <p>*our app is the perfect solution for boosting your productivity</p>
        </div>
      </div>
    </div>
  );
}

export default Started;
