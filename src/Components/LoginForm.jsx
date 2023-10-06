import React, { useState } from "react";
import "../CssFiles/RegistrationFormCSS.css";
import SkyImage from "../Images/SkyLogo.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";
function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(`Email: ${email}`);
    // console.log(`Password: ${password}`);

    const loginForm = new FormData();

    loginForm.append("username", email);

    loginForm.append("password", password);

    try {
      const response = await axios.post(
        `${
          typeof process === "undefined" ? "/api" : "http://localhost:8080"
        }/login`,
        loginForm,
        { withCredentials: true }
      );
      if (response.status === 200) {
        props.setIsVisible(() => false);
        props.setLoggedIn(() => true);
        navigate("/Profile");
      }
    } catch (err) {
      setError(
        "Please check your password or register if you do not have an account!"
      );
      console.error("There was an error!", err);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        GetYourWay |{" "}
        <img src={SkyImage} className="navbar-logo" alt="sky logo" />
      </h1>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
