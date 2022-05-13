import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const ServiceCard = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/pJtGzyV/treatment.png"
          className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="text-left">
          <h1 className="text-5xl font-bold">
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p className="my-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
            <br />
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            excepturi exercitationem quasi.
            <br /> In deleniti eaque aut repudiandae et excepturi exercitationem
            quasi.
            <br /> In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
