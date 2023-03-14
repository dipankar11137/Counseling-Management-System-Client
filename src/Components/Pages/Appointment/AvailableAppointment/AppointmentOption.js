import React from "react";

const AppointmentOption = ({ option }) => {
  const { name, slots } = option;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
