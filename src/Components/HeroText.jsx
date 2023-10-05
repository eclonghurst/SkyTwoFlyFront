import React from "react";
import "../CssFiles/HeroTextCSS.css";

function HeroText() {
  return (
    <div className="heroText-outer-container">
      <div className="heroText-container">
        <h2 className="heroText-header">Jet Off to the World’s Wonders!</h2>
        <h6 className="heroText-Body">
          Whether it's the serene beaches of Bali, the bustling streets of New
          York, or the historical marvels of Rome, Sky UK brings the world
          closer to you
        </h6>
      </div>
    </div>
  );
}

export default HeroText;
