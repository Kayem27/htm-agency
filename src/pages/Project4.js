import React from 'react';
import Mouse from "../Components/Mouse";
import Navigation from "../Components/Navigation";
import Logo from "../Components/Logo";
import Buttons from "../Components/Buttons";
import Project from "../Components/Project";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <Buttons left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;