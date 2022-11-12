import React from "react";

const ProductsCard = () => {
  return (
    <div className="products-card card w-96 bg-base-100 shadow-xl justify-self-center my-20">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Mangoes
          <div className="badge badge-secondary">20% Off</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <div className="badge badge-outline">Produce</div>
          <div className="badge badge-outline">Organic</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
