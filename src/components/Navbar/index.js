import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Link to="/">
          <NavLink>Homepage</NavLink>
        </Link>
        <Link to="/about">
          <NavLink>About</NavLink>
        </Link>
        <Link to="/resume">
          <NavLink>Resume</NavLink>
        </Link>
      </Nav>
    </>
  );
};

export default Navbar;
