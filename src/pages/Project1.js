import React from "react";
import Mouse from "../Components/Mouse";
import Navigation from "../Components/Navigation";
import Logo from "../Components/Logo";
import Buttons from "../Components/Buttons";
import Project from "../Components/Project";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <Buttons left={"/"} right={"/projet-2"} />
      </div>
    </main>
  );
};

export default Project1;
