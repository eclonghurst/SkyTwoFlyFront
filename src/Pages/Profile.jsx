import React from "react";
import FlightTicket from "../Components/FlightTicket";
import { useLocation } from "react-router-dom";

const Profile = () => {
    const location = useLocation();
    const user = location
    return(
        <>
  

        <FlightTicket/>
        </>
    )
}

export default Profile;