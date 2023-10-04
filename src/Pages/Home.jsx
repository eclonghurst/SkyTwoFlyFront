import React from "react";
import ButtonBar from "../Components/ButtonBar";
import HeroTagline from "../Components/HeroTagline";
import Carousel from "../Components/Carousel";
import SecondCarousel from "../Components/SecondCarousel";
function Home(){
    return(
    <>
        <ButtonBar/>
        <HeroTagline/>
        <Carousel/>
        <SecondCarousel/>
    </>
    );
}

export default Home;