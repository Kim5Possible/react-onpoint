import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import SecondSlide from "./components/SecondSlide";
import ThirdSlide from "./components/ThirdSlide";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [startTouchX, setStartTouchX] = useState(0);
  const [isTouching, setIsTouching] = useState(false);

  const slides = [
    {
      component: (
        <Home activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      ),
      id: 0,
    },
    { component: <SecondSlide />, id: 1 },
    { component: <ThirdSlide activeSlide={activeSlide} />, id: 2 },
  ];

  useEffect(() => {
    const handleTouchStart = ({ touches: [{ clientX }] }) => {
      setStartTouchX(clientX);
      setIsTouching(true);
    };

    const handleTouchEnd = ({ changedTouches: [{ clientX }] }) => {
      if (!isTouching) return;

      const diff = startTouchX - clientX;

      if (Math.abs(diff) > 50) {
        if (diff > 0 && activeSlide < slides.length - 1) {
          setActiveSlide(activeSlide + 1);
        } else if (diff < 0 && activeSlide > 0) {
          setActiveSlide(activeSlide - 1);
        }
      }
      setIsTouching(false);
    };

    const slider = document.querySelector(".slider");
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeSlide, startTouchX, isTouching, slides.length]);

  return (
    <div>
      <Header setActiveSlide={setActiveSlide} />
      <div className="slider" style={styles.container}>
        <div
          style={{
            ...styles.slidesWrapper,
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {slides.map(({ component, id }) => (
            <div key={id} style={styles.slide}>
              {component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  },

  slidesWrapper: {
    display: "flex",
    height: "100%",
    transition: "transform 0.3s ease-out",
  },

  slide: {
    minWidth: "100%",
    height: "100%",
  },
};

export default App;
