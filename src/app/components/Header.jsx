import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="header-bg-container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Header;
