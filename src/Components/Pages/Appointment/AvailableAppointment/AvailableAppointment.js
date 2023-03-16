import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [counseling, setCounseling] = useState(null);

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: () =>
      fetch("http://localhost:5000/appointments").then((res) => res.json()),
  });

  //   const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
  //     queryKey: ['appointmentOptions', date],
  //     queryFn: async () => {
  //         const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`);
  //         const data = await res.json();
  //         return data
  //     }
  // });
  // useEffect(() => {
  //   fetch("services.json")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  return (
    <section className="mt-6">
      <p className="text-xl text-center mt-10 text-green-900 font-semibold">
        Available Appointment on {format(selectDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setCounseling={setCounseling}
          ></AppointmentOption>
        ))}
      </div>
      {counseling && (
        <BookingModal
          key={counseling?._id}
          counseling={counseling}
          selectDate={selectDate}
          setCounseling={setCounseling}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
