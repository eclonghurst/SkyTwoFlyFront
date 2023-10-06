import React, { useState } from "react";
import "../CssFiles/CardsCSS.css";
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
            <h5 className="card-text">Bus schedule</h5>
          </div>
        </div>
        <div className="card-outline">
          <div className="img-container">
            <img className="card-img" src={train} alt="" />
            <h5 className="card-text">Train travel</h5>
          </div>
        </div>
        <div className="card-outline">
          <div className="img-container">
            <img className="card-img" src={taxi} alt="" />
            <h5 className="card-text">Bike hire</h5>
          </div>
        </div>
        <div className="card-outline">
          <div className="img-container">
            <img className="card-img" src={ferry} alt="" />
            <h5 className="card-text">Ferry rides</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
