import React from "react";
import "./Popup.scss";
import Arrow from "../../public/assets/pagination.svg";

const list = [
  {
    content: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        id: 2,
        text: "Faucibus pulvinar elementum integer enim",
      },
      {
        id: 3,
        text: "Faucibus pulvinar elementum integer enim",
      },
    ],
  },
  {
    content: [
      {
        id: 4,
        text: "Mi bibendum neque egestas congue quisque egestas diam",
      },
      {
        id: 5,
        text: "Venenatis lectus magna fringilla urna",
      },
      {
        id: 6,
        text: "Venenatis lectus magna fringilla urna",
      },
    ],
  },
];

const Popup = () => {
  const [page, setPage] = React.useState(0);

  return (
    <section className="popup">
      <h2>преимущества</h2>
      <h1>
        bgend<span>xy</span>
      </h1>

      <ul className="popup__list">
        {list[page].content.map((item) => (
          <div key={item.id} className="popup__list-item">
            <span>0{item.id}</span>
            <li>{item.text}</li>
          </div>
        ))}
      </ul>
      <div className="popup__pagination">
        <button onClick={() => setPage(0)} className="popup__pagination-left">
          <img src={Arrow} alt="image" />
        </button>
        <div
          className={`popup__pagination-page ${
            page === 0 && "popup__pagination-page__active"
          }`}
        />
        <div
          className={`popup__pagination-page ${
            page === 1 && "popup__pagination-page__active"
          }`}
        />
        <button onClick={() => setPage(1)} className="popup__pagination-right">
          <img src={Arrow} alt="image" />
        </button>
      </div>
    </section>
  );
};

export default Popup;
