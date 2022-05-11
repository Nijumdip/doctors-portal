import React from "react";

const InfoCard = ({img, cardTitle, cardInfo, bgClass}) => {
  return (
    <div class={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass} mt-2 shadow-2xl`}>
      <figure className="pl-5">
        <img src={img} alt="Album"/>
      </figure>
      <div class="card-body text-left">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardInfo}</p>
      </div>
    </div>
  );
};

export default InfoCard;
