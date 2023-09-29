import React from "react";
import "../CssFiles/ButtonCSS.css";

function FlightInput({ value, onChange }) {
  return (
    <>
      <div className="buttonContainer">
        <label htmlFor="">
          <input
            className="autocompleteInputField"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Type here ..."
          />
        </label>
      </div>
    </>
  );
}

export default FlightInput;
