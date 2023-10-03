import React from "react";
import '../CssFiles/NavBarCSS.css';

import { Link } from "react-router-dom";
import Login from "./Login";

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
                <Login/>
           
            </div>
        </div>
          
        </nav>
    );
}

export default NavBar;
