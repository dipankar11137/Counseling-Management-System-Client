import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div className="mt-6">
      <p className="text-xl text-center mt-10 text-green-900 font-semibold">
        Available Appointment on {format(selectDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
          ></AppointmentOption>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;