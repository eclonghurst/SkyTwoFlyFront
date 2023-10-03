import React from "react";
import "../CssFiles/Weather.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Weather(props) {
  const [weather, setWeather] = useState("");

  const [locationDetails, setLocationDetails] = useState("");

  const getWeather = function () {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=38387323c061422fae1200751232809&q=" +
          props.city
      )
      .then(function (response) {
        console.log("RESPONSE RECEIVED");
        setWeather({
          condition: response.data.current.condition.text,
          tempC: response.data.current.temp_c,
          tempF: response.data.current.temp_f,
          iconUrl: "http://" + response.data.current.condition.icon,
        });
        setLocationDetails({
          city: response.data.location.name,
          country: response.data.location.country,
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(function () {
    getWeather();
  }, []);

  return (
    <>
      <div className="weather">
        <div className="location-and-icon">
          <h2 className="city-country-hearder">
            {locationDetails.city}, {locationDetails.country}
          </h2>
          <img
            className="weather-icon"
            src={weather.iconUrl}
            alt="weather icon"
          />
        </div>
        <table>
          <tr>
            <th>Condition: </th>
            <td> {weather.condition} </td>
          </tr>
          <tr>
            <th>Temperature C: </th>
            <td> {weather.tempC} </td>
          </tr>
          <tr>
            <th>Temperature F: </th>
            <td> {weather.tempF} </td>
          </tr>
        </table>
        <p> </p>
        <p>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com </a></p>
        <p><a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/></a></p>
        </div>
        </>
    )
}

export default Weather;
