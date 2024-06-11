import React from "react";

import contactimg from "../assets/Images/contact-img.png";

function Contact() {

    const handleSubmit = (event) => {
        event.preventDefault();
      };

  return (
    <div className="container contact">
      <div className="row">

        <div className="col-md-6 pe-lg-5 pe-md-5 pe-sm-none pe-none">
          <h1>Have a question or need any assistance?</h1>
          <p className="mb-5">
            We're here to help! Please fill out the form below, and we'll get
            back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-4 mt-5">
            <div className="d-flex flex-column gap-1">
              <label>Full Name</label>
              <input type="text" placeholder="Write name" />
            </div>

            <div className="d-flex flex-column gap-1">
              <label>Email Address</label>
              <input type="text" placeholder="example@email.com" />
            </div>

            <div className="d-flex flex-column gap-1">
              <label>What do you want to discuss about?</label>
              <textarea type="text" placeholder="write here..."></textarea>
            </div>
            <button>Contact us</button>
          </form>
        </div>

        <div className="col-md-6">
          <img src={contactimg} alt="CONTACTIMG" className="w-100 d-lg-block d-md-block d-sm-none d-none" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
