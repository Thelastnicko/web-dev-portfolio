import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nicolasfernandino/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Thelastnicko"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default Socials;
