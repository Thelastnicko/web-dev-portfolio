import React from "react";
import "./Header.scss";
import CTA from "../CTA/CTA";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nicolas Fernandino</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
