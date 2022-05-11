import React from "react";
import Service from "./Service";
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceCard from "./ServiceCard";

const Services = () => {
    const services = [
        {
            _id:1,
            name:'Fluoride Treatment',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
            img:fluoride
        },
        {
            _id:2,
            name:'Cavity Filling',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
            img:cavity
        },
        {
            _id:3,
            name:'Teeth Whitening',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.',
            img:whitening

        },
    ]
  return (
    <div className="my-28">
      <div className=" uppercase ">
        <h3 className="text-primary font-bold text-xl">Our services</h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            services.map(service=><Service
                key={service._id}    
                service={service}    
            ></Service>)
        }
      </div>
      <div>
        <ServiceCard></ServiceCard>
      </div>
      </div>
  );
};

export default Services;
