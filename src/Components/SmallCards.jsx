import React, { useState } from "react";
import "../CssFiles/SmallCardsCSS.css";
import bus from "../Images/bus2.jpg";
import train from "../Images/train2.jpg";
import taxi from "../Images/bike.jpg";
import ferry from "../Images/boat2.png";

function Cards() {
  return (
    <>
      <div className="card-outer-container2">
        <div className="card-outline2">
          <h5 className="smallcard-text">Hotels</h5>
        </div>
        <div className="card-outline2">
          <h5 className="smallcard-text">Transfers</h5>
        </div>
        <div className="card-outline2">
          <h5 className="smallcard-text">Sky protect</h5>
        </div>
        <div className="card-outline2">
          <h5 className="smallcard-text">Offers</h5>
        </div>
      </div>
    </>
  );
}

export default Cards;
