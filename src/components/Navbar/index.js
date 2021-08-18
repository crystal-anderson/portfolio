import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Link to="/">Homepage</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
      </Nav>
    </>
  );
};

export default Navbar;
