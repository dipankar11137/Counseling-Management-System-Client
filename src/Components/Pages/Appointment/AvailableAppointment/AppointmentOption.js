import React from "react";

const AppointmentOption = ({ option, setCounseling }) => {
  const { name, slots } = option;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="avatar">
          <div
            style={{ marginTop: "-145px" }}
            className="w-72 ml-5 mb-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          >
            <img
              src="https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg"
              alt=""
            />
          </div>
        </div>

        <h2 className="card-title ">{name}</h2>
        <h2 className=" text-xl">Designation : Assistant Professor </h2>
        <h2 className="text-xl">Department : Department of CSE </h2>

        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setCounseling(option)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
