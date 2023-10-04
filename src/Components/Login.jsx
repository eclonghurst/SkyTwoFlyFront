import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../CssFiles/LoginFormCSS.css";

function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const toggleForm = () => setIsLoginForm(!isLoginForm);
  return (
    <div>
      <FontAwesomeIcon
        className="accountIcon"
        icon={faUser}
        style={{ color: "#ffffff" }}
        onClick={() => setIsVisible(true)}
      />
      {isVisible && (
        <div className="backdrop" onClick={() => setIsVisible(false)}>
          <div
            className={`form-container`}
            onClick={(e) => e.stopPropagation()}
          >
            {isLoginForm ? (
              <LoginForm setIsVisible={setIsVisible} />
            ) : (
              <RegistrationForm setIsVisible={setIsVisible} />
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
