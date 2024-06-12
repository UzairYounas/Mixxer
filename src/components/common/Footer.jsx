import React from "react";

import logo from "../../assets/Images/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import mail from '../../assets/Images/icons/mail.svg';
import line from '../../assets/Images/icons/line.svg'

function Footer() {
  return (
    <div className="footer-bg">
      <div className="container" style={{marginTop: '90px'}}>
        <div className="row pb-4" style={{paddingTop: '100px'}}>

          <div className="col-md-4 pe-4 mb-4">
            <div className="d-flex flex-column gap-4">
              <img src={logo} alt="LOGO" style={{width: '200px'}} />
              <p>
                Don't miss out on the latest updates, announcements, and
                exclusive offers. Connect with us on social media and subscribe.
              </p>
              <p style={{color: '#655F5F'}}>© Copyright 2024 All Rights Reserved</p>
            </div>
          </div>

          <div className="col-md mb-lg-none mb-md-none mb-sm-5 mb-5">
            <h4>Useful Links</h4>
            <img src={line} />
            <div className="d-flex flex-column gap-4 mt-4">
              <div className="d-flex align-items-center gap-3">
                <FaArrowRight />
                <h5 className="mb-0">Home</h5>
              </div>
              <div className="d-flex align-items-center gap-3">
                <FaArrowRight />
                <h5 className="mb-0">About</h5>
              </div>
              <div className="d-flex align-items-center gap-3">
                <FaArrowRight />
                <h5 className="mb-0">Feature</h5>
              </div>
              <div className="d-flex align-items-center gap-3">
                <FaArrowRight />
                <h5 className="mb-0">FAQ'S</h5>
              </div>
            </div>

          </div>

          <div className="col-md mb-lg-none mb-md-none mb-sm-5 mb-5">
            <h4>Terms & Policies</h4>
            <img src={line} />
            <div className="d-flex flex-column gap-4 mt-4">

              <div className="d-flex align-items-center gap-3">
                <FaArrowRight />
                <h5 className="mb-0">Terms Of Services</h5>
              </div>
              <div className="d-flex align-items-center gap-3">
                <FaArrowRight />
                <h5 className="mb-0">EULA for Mixxer</h5>
              </div>
              <div className="d-flex align-items-center gap-3">
                <FaArrowRight />
                <h5 className="mb-0">Privacy Policies</h5>
              </div>
              <div className="d-flex align-items-center gap-3">
                <FaArrowRight />
                <h5 className="mb-0">Disclaimer for Mixxer</h5>
              </div>
            </div>

          </div>

          <div className="col-md icons">
            <h4>Get in Touch</h4>
            <img src={line} />
            <div className="d-flex gap-4 mb-5 mt-4">
            <FaFacebookF />
            <RiInstagramFill />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedinIn />
            </div>
            <div className="d-flex align-items-center gap-3">
            <img src={mail} />
                <div className="d-flex flex-column">
                    <p className="mb-0" >contactus@mixxerco.com</p>
                    <small>Email Us Here</small>
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
