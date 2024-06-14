import React, { useState, useEffect } from "react";
import whitelogo from "../../assets/Images/whitelogo.png";
import logo from "../../assets/Images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Navbar({ handleScroll }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`nav-bar ${
          isScrolled ? "bg-white shadow" : "bg-transparent"
        } fixed-top py-3`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <img src={isScrolled ? logo : whitelogo} alt="LOGO" />
          <div
            className={`d-lg-flex d-md-flex d-sm-none d-none align-items-center gap-lg-5 gap-md-4 gap-sm-4 gap-4 ${
              isScrolled ? "text-secondary" : "text-white"
            }`}
          >
            <p className="mb-0" onClick={() => handleScroll("home")}>
              Home
            </p>
            <p className="mb-0" onClick={() => handleScroll("feature")}>
              Feature
            </p>
            <p className="mb-0" onClick={() => handleScroll("about")}>
              About
            </p>
            <p className="mb-0" onClick={() => handleScroll("faq")}>
              FAQ'S
            </p>
            <p className="mb-0" onClick={() => handleScroll("contact")}>
              Contact
            </p>
          </div>

          <FaBars
            className={`d-lg-none d-md-none d-sm-flex d-flex ${
              isScrolled ? "text-secondary" : "text-white"
            } mt-3 h3`}
            onClick={() => setStatus(true)}
          />
        </div>
      </nav>

      {status ? (
        <div
          className="d-flex flex-column gap-4 p-4 fixed-top text-white"
          style={{ backgroundColor: "#7E6C54" }}
        >
          <div className="d-flex justify-content-between text-white">
            <img src={whitelogo} alt="LOGO" />
            <IoClose className="h2" onClick={() => setStatus(false)} />
          </div>
          <div className="d-flex flex-column">
            <p
              onClick={() => {
                handleScroll("home");
                setStatus(false);
              }}
            >
              Home
            </p>
            <hr className="side-hr" />
          </div>

          <div className="d-flex flex-column">
            <p
              onClick={() => {
                handleScroll("feature");
                setStatus(false);
              }}
            >
              Features
            </p>
            <hr className="side-hr" />
          </div>

          <div className="d-flex flex-column">
            <p
              onClick={() => {
                handleScroll("about");
                setStatus(false);
              }}
            >
              About
            </p>
            <hr className="side-hr" />
          </div>

          <div className="d-flex flex-column">
            <p
              onClick={() => {
                handleScroll("faq");
                setStatus(false);
              }}
            >
              FAQ'S
            </p>
            <hr className="side-hr" />
          </div>

          <div className="d-flex flex-column">
            <p
              onClick={() => {
                handleScroll("contact");
                setStatus(false);
              }}
            >
              Contact
            </p>
            <hr className="side-hr" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
