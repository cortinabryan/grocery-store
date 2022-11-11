import React from "react";
import Card from "./Card";

const Categories = () => {
  return (
    <div className="Categories mt-5">
      <h2 className="mb-5 text-5xl font-bold text-center text-primary">
        Categories
      </h2>
      <div className="Cards flex flex-row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Categories;
