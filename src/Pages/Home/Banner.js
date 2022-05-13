import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/BfB3GZG/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl"
          src="https://i.ibb.co/NsPPJ4J/chair.png"
          alt=""
        />
        <div className="text-left mr-5">
          <h1 className="text-5xl font-bold">
            Your New Smile Starts <br /> Here
          </h1>
          <p className="my-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut <br />{" "}
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
