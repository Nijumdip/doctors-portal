import React from "react";

const ServiceCard = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/pJtGzyV/treatment.png"
          class="max-w-sm rounded-lg shadow-2xl" alt=""/>
        <div className='text-left mr-5'>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br />
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et 
            excepturi exercitationem quasi.<br /> In deleniti eaque aut repudiandae et
            excepturi exercitationem quasi.<br /> In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
      </div>
  );
};

export default ServiceCard;
