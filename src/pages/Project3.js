import React from 'react';

import Mouse from "../Components/Mouse";
import Navigation from "../Components/Navigation";
import Logo from "../Components/Logo";
import Buttons from "../Components/Buttons";
import Project from "../Components/Project";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <Buttons left={"/projet-2"} right={"/projet-4"} />
      </div>
    </main>
  );
};

export default Project3;