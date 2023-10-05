import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../CssFiles/LoginFormCSS.css";

function Login(props) {
  // const [isVisible, setIsVisible] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const toggleForm = () => setIsLoginForm(!isLoginForm);

  const handleVisible = () => {
    props.setIsVisible(() => true);
  };

  return (
    <div>
      <FontAwesomeIcon
        className="accountIcon"
        icon={faUser}
        style={{ color: "#ffffff" }}
        onClick={handleVisible}
      />
      {props.isVisible && (
        <div className="backdrop" onClick={() => props.setIsVisible(false)}>
          <div
            className={`form-container`}
            onClick={(e) => e.stopPropagation()}
          >
            {isLoginForm ? (
              <LoginForm
                setIsVisible={props.setIsVisible}
                setLoggedIn={props.setLoggedIn}
              />
            ) : (
              <RegistrationForm setIsVisible={props.setIsVisible} />
            )}
            <button className="toggle-form-button" onClick={toggleForm}>
              {isLoginForm
                ? "Don’t have an account? Register"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
