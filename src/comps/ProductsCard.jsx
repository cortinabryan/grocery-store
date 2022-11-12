import React from "react";

const ProductsCard = () => {
  return (
    <div className="products-card card w-96 bg-base-100 shadow-xl justify-self-center my-20">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Mangoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Mangoes
          <div className="badge badge-secondary">20% Off</div>
        </h2>
        <p>Hand pick mangoes from my mom's backyard</p>
        <div className="card-actions justify-center">
          <div className="badge badge-outline badge-primary">Produce</div>
          <div className="badge badge-outline badge-primary">Organic</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
