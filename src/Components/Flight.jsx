import React from "react";
import '../CssFiles/FlightCSS.css';
import airlineLogo from '../Images/airlineLogo.png'


function Flight(){

    return(
        <>
        <div className='container-flight'>
            <div className='container-flight-details'>
                <img src={airlineLogo} alt="Airline logo"/> 

            </div>
            <div className='container-flight-details'>
<p>Travel details</p>
            </div>
            <div className='container-flight-details'>
<p>price</p>
            </div>


        </div>
        </>
    )
}

export default Flight;