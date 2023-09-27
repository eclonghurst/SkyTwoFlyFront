import React from "react";
import '../CssFiles/NavBarCSS.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                GetYourWay.com
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="flights">Flights</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="weather">Weather</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="signUp">Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="SignIn">Log in</Link>
        
                    </li>
                </ul>
                <FontAwesomeIcon className="accountIcon" icon={faUser} style={{color: "#a8b2c2"}} /> {}
            </div>
          
        </nav>
    );
}

export default NavBar;
