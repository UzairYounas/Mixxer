import React, { useState, useEffect } from "react";
import whitelogo from "../../assets/Images/whitelogo.png";
import logo from "../../assets/Images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Navbar({ handleScroll }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [status, setStatus] = useState(false);
  const termUrl = window.location.href === localStorage.getItem("termUrl");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navbarClass =
    isScrolled || termUrl ? "bg-white shadow" : "bg-transparent";
  const textClass = isScrolled || termUrl ? "text-secondary" : "text-white";

  return (
    <>
      <nav
        className={`nav-bar ${navbarClass} fixed-top py-lg-3 py-md-2 py-sm-0 py-0`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <img src={isScrolled || termUrl ? logo : whitelogo} alt="LOGO" />
          <div
            className={`d-lg-flex d-md-flex d-sm-none d-none align-items-center gap-lg-5 gap-md-4 gap-sm-4 gap-4 ${textClass}`}
          >
            {["home", "feature", "about", "faq", "contact"].map(
              (section, index) => (
                <p
                  key={index}
                  className="mb-0"
                  onClick={() => handleScroll(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </p>
              )
            )}
          </div>
          <FaBars
            className={`d-lg-none d-md-none d-sm-flex d-flex ${textClass} mt-3 h3`}
            onClick={() => setStatus(true)}
          />
        </div>
      </nav>

      {status && (
        <div
          className="d-flex flex-column gap-4 p-4 fixed-top text-white"
          style={{ backgroundColor: "#7E6C54" }}
        >
          <div className="d-flex justify-content-between text-white">
            <img src={whitelogo} alt="LOGO" />
            <IoClose className="h2" onClick={() => setStatus(false)} />
          </div>
          {["home", "feature", "about", "faq", "contact"].map(
            (section, index) => (
              <div key={index} className="d-flex flex-column">
                <p
                  onClick={() => {
                    handleScroll(section);
                    setStatus(false);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </p>
                <hr className="side-hr" />
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
