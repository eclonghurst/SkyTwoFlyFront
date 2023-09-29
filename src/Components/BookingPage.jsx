import React from "react";
import Flight from "./Flight";

function BookingPage(){

    return(
        <>
        <Flight/>
        <label for="confirm">Book GetYourWay flights today...     </label>
        <button id="confirm">Confirm</button>
        <div className="container-for-map">
            <p>

            </p>

            <p>

            </p>
            <p>This is a container for the map</p>
        </div>
        </>
    )
}

export default BookingPage;