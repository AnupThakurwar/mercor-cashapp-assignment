import React from "react";
import "./Home.scss";
import Header from "../../commonComponents/Header/Header";
import Footer from "../../commonComponents/Footer/Footer";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="headerWrapper">
          <Header />
        </div>
        <div className="heroWrapper">
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
