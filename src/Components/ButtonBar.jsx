import React from "react";
import AutocompleteButton from "./AutocompleteButton";
import SearchButton from "./SearchButton";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import FlightInput from "./FlightInput";

function ButtonBar() {
  const nav = useNavigate();

  // Departure and Arrival Inputs
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [adults, setAdults] = useState("");

  const [flightList, setFlightList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    axios
      .get("http://localhost:8080/flights/getOneWay/", {
        params: {
          fly_to: departure,
          fly_from: arrival,
          date_from: dateFrom,
          date_to: dateTo,
          adults: adults,
        },
      })
      .then((res) => {
        console.log(res.data);
        setFlightList(res.data);
      })
      .catch((err) => console.error(err));

    nav("/flights", { state: { fly_to: departure, fly_from: departure } });
  };

  return (
    <>
      <div className="ButtonBarContainer">
        <form className="buttonBar-form" onSubmit={handleSubmit}>
          <FlightInput
            value={departure}
            onChange={(e) => {
              console.log(e.target.value);
              setDeparture(e.target.value);
            }}
          />
          <FlightInput
            value={arrival}
            onChange={(e) => {
              console.log(e.target.value);
              setArrival(e.target.value);
            }}
          />
          <FlightInput
            value={dateFrom}
            onChange={(e) => {
              console.log(e.target.value);
              setDateFrom(e.target.value);
            }}
          />
          <FlightInput
            value={dateTo}
            onChange={(e) => {
              console.log(e.target.value);
              setDateTo(e.target.value);
            }}
          />
          <FlightInput
            value={adults}
            onChange={(e) => {
              console.log(e.target.value);
              setAdults(e.target.value);
            }}
          />
          {/* <SearchButton onClick={handleSubmit}/> */}

          <button
            type="submit"
            //onClick={() => nav("/flights", { state: { fly_from: departure } })}
            onClick={handleSubmit}
            className="searchButton"
          >
            <svg
              className="searchSvg"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

export default ButtonBar;
