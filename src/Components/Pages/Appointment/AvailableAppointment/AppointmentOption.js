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
            {option?.user?.image ? (
              <img src={option?.user?.image} alt="" />
            ) : (
              <img
                src="https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg"
                alt=""
              />
            )}
          </div>
        </div>

        <h2 className="card-title ">{name}</h2>
        <h2 className=" text-xl">Designation : Assistant Professor </h2>
        <h2 className="text-xl">Department : Department of CSE </h2>

        <p className="text-xl font-bold text-blue-600 text-center">
          {slots.length > 0 ? (
            slots[0]
          ) : (
            <span className="text-red-500">Try Another Day</span>
          )}
        </p>
        <p className="text-lg text-green-900 font-semibold text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"}
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setCounseling(option)}
            htmlFor="booking-modal"
            className="btn bg-indigo-700 text-white font-bold"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
