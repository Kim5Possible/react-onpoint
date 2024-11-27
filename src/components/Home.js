import React from "react";
import "./Home.scss";
import VirusBig from "../../public/assets/virus-big.png";
import VirusMedium from "../../public/assets/virus-medium.png";
import VirusSmall from "../../public/assets/virus-small.png";
import Sperm from "../../public/assets/sperm.png";
import Button from "./components/Button";

function Onpoint({ activeSlide, setActiveSlide }) {
  return (
    <section className="home">
      <div className="home__content">
        <h2>Привет,</h2>
        <h1 className="home__text">
          это <span>не</span> коммерческое задание
          <Button
            onClick={() => setActiveSlide(1)}
            style={{ position: "absolute", right: "100px", bottom: "20px" }}
            activeSlide={activeSlide}
          >
            Что дальше?
          </Button>
          <img src={Sperm} alt="image" />
        </h1>
        <img className="home__virus-big" src={VirusBig} alt="image" />
        <img className="home__virus-medium" src={VirusMedium} alt="image" />
        <img className="home__virus-small-right" src={VirusSmall} alt="image" />
        <img className="home__virus-small-left" src={VirusSmall} alt="image" />
      </div>
    </section>
  );
}

export default Onpoint;
