import React from "react";
import Hero from "./Hero";
import Pig from "../images/pig.avif";

const Divider = () => {
  return (
    <div className="flex w-full">
      <div className="container divider-1 grid h-20 flex-grow card bg-base-300 rounded-box place-items-center my-4 mx-4">
        <img className="divider-1-inner" src={Pig} alt="" />
        content
        <div></div>
      </div>
      <div className="divider divider-horizontal">OR</div>
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center my-4 mx-4">
        content
      </div>
    </div>
  );
};

export default Divider;
