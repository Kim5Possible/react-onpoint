import React from "react";
import "./SecondSlide.scss";
import SpermBig from "../../public/assets/sperm-big.png";
import SpermMedium from "../../public/assets/sperm-medium.png";
import SpermSmall from "../../public/assets/sperm-small.png";

const SecondSlide = () => {
  return (
    <section className="second-slide">
      <div className="second-slide__block">
        <h1>
          Текст <br /> сообщения
        </h1>
        <div className="second-slide__block-bg" />
        <div className="second-slide__block-text">
          <p>
            <span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut
            morbi tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam
            eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi
            etiam dignissim diam quis enim lobortis. Est sit amet facilisis
            magna. Neque laoreet suspendisse interdum consectetur libero id. Nec
            ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut
            porttitor leo a diam sollicitudin tempor id. Euismod quis viverra
            nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit
            amet massa vitae tortor condimentum lacinia. Et malesuada fames ac
            turpis egestas integer eget. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum posuere.
            <br />
            <br /> Amet justo donec enim diam vulputate ut pharetra sit. Risus
            ultricies tristique nulla aliquet enim tortor at auctor. Velit sed
            ullamcorper morbi tincidunt ornare massa. Quis hendrerit dolor magna
            eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque
            convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris
            sit amet massa vitae tortor condimentum lacinia quis vel.
          </p>
        </div>
        <img className="second-slide__sperm-big" src={SpermBig} alt="image" />
        <img
          className="second-slide__sperm-medium"
          src={SpermMedium}
          alt="image"
        />
        <img
          className="second-slide__sperm-small"
          src={SpermSmall}
          alt="image"
        />
      </div>
    </section>
  );
};

export default SecondSlide;
