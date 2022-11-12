import React from "react";

const Card = () => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl image-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Produce</h2>
        <p>Up to 20% Off!</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="card lg:card-side bg-base-300 shadow-xl mx-4 my-4">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Produce</h2>
        <p>Up to 25% Off</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">See More</button>
        </div>
      </div>
    </div> */
}
