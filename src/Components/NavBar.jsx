import "../CssFiles/NavBarCSS.css";
import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Login from "./Login";
import SkyImage from "../Images/SkyLogo3.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${
          process.env.NODE_ENV === "production"
            ? "/api"
            : "http://localhost:8080"
        }/logout`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      props.setLoggedIn(false);
      alert("You have been logged out!");
      navigate("/");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div id="navbar-container">
        <Link className="navbar-brand" id="nav-brand" to="/">
          GetYourWay |
          <img src={SkyImage} className="navbar-logo" alt="sky logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {props.loggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="Profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="nav-link"
                    style={{ background: "none", border: "none" }}
                  >
                    Log out
                  </button>
                </li>
              </>
            )}

            {/* {!loggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="SignIn">
                  Log in
                </Link>
              </li>
            )} */}
          </ul>
          {!props.loggedIn && (
            <Login
              loggedIn={props.loggedIn}
              setLoggedIn={props.setLoggedIn}
              isVisible={props.isVisible}
              setIsVisible={props.setIsVisible}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
