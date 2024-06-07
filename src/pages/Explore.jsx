import React from "react";

import exportphone from "../assets/Images/explore-phone.png";

function Explore() {
  return (
    <div className="explore-bg">
      <div className="p-5 position-relative">
        <h1>Mixxer Essentials:</h1>
        <h1>Explore and Join the Fun</h1>
        <img
          src={exportphone}
          className="mx-auto d-block"
          style={{ width: "80%", paddingTop: "100px" }}
        />

        <div className="d-flex flex-column gap-3 position-absolute feature-text text-white">
          <h4>
            <span>Featured Mixxers:</span> Curated For You
          </h4>
          <p className="mb-0 pe-5">
            Discover popular suggestions tailored to your interests and
            preferences. Explore Mixxers from boosted users and trending
            activities to join exciting and highly-rated gatherings.
          </p>
        </div>

        <div className="d-flex flex-column gap-3 position-absolute nearby-text text-white">
          <h4>
            <span>Nearby Mixxers:</span> Local Fun at your Fingertips
          </h4>
          <p className="mb-0 pe-5">
            Find Mixxers happening in your area and connect with local groups.
            Easily locate gatherings close to you and participate in nearby
            activities for a convenient and fun social experience.
          </p>
        </div>

        <div className="d-flex flex-column gap-3 position-absolute friend-text text-white">
          <h4>
            <span>Friend Mixxers:</span> Stay in the Loop
          </h4>
          <p className="mb-0 pe-5">
            Access Mixxers created by users you are connected with. Keep up with
            your friends’ activities, join their planned outings, and enjoy
            socializing with people you know and trust.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Explore;
