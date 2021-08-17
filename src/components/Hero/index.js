import React, { useState } from "react";
import Navbar from "../Navbar";
import { HeroContainer } from "./HeroElements";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
    </HeroContainer>
  );
};

export default Hero;
