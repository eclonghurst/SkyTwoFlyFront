import React from "react";
import '../CssFiles/FlightCSS.css';
import airlineLogo from '../Images/airlineLogo.png'


function Flight(){

    return(
        <>
        <div className='flight-panel'>
            <div className='container-airline-details'>
                <img src={airlineLogo} alt="Airline logo" className="airline-logo"/> 
            </div>
            <div className='container-flight-details'>
            <div className='departure'>
MAN
            </div>
            <div className='flight-pointer'>

            </div>
            <div className='destination'>
DUS
            </div>
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