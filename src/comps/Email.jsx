import React from "react";

const Email = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div
        className="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1607863680151-1da3e60691bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80	")`,
        }}
      >
        <h2 className="mb-5 text-5xl font-bold text-white">
          Sign up to our Email List to get more Deals!
        </h2>
        <p className="">
          When you sign up to our mailing list you get email notifcations of
          discounts, promos and latest news. We will not spam you!
        </p>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div>
    </div>
  );
};

export default Email;
