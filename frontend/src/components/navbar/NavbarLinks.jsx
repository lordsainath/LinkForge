import React from "react";
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <>
      <Link to="#features">Features</Link>
      <Link to="#howitworks">How it works</Link>
      <Link to="#pricing">Pricing</Link>
    </>
  );
};

export default NavbarLinks;
