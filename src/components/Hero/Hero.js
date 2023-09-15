import React from "react";
//resources
import cube from "../../Resources/Images/cube.png";
import stairs from "../../Resources/Images/stairs.png";
import pillar from "../../Resources/Images/pillar.png";
import robicCube from "../../Resources/Images/robhicCube.png";
import mobile from "../../Resources/Images/mobile.png";
//style
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="outerContainer">
        <div className="item1">
          <img src={cube} alt="cube_image" />
        </div>
        <div className="item2">
          <img src={stairs} alt="stairs_image" />
        </div>
        <div className="item3">
          <img src={robicCube} alt="robhicCube_image" />
        </div>
        <div className="item4">
          <img src={pillar} alt="pillar_image" />
        </div>

        <div className="innerContainer">
          <div className="cash">cash</div>
          <div className="mobile">
            <img src={mobile} alt="mobile_image" />
          </div>
          <div className="app">app</div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
