import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
            <h2 className=" text-xl font-bold text-secondary">{name}</h2>
            <p>
                {
                    slots.length > 0
                    ? <span>{slots[0]}</span>
                    :<span  className="text-red-500">Try Another Day</span>
                }
            </p>
            <p>{slots.length} {slots.length > 1 ?"spaces": "space"} available </p>
            <div className="card-actions justify-center">
                  <label
                      htmlFor="booking-modal"
                      className="btn btn-sm btn-secondary uppercase text-white bg-gradient-to-r from-secondary to-primary"
                      onClick={()=>setTreatment(service)} disabled={slots.length === 0}
                  >Book Appointment</label>
            </div>
      </div>
    </div>
  );
};

export default Service;
