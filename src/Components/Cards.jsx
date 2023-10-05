import React, { useState } from "react";
import "../CssFiles/CardsCSS.css";
import signpost from "../Images/signpost.png";

function Cards() {
  return (
    <>
      <div className="card-outer-container">
        <div className="card-outline">
          <img className="card-img" src={signpost} alt="" />
        </div>
        <div className="card-outline">
          <img className="card-img" src={signpost} alt="" />
        </div>
        <div className="card-outline">
          <img className="card-img" src={signpost} alt="" />
        </div>
        <div className="card-outline">
          <img className="card-img" src={signpost} alt="" />
        </div>
      </div>
    </>
  );
}

export default Cards;
