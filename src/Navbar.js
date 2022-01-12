import React from "react";
import { render } from "react-dom";
import logo from "./adobe.png";
import contact from "./meredith.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo" style={{ gridColumn: "2" }}>
          <img src={contact} alt="Contact Logo" />
        </div>
        <div className="menus">
          <div>
            <img src={logo} alt="Adobe Logo" />
          </div>
          <div style={{ paddingRight: "50px" }}>Commerce</div>
          <div>
            <p className="redacted">
              <span>Commerce</span>
            </p>
          </div>
          <div>Merchandising</div>
          <div>
            <p className="redacted">
              <span>Comm</span>
            </p>
          </div>
          <div>
            <p className="redacted">
              <span>Commerce Sneaks</span>
            </p>
          </div>
          <div>
            <p className="redacted">
              <span>Sneaks</span>
            </p>
          </div>
          <div>
            <p className="redacted">
              <span>Adobe Commerce</span>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
