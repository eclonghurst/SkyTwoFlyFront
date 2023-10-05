import React from "react";
import ButtonBar from "../Components/ButtonBar";
import HeroTagline from "../Components/HeroTagline";
import Carousel from "../Components/Carousel";
import SecondCarousel from "../Components/SecondCarousel";
import Cards from "../Components/Cards";
import SmallCards from "../Components/SmallCards";
import HeroText from "../Components/HeroText";

function Home() {
  return (
    <>
      <ButtonBar />
      <SmallCards />
      <HeroTagline />
      <Carousel />
      <HeroText />
      <Cards />
      <SecondCarousel />
    </>
  );
}

export default Home;
