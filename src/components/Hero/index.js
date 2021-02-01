import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroBtn,
  HeroH1,
  HeroItems,
  HeroP,
  HeroBtnLink,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Mie Aceh Pante Pirak</HeroH1>
          <HeroP>Regional Food</HeroP>
          <HeroBtn>
            <HeroBtnLink href="https://goo.gl/maps/4TCwQuMRcmw2bVio7">
              See Location
            </HeroBtnLink>
          </HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
