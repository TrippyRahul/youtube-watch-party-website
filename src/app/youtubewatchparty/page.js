import React from "react";
import Benefits from "../components/Benefits";
import Favorite from "../components/Favorite";
import Work from "../components/Work";
import About from "../components/About";
import Accordian from "../components/Accordian";

const page = () => {
  return (
    <>
      <Benefits />
      <Favorite />
      <Work />
      <About />
      <Accordian />
    </>
  );
};

export default page;
