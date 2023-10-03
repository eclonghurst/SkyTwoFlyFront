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
          wind: response.data.current.wind_kph,
          windDirection: response.data.current.wind_dir,
          humidity: response.data.current.humidity,
          feelsLikeC: response.data.current.feelslike_c,
          feelsLikeF: response.data.current.feelslike_f,
          uv: response.data.current.uv,
          precipInches: response.data.current.precip_in,
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

        <div className="weather-container">
          <div className="weather-info-container">
            <h4 className="weather-info">Condition:&emsp;</h4>
            <h5 className="weather-info">{weather.condition} </h5>
          </div>
          <div className="weather-info-container">
            <h4 className="weather-info">Temperature:&emsp;</h4>
            <h5 className="weather-info">
              {weather.tempC}°C / {weather.tempF}°F
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
