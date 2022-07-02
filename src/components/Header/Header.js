import React from "react";
import "./Header.scss";
import CTA from "../CTA/CTA";
import Socials from "../Socials/Socials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nicolas Fernandino</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <Socials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
