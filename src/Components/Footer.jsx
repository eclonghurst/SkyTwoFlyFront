import React from "react";
import './FooterCSS.css';

function Footer(){

    return(
      
            <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="home" className="nav-link px-2 white-footer-text">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 white-footer-text">About</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 white-footer-text">Privacy Policy</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 white-footer-text">Terms of service</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 white-footer-text">Contact us</a></li>
    </ul>
    <p className="text-center white-footer-text"> &copy; GetYourWay.com, Inc</p>
  </footer>
</div>
      
    )
}

export default Footer;