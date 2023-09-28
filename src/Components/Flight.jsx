import React from "react";
import '../CssFiles/FlightCSS.css';
import airlineLogo from '../Images/airlineLogo.png'


function Flight(){

    return(
        <>
        <div className='flight-panel'>
            <div className='container-airline-details'>
                <img src={airlineLogo} alt="Airline logo"/> 
            </div>
            <div className='container-flight-details'>
            <p>Travel details</p>
            </div>
            <div className='container-flight-details-price'>
<p>££</p>
                    <button className='book-button'>Book</button>
            </div>


        </div>
        </>
    )
}

export default Flight;