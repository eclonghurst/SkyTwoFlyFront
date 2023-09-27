import React from "react";
import Form from '../Components/RegistrationForm'
import RegistrationForm from "../Components/RegistrationForm";
import '../CssFiles/RegistrationFormCSS.css'

function SignUp(){
    
    return(
    <>
        <h1 className="registerTitle">Register</h1>
        <RegistrationForm/>
    </>
    )
}

export default SignUp;