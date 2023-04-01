import React from "react";
import Mouse from "../Components/Mouse";
import Navigation from "../Components/Navigation";
import Logo from "../Components/Logo";
import Buttons from "../Components/Buttons";
import Project from "../Components/Project";

const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <Buttons left={"/projet-1"} right={"/projet-3"} />
      </div>
    </main>
  );
};

export default Project2;
