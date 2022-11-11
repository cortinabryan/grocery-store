import React from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="products mt-5">
      <h2 className="mb-5 text-5xl font-bold text-center text-primary">
        Products
      </h2>
      <div className="products-inner grid grid-cols-3 bg-base-300">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
    </div>
  );
};

export default Products;
