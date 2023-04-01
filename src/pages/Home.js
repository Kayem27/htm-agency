import React from "react";
import Navigation from "../Components/Navigation";
import Mouse from "../Components/Mouse";
import SocialNetwork from "../Components/SocialNetwork";
import DynamicText from "../Components/DynamicText";
import Buttons from "../Components/Buttons";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>HTM AGENCY</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
    </div>
  );
};

export default Home;
