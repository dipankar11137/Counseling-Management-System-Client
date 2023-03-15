import { format } from "date-fns";
import React from "react";

const BookingModal = ({ counseling, selectDate, setCounseling }) => {
  const date = format(selectDate, "PP");
  const { name, slots } = counseling;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const sName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const update = {
      appointmentDate: date,
      slot,
      teacherName: name,
      studentName: sName,
      email,
      phone,
    };
    console.log(update);
    setCounseling(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              value={date}
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs mt-6"
            />
            <select
              name="slot"
              className="select select-bordered select-primary mt-3 w-full max-w-xs"
            >
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered input-primary w-full max-w-xs mt-2"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="input input-bordered input-primary w-full max-w-xs mt-2"
            />
            <input
              name="phone"
              type="phone"
              placeholder="You phone number"
              className="input input-bordered input-primary w-full max-w-xs mt-2"
            />

            <input
              className="w-full mt-2 btn max-w-xs"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
