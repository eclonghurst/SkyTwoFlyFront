import React from "react";
import Flight from "./Flight";
import Map from "./Map";
import { useLocation } from "react-router-dom";
import "../CssFiles/BookingPageCSS.css";

function BookingPage() {
  const location = useLocation();

  console.log(location.state);

  const bookFlight = async () => {};


  return (
    <>
      <Flight {...location.state} bookingActive={true} />
      {/* <label htmlFor="confirm">Book GetYourWay flights today... </label>
      <button id="confirm" onClick={bookFlight}>
        Confirm
      </button> */}
      <div className="container-for-map">
        <p></p>


        <p></p>
        <p>
          This is a container for the map. 
          {location.state.destination}
        </p>
      </div>
      <Map destination={location.state.destination} depart={location.state.depart}/>
    </>
  );
}

export default BookingPage;
