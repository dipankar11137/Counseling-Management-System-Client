import React, { useState } from "react";
import Notice from "../../Home/Notice";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <div>
      <Notice/>
      <AppointmentBanner
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      />
      <AvailableAppointment selectDate={selectDate} />
    </div>
  );
};

export default Appointment;
