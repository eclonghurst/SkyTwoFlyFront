import React from "react";
import "../CssFiles/Weather.css"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Weather(){

const [weather, setWeather] = useState('');

const [locationDetails, setLocationDetails] = useState('');

const getWeather = function(){
    axios.get("http://api.weatherapi.com/v1/current.json?key=38387323c061422fae1200751232809&q=Rhodes")
    .then(function(response){
        console.log("RESPONSE RECEIVED");
        setWeather({condition: response.data.current.condition.text,
        tempC: response.data.current.temp_c,
    tempF: response.data.current.temp_f});
setLocationDetails({city: response.data.location.name, country:response.data.location.country})})
    .catch(err => console.error(err));   
}

useEffect(function(){
    getWeather();
},[]);


    return(
        <>
        <div className="weather">
        <h2>Weather at your chosen destination...</h2>
        <h3>{locationDetails.city}, {locationDetails.country}</h3>
        <table>
            <tr>
                <th>Condition:  </th>
                <td> {weather.condition} </td>
            </tr>
            <tr>
                <th>Temperature C:     </th>
                <td> {weather.tempC} </td>
            </tr>
            <tr>
            <th>Temperature F:     </th>
                <td> {weather.tempF} </td>
            </tr>
        </table>
        </div>
        </>
    )
}

export default Weather;