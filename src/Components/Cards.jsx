import React from "react";
import "../CssFiles/CardsCSS.css";
import signpost from "../Images/signpost.png";

function Cards() {
  return (
    <>
      <div className="card-container">
        <div className="cardOne card">
          <img src={signpost} alt="" />
        </div>
        <div className="cardOne card">
          <img src={signpost} alt="" />
        </div>
        <div className="cardOne card">
          <img src={signpost} alt="" />
        </div>
        <div className="cardOne card">
          <img src={signpost} alt="" />
        </div>
      </div>
    </>
  );
}

export default Cards;
