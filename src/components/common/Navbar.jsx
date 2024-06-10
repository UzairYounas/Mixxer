import React, { useState, useEffect } from "react";
import whitelogo from "../../assets/Images/whitelogo.png";
import logo from '../../assets/Images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-bar ${isScrolled ? "bg-white shadow" : "bg-transparent"} fixed-top py-3`}>
      <div className="container d-flex align-items-center justify-content-between">
        <img src={isScrolled ? logo : whitelogo} alt="LOGO" style={{ width: "200px" }} />
        <div className={`d-flex align-items-center gap-4 ${isScrolled ? "text-dark" : "text-white"}`}>
          <p className="mb-0">Home</p>
          <p className="mb-0">Feature</p>
          <p className="mb-0">About</p>
          <p className="mb-0">FAQ'S</p>
          <p className="mb-0">Contact</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
