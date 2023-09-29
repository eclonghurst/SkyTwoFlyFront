import React from "react";
import '../CssFiles/NavBarCSS.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const NavBar = ({onFaviconClick}) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div id="navbar-container">
                <Link className="navbar-brand" id="nav-brand" to="/">
                    GetYourWay.com
                 </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Flights">Flights</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="SignIn">Log in</Link>
                    </li>
                </ul>
                <FontAwesomeIcon className="accountIcon" icon={faUser} style={{color: "#ffffff"}} 
                onClick = {onFaviconClick}/> 
            </div>
        </div>
          
        </nav>
    );
}

export default NavBar;
