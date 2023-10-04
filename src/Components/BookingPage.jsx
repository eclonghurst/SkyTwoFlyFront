import React from "react";
import Flight from "./Flight";
import Map from "./Map";
import { useLocation } from "react-router-dom";

function BookingPage() {
  const location = useLocation();

  console.log(location.state);


    return(
        <>
     <Flight {...location.state} />
        <label for="confirm">Book GetYourWay flights today...     </label>
        <button id="confirm">Confirm</button>
        <div className="container-for-map">
            <p>

            </p>

            <p>

            </p>
            <p>This is a container for the map. Map details for {location.state.destination} </p>
        </div>
        <Map destination={location.state.destination}/>
        </>
    )


}

export default BookingPage;
