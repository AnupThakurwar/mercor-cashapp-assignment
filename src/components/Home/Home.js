import React, { useState } from "react";
import "./Home.scss";
import Header from "../../commonComponents/Header/Header";
import Footer from "../../commonComponents/Footer/Footer";
import Hero from "../Hero/Hero";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="headerWrapper">
          <Header menuHandler={menuHandler} showMenu={showMenu} />
        </div>
        <div className="heroWrapper" onClick={hideMenu}>
          <Hero />
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
