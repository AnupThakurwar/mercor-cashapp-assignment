import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="buttonContainer">
        <button className="storeBtn">
          <i class="fa-brands fa-apple"></i> app store
        </button>
        <button className="platBtn">
          <i class="fa-brands fa-google-play"></i>google play
        </button>
      </div>
      <div className="arrowContainer">
        <i class="fa-solid fa-arrow-down"></i>
      </div>
      <div className="disclaimerContainer">
        Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
        our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
        trading offered by Cash App. Cash App Investing does not trade bitcoin
        and Cash App is not a member of FINRA or SIPC. Cash App facilitates
        banking services through Sutton Bank and Lincoln Savings Bank, Members
        FDIC.
      </div>
      <div className="socialIconsContainer">
        <i class="fa-brands fa-twitch"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
};

export default Footer;
