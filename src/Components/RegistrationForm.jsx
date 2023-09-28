import React, { useState } from 'react';
import '../CssFiles/RegistrationFormCSS.css';

function RegistrationForm() {
  console.log('Registerastion is rendered')
  
  const [firstName,setFirstName]= useState("")
  const [lastName,setLastName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };


return(
<div className='backdrop'>
  <div className='modal'>

    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input 
        type = "text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}/>

      </label>
      <br/>
      <label>
        Last Name:
        <input 
        type = "text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}/>

      </label>
      <br/>
      <label>
        Email:
        <input 
        type = "text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}/>
      </label>

      <br/>
      <label>
        Password:
        <input 
        type = "text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}/>

      </label>
      <br/>
      <button type = "submit">Submit</button>
    </form>
  </div>



</div>

)

};

export default RegistrationForm;
