import React, { useState } from 'react';
import '../CssFiles/RegistrationFormCSS.css';
import axios from 'axios';
import PropTypes from "prop-types";
import SkyImage from "../Images/SkyLogo.png";

function RegistrationForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form");
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    axios.post("http://localhost:8080/users/register",{
      firstName,lastName,email,password
    }).then (function(res){
      console.log("RES:", res);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      props.getUsers();
      console.log("Test")
      alert("You have successfully registered!")
    }).catch(err => {
      console.log(err)

    
  });



    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  }

  return (
    <div>
      <h1 className='FormTitle'>GetYourWay | <img src = {SkyImage} className= "navbar-logo" alt = "sky logo"/></h1>
      
      <h3>Sign up for the full experience!</h3>
      <p>Plan your trips, monitor prices, and view your bookings</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

RegistrationForm.propTypes = {
  getUsers: PropTypes.func.isRequired,
}

export default RegistrationForm;
