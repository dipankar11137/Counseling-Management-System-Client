import React from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({ selectDate, setSelectDate }) => {
  return (
    <header>
      <div className="hero mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media.istockphoto.com/id/1080232656/photo/female-teacher-pointing-with-finger-at-mathematical-equation-on-chalkboard-in-class.jpg?s=612x612&w=0&k=20&c=F3T62Mo1lj0n0vP44gAPDuv52h2ZrB4ggNAFdGnA2M0="
            alt="teacher"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-20">
            {/* Pick This day */}
            <DayPicker
              mode="single"
              selected={selectDate}
              onSelect={setSelectDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
