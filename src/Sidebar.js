import React from "react";
import { render } from "react-dom";
import SidebarLogo from "./Sidebar.png";

const Sidebar = () => {
  return (
    <>
      <img
        src={SidebarLogo}
        alt="Sidebar logo"
        style={{ width: "100%", objectFit: "cover", height: "100%" }}
      />
    </>
  );
};

export default Sidebar;
