import React, { useState } from "react";
import Notices from '../../Home/Notices';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <div>
      <Notices />
      <AppointmentBanner
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      />
      <AvailableAppointment selectDate={selectDate} />
    </div>
  );
};

export default Appointment;
