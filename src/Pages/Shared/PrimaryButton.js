import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div className="pb-5">
      <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary ">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
