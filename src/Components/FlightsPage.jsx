import React from "react";
import Flight from "./Flight";
import Weather from "./Weather";
import "../CssFiles/FlightPageCSS.css"

function FlightsPage(){

    return(
        <>
<div className="flight-page-container">
    <div className="flight-container">
        <Flight/>
        <Flight/>
    </div>
    <Weather/>

</div>

        </>
    )
}

export default FlightsPage;