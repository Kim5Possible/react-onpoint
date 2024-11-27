import React from "react";
import "./Header.scss";
import Home from "../../public/assets/home.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={Home} alt="image" />
      <div className="header__line" />
      <div className="header__text">Project</div>
    </header>
  );
};

export default Header;
