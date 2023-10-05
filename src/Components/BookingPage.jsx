import React from "react";
import Flight from "./Flight";
import Map from "./Map";
import { useLocation } from "react-router-dom";
import "../CssFiles/BookingPageCSS.css";

function BookingPage() {
  const location = useLocation();

  console.log(location.state);


    return(
        <>
     <Flight {...location.state} />
        <label for="confirm">Book GetYourWay flights today...     </label>
        <button className="confirm-button" id="confirm">Confirm</button>
        <div className="container-for-map">
            <p>

            </p>

            <p>

            </p>
            <p>This is a container for the map. Map details for {location.state.destination} </p>
        </div>
        <Map destination={location.state.destination} depart={location.state.depart}/>
        </>
    )


}

export default BookingPage;
