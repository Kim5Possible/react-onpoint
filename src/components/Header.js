import React from "react";
import "./Header.scss";
import Home from "../../public/assets/home.svg";
import Logo from "../../public/assets/logo.png";

const Header = ({ setActiveSlide }) => {
  return (
    <header className="header">
      <div className="header__content">
        <img
          onClick={() => setActiveSlide(0)}
          className="header__home"
          src={Home}
          alt="image"
        />
        <div className="header__line" />
        <div className="header__text">Project</div>
      </div>
      <img className="header__logo" src={Logo} alt="image" />
    </header>
  );
};

export default Header;
