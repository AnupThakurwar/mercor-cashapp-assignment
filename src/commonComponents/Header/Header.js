import React, { useState } from "react";
//resources
import logo from "../../Resources/Images/logo.png";
import eye from "../../Resources/Images/eyeButton.png";
//style
import "./Header.scss";
import Navbar from "../Navbar/Navbar";

const Header = ({ showMenu, menuHandler }) => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={logo} alt="logo_img" />
      </div>
      <Navbar showMenu={showMenu} />
      <div className="eyeContainer" onClick={menuHandler}>
        <img src={eye} alt="userOptions_img" />
      </div>
    </div>
  );
};

export default Header;
