import React from "react";
import { render } from "react-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo" style={{ gridColumn: "2" }}>
          LoGo
        </div>
        <div className="menus">
          <div>menu-1</div>
          <div>menu-2</div>
          <div>menu-3</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
