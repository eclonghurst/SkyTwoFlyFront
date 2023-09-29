import React, { useState,useEffect } from 'react';
import '../CssFiles/RegistrationFormCSS.css';

function RegistrationForm({isVisible,setIsVisible}) {
  // const [isVisible, setIsVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [animationClass,setAnimationClass] = useState(isVisible ? 'fade in': 'fade-out')
  useEffect(()=> {
    if(isVisible){
      setAnimationClass('fade-in');

    }else{
      setAnimationClass('fade-out');
    }  
  },[isVisible])


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  if(!isVisible) return null;
  
  return (
    <div>

      <div className='backdrop' onClick={() => setIsVisible(false)}>

      <div className={`form-container ${animationClass}`} onClick={(e) => e.stopPropagation()}>

            <h1>Get Your Way</h1>
            <h3>Sign up for the full experience!</h3>
            <p>Plan your trips,monitor prices, and view your bookings</p>
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
          </div>


    </div>
  );
}

export default RegistrationForm;
