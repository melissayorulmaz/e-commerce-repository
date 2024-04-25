import React from "react";
import NavBarTop from "../components/NavBarTop";
import NavbarBottom from "../components/NavBarBottom";


function Header() {
  return (
    <div>
      <NavBarTop />
      <NavbarBottom />
      <h1>Header</h1>
    </div>
  );
}

export default Header;