import React from "react";
import Hero from "./Hero";
import Vegetables from "../images/vegetables2.avif";
import Groceries from "../images/groceries.avif";

const Divider = () => {
  return (
    <div className="flex w-full">
      <div className="divider-1 grid h-20 flex-grow card bg-base-300 rounded-box place-items-center my-4 mx-4">
        <img className="divider-img" src={Groceries} alt="" />
        <h2>Hand picked ingredients fresh off the farm and stuff</h2>
        <button>Click me</button>
      </div>
      <div className="divider divider-horizontal">OR</div>
      <div className="divider-2 grid h-20 flex-grow card bg-base-300 rounded-box place-items-center my-4 mx-4">
        <img className="divider-img" src={Vegetables} alt="" />
        <h2>Fresh veggies 100% Locally grown from mexico</h2>
        <button>Click me</button>
      </div>
    </div>
  );
};

export default Divider;
