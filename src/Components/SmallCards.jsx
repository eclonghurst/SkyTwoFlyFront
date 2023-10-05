import React, { useState } from "react";
import "../CssFiles/SmallCardsCSS.css";
import bus from "../Images/bus2.jpg";
import train from "../Images/train2.jpg";
import taxi from "../Images/bike.jpg";
import ferry from "../Images/boat2.png";

function Cards() {
  return (
    <>
      <div className="card-outer-container">
        <div className="card-outline">
          <div className="img-container">
            <img className="card-img" src={bus} alt="" />
          </div>
        </div>
        <div className="card-outline">
          <div className="img-container">
            <img className="card-img" src={train} alt="" />
          </div>
        </div>
        <div className="card-outline">
          <div className="img-container">
            <img className="card-img" src={taxi} alt="" />
          </div>
        </div>
        <div className="card-outline">
          <div className="img-container">
            <img className="card-img" src={ferry} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
