import React from "react";
import { navbarList } from "../../Constants/Constants";
import "./Navbar.scss";

const Navbar = ({ showMenu }) => {
  return (
    <div className="navbarContainer">
      <nav className="navMenu">
        <ul id="menu" className={showMenu ? "showMenu" : "hideMenu"}>
          {navbarList.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
