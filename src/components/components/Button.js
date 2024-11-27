import React from "react";
import "./Button.scss";

const Button = ({ activeSlide, children, ...props }) => {
  return (
    <button
      className={`button ${
        activeSlide === 0
          ? "button__first-slide"
          : activeSlide === 2
          ? "button__third-slide"
          : " "
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
