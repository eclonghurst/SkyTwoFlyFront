import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Carousel from "./Components/Carousel";
import NavBar from "./Components/NavBar";
// import ButtonBar from './Components/ButtonBar';
// import HeroTagline from './Components/HeroTagline';
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

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Router>
      <NavBar onFaviconClick={() => setIsVisible(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flights" element={<FlightsPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/BookingPage" element={<BookingPage />} />
      </Routes>

      <Footer />

      <Login isVisible={isVisible} setIsVisible={setIsVisible} />
    </Router>
  );
}

export default App;
