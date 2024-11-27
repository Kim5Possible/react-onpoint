import React from "react";
import "./ThirdSlide.scss";
import Bottle from "../../public/assets/bottle.png";
import BubblesLeft from "../../public/assets/bubbles-to-left.png";
import BubblesRight from "../../public/assets/bubbles-to-right.png";
import BubblesBottom from "../../public/assets/bubbles-to-bot.png";
import BubbleBack from "../../public/assets/bubble-scale-back.png";
import BubbleFront from "../../public/assets/bubble-scale-front.png";
import Button from "./components/Button";
import Plate from "../../public/assets/plate.svg";
import Task from "../../public/assets/task.svg";
import Popup from "./Popup";

const ThirdSlide = ({ activeSlide }) => {
  const [popup, setPopup] = React.useState(false);
  React.useEffect(() => {
    activeSlide !== 2 && setPopup(false);
  }, [activeSlide]);
  return (
    <section className="third-slide">
      <div className={`third-slide__overlay ${popup && "active"}`}></div>
      <div className="third-slide__images">
        <img className="third-slide__images-bottle" src={Bottle} alt="" />
        <img className="third-slide__images-left" src={BubblesLeft} alt="" />
        <img className="third-slide__images-right" src={BubblesRight} alt="" />
        <img
          className="third-slide__images-bottom"
          src={BubblesBottom}
          alt=""
        />
        <img className="third-slide__images-back" src={BubbleBack} alt="" />
        <img className="third-slide__images-front" src={BubbleFront} alt="" />
      </div>
      <div className="third-slide__block">
        <h2>ключевое сообщение</h2>
        <h1>
          bgend<span>xy</span>
        </h1>
        <div className="third-slide__block-text">
          <div className="third-slide__block-text-first third-slide__block-text__style">
            <img src={Plate} alt="image" />
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
          </div>
          <div className="third-slide__block-text-right">
            <div className="third-slide__block-text-second third-slide__block-text__style">
              <img src={Task} alt="image" />A arcu cursus vitae
            </div>
            <Button activeSlide={activeSlide} onClick={() => setPopup(true)}>
              Подробнее
            </Button>
          </div>
        </div>
      </div>

      {popup && <Popup setPopup={setPopup} />}
    </section>
  );
};

export default ThirdSlide;
