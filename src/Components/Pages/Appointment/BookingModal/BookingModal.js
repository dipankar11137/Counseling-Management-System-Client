import { format } from "date-fns";
import React from "react";

const BookingModal = ({ counseling, selectDate }) => {
  const date = format(selectDate, "PP");
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
          <h3 className="text-lg font-bold">{counseling.name}</h3>
          <form>
            <input
              type="text"
              value={date}
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs mt-6"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs mt-2"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs mt-2"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs mt-2"
            />
            <input
              type="text"
              placeholder="Type here"
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
