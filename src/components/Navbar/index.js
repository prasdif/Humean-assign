import React from "react";
import "./index.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side - Logo + Text */}
      <div className="navbar-left">
        <img
          src="https://res.cloudinary.com/dztmp3saa/image/upload/v1757855200/new_u68tex.svg"
          alt="Chrome Logo"
          className="chrome-logo"
        />
        <span className="brand">chrome</span>
      </div>

      {/* Right side - Links */}
      <div className="navbar-right">
        <a href="#safety">Safety</a>
        <a href="#google">By Google</a>
        <a href="#extensions" className="ext-link">
          Extensions <FaExternalLinkAlt className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
