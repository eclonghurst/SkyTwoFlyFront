import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./Components/Carousel";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Flights from "./Pages/Flights";
import SignIn from "./Pages/SignIn";
import Flight from "./Components/Flight";
import FlightsPage from "./Components/FlightsPage";
import RegistrationForm from "./Components/RegistrationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./Components/BookingPage";
import Login from "./Components/Login";
import Profile from "./Pages/Profile";
import axios from "axios";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const response = await axios.get(
        `${
          typeof process === "undefined" ? "/api" : "http://localhost:8080"
        }/users/user`,
        {
          withCredentials: true,
        }
      );
      if (response.status == 201) {
        setLoggedIn(() => true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <NavBar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onFaviconClick={() => setIsVisible(true)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flights" element={<FlightsPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/BookingPage" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
