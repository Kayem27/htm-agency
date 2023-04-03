import React from "react";
import Navigation from "../Components/Navigation";
import Mouse from "../Components/Mouse";
import SocialNetwork from "../Components/SocialNetwork";
import DynamicText from "../Components/DynamicText";
import Buttons from "../Components/Buttons";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x:0,
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.3},
      x: -100,
    }

  };
  return (
    <div>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              // onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                bottom: 250,
              }}
            >
              HTM AGENCY
            </motion.h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </motion.div>
    </div>
  );
};

export default Home;
