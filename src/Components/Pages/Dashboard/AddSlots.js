import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import User from "../../Hooks/User";
import { useState } from "react";

const AddSlots = () => {
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [day3, setDay3] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user] = User();
  //   console.log(user);

  const onSubmit = (data) => {
    const name = user?.name;
    const email = user?.email;
    const slots = [data.slot1, data.slot2, data.slot3, data.slot4];
    const updateData = { name, email, slots, user, day1, day2, day3 };

    const url = `http://localhost:5000/appointments`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Add This Slots");
        reset();
      });
    // console.log(updateData);
  };
  return (
    <div className=" pb-20 mx-20">
      <h2 className="mt-5 ml-10 font-bold text-4xl text-center text-orange-500 uppercase">
        Please Add A Counseling Time
      </h2>
      <div className="bg-indigo-200 p-5 rounded-2xl py-20 mt-5 ml-5 ">
        <form
          className=" flex justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="label">
              <span className="text-2xl font-semibold">{user?.name}</span>
            </label>
            {/* select */}
            {/* <label className="label">
              <span className="text-2xl font-semibold">
                Select Your Off Day
              </span>
            </label> */}
            <select
              onChange={(e) => setDay1(e.target.value)}
              className=" text-xl font-semibold select select-primary w-full lg:w-96"
            >
              <option disabled selected>
                Select Your Off Day
              </option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
            <br />
            {/* select 2 */}

            <select
              onChange={(e) => setDay2(e.target.value)}
              className=" text-xl font-semibold select select-primary w-full lg:w-96 mt-3"
            >
              <option disabled selected>
                Select Your Off Day
              </option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
            <br />
            {/* select 3 */}
            <select
              onChange={(e) => setDay3(e.target.value)}
              className=" text-xl font-semibold select select-primary w-full lg:w-96 mt-3"
            >
              <option disabled selected>
                Select Your Off Day
              </option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
            {/* slots */}
            <label className="label">
              <span className="text-2xl font-semibold">Add Slots Time</span>
            </label>
            <input
              type="text"
              placeholder="00.00 AM/PM - 00.00 AM/PM"
              className="input input-bordered bg-white lg:w-96 sm:w-full  hover:shadow-xl shadow-inner  mt-2"
              {...register("slot1", {
                required: {
                  value: true,
                  message: "All Slots is Required",
                },
              })}
            />
            <br />
            <input
              type="text"
              placeholder="00.00 AM/PM - 00.00 AM/PM"
              className="input input-bordered bg-white lg:w-96 sm:w-full  hover:shadow-xl shadow-inner mt-2"
              {...register("slot2", {
                required: {
                  value: true,
                  message: "All Slots is Required",
                },
              })}
            />
            <br />
            <input
              type="text"
              placeholder="00.00 AM/PM - 00.00 AM/PM"
              className="input input-bordered bg-white lg:w-96 sm:w-full  hover:shadow-xl shadow-inner mt-2"
              {...register("slot3", {
                required: {
                  value: true,
                  message: "All Slots is Required",
                },
              })}
            />
            <br />
            <input
              type="text"
              placeholder="00.00 AM/PM - 00.00 AM/PM"
              className="input input-bordered bg-white lg:w-96 sm:w-full  hover:shadow-xl shadow-inner mt-2"
              {...register("slot4", {
                required: {
                  value: true,
                  message: "All Slots is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xl font-semibold">
                  {errors?.name?.message}
                </span>
              )}
            </label>
            {/* submit */}

            {day1 || day2 || day3 ? (
              <input
                className="btn mt-5 w-full text-white"
                type="submit"
                value="ADD Slots"
              />
            ) : (
              <input
                className="btn mt-5 w-full text-white"
                disabled
                type="submit"
                value="ADD Slots"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSlots;
