import React from "react";

import essential from "../assets/Images/essential.png";
import { FaCheck } from "react-icons/fa6";

function Essential() {
  const items = [
    {
      title: "Personalized Outings:",
      description:
        "Tailor one-on-one or small group outings to your unique interests and schedule. From spontaneous coffee dates to planned weekend hikes, Mixxer ensures every outing is meaningful and enjoyable.",
    },
    {
      title: "Interest-Based connections:",
      description:
        "Facilitate platonic relationships across genders by connecting with individuals who share your passions. Mixxer's advanced matching algorithm helps you find like-minded people, making it easier to form deep, meaningful friendships.",
    },
    {
      title: "Effortless coordination:",
      description:
        "Eliminate group chat confusion. Mixxer simplifies organizing get-togethers, ensuring everyone is on the same page. Focus on having fun while we handle the logistics.",
    },
    {
      title: "Cost-Effective Experience:",
      description:
        "Enjoy Mixxer without hidden fees or high subscription costs. Our affordable solution makes it easy to maintain an active social life without financial strain.",
    },
    {
      title: "Community-driven Features:",
      description:
        "Benefit from features developed based on user feedback. Mixxer listens to its community, ensuring a continually improving experience tailored to your socializing needs.",
    },
  ];

  return (
    <div>
      <div className="container" style={{marginTop: '80px', marginBottom: '80px'}}>
        <div className="row essen">
          <div className="col-md-6">
            <img src={essential} style={{width: '90%'}}/>
          </div>
          <div className="col-md-6 mt-lg-none mt-md-none mt-sm-5 mt-5">
            <h1 className="mb-5">
              Seamless Socializing, Unforgettable Experiences
            </h1>

            {items.map((val, index) => (
              <div className="d-flex gap-3 mb-4">
                <FaCheck style={{ color: "#988265", fontSize: '24px', width: '60px' }} />
                <div className="d-flex flex-column">
                  <h5>{val.title}</h5>
                  <p className="mb-0">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Essential;
