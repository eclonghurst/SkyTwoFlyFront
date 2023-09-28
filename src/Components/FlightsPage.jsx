import React from "react";
import Flight from "./Flight";
import Weather from "./Weather";

function FlightsPage(){

    return(
        <>
<div style="display: flex">
    <Flight/>
    <Weather/>

</div>

        </>
    )
}

export default FlightsPage;