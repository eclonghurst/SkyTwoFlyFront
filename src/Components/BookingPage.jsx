import React from "react";
import Flight from "./Flight";

function BookingPage(){

    return(
        <>
        <Flight/>
        <label for="confirm"></label>
        <button id="confirm">Confirm</button>
        </>
    )
}

export default BookingPage;