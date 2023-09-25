import React from "react";
import './NavBarCSS.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="home">
    
                GetYourWay.com
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="flights">Flights</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="weather">Weather</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="signUp">Sign up</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="SignIn">Log in</a>
        
                    </li>
                </ul>
                <FontAwesomeIcon icon={faUser} style={{color: "#a8b2c2"}} /> {}
            </div>
          
        </nav>
    );
}

export default NavBar;
