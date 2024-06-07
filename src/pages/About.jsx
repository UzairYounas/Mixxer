import React from "react";

import abimg1 from "../assets/Images/about-img1.png";
import abimg2 from "../assets/Images/about-img2.png";
import abimg3 from "../assets/Images/about-img3.png";
import abimg4 from "../assets/Images/about-img4.png";

function About() {
  return (
    <div className="about-bg">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-5">
            <div className="mt-4">
              <img src={abimg1} className="w-100" />
              <div className="d-flex flex-column gap-3 mt-3">
                <h3>About</h3>
                <p className="mb-0" style={{paddingRight: '70px'}}>
                  Mixxer is a vibrant social app designed to enhance your social
                  life by making it easy to plan and organize one-on-one and
                  small group outings with friends or new acquaintances. Founded
                  by the dynamic husband and wife duo, Dallas and Charity Locke,
                  Mixxer is based in the heart of Houston, Texas. Dallas brings
                  his expertise in automation engineering, while Charity's
                  background in Marketing Analytics adds a strategic edge to the
                  company.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="d-flex justify-content-center mb-5">
                <img src={abimg2} style={{width: '480px'}}/>
            </div>
            <div className="d-flex gap-3 mt-5">
              <img src={abimg3} style={{width: '350px'}}/>
              <img src={abimg4} style={{width: '350px'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
