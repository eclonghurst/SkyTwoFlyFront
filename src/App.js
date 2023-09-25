import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
// import ButtonBar from './Components/ButtonBar';
// import HeroTagline from './Components/HeroTagline';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Flights from './Pages/Flights';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        
      </Routes>
    
    <Footer/>

   
    </Router>
  );
}

export default App;
 