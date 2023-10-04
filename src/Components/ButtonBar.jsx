import React from "react";
import AutocompleteButton from "./AutocompleteButton";
import SearchButton from "./SearchButton";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import airportData from "../airports.json";

function ButtonBar() {
  const nav = useNavigate();

  // Departure and Arrival Inputs
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [adults, setAdults] = useState("");

  const [flightList, setFlightList] = useState([]);

  // holds the value - prevents it from being updated on render
  const firstRun = useRef(true);

  // everytime flight list gets updated, it will run the content inside
  // in this case, navigating once the flight list is updated with the get request data
  useEffect(() => {
    // is this the first time running? if yes, don't run content inside
    if (firstRun.current) {
      firstRun.current = false;
      console.log("Don't Run!");
      return;
    }
    // on next time flight list is updated, do this:
    console.log(flightList);
    if (flightList.length > 0) {
      nav("/flights", {
        state: {
          fly_to: departure,
          fly_from: departure,
          flightList: flightList,
        },
      });
    }
  }, [flightList]);

  const getFlights = async () => {
    const ukAirportData = airportData.map((airport) => airport.name);
    const indexDep = ukAirportData.indexOf(departure);
    const indexArr = ukAirportData.indexOf(arrival);
    try {
      const res = await axios.get("http://localhost:8080/flights/getOneWay/", {
        params: {
          fly_to: airportData[indexArr].iata_code,
          fly_from: airportData[indexDep].iata_code,
          date_from: dateFrom.toLocaleDateString("en-GB"),
          date_to: dateTo.toLocaleDateString("en-GB"),
          adults: adults,
        },
      });
      // console.log(res.data);
      // console.log(res.data[0].cityTo);
      const resultData = res.data;
      setFlightList(resultData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    getFlights();
  };

  return (
    <>
      <div className="ButtonBarContainer">
        <h3 className="tagline">Sky's the Limit- Fly, your way!</h3>
        <form className="buttonBar-form" onSubmit={handleSubmit}>
          <AutocompleteButton
            val={departure}
            setVal={setDeparture}
            displayText={"Fly from..."}
          />
          <AutocompleteButton
            val={arrival}
            setVal={setArrival}
            displayText={"Fly to..."}
          />
          <div className="buttonContainer">
            <DatePicker
              className="autocompleteInputField"
              placeholderText="Search from..."
              dateFormat={"dd/MM/yyyy"}
              value={dateFrom}
              selected={dateFrom}
              minDate={new Date()}
              onChange={(dateFrom) => setDateFrom(dateFrom)}
            />
          </div>
          <div className="buttonContainer">
            <DatePicker
              className="autocompleteInputField"
              placeholderText="Search to..."
              dateFormat={"dd/MM/yyyy"}
              value={dateTo}
              selected={dateTo}
              minDate={dateFrom}
              onChange={(dateTo) => setDateTo(dateTo)}
            />
          </div>
          <div className="buttonContainer">
            <label htmlFor="">
              <input
                className="autocompleteInputField"
                type="number"
                min={1}
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                placeholder="No. of tickets..."
              />
            </label>
          </div>
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
