import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({date, setDate}) => {
 
  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/BfB3GZG/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/NsPPJ4J/chair.png"
          className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl h-80"
          alt=""
        />
        <div className="card px-6 shadow-xl mr-10">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
