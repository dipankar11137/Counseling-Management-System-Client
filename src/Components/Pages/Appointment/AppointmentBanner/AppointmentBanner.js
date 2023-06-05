import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Notices from '../../Home/Notices';
import FinalRoutine from './FinalRoutine';

const AppointmentBanner = ({ selectDate, setSelectDate }) => {
  const today = new Date();
  const disabledDates = {
    before: today,
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayClick = date => {
    setSelectedDate(date);
  };

  const disabledDate = {
    before: new Date(),
  };

  return (
    <header>
      <div className="hero mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-x-14">
          <div className="w-[500px] overflow-hidden">
            <Notices />
          </div>
          <img
            src="https://media.istockphoto.com/id/1080232656/photo/female-teacher-pointing-with-finger-at-mathematical-equation-on-chalkboard-in-class.jpg?s=612x612&w=0&k=20&c=F3T62Mo1lj0n0vP44gAPDuv52h2ZrB4ggNAFdGnA2M0="
            alt="teacher"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-20 font-bold">
            {/* Pick This day */}
            <DayPicker
              mode="single"
              selected={selectDate}
              onSelect={setSelectDate}
              // disable
              // disabledDays={{ after: today }}
              // disabledDays={disabledDate}
              disabledDays={disabledDates}
              className="bg-white rounded-lg shadow p-4"
              inputProps={{ className: 'w-full rounded-lg px-3 py-2' }}
              classNames={{
                container: 'relative',
                overlay: 'fixed inset-0 bg-black opacity-50',
                month: 'text-center font-semibold text-lg mb-2',
                weekdays: 'flex justify-center border-b pb-2',
                weekdaysRow: 'text-sm',
                weekday: 'w-12 py-1',
                body: 'text-center',
                day: 'w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200',
                today: 'bg-blue-500 text-white',
                selected: 'bg-blue-200',
                disabled: 'text-gray-400 cursor-not-allowed',
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-40">
        <FinalRoutine />
      </div>
    </header>
  );
};

export default AppointmentBanner;
