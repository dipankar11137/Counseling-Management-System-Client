import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import User from "../../Hooks/User";

const AddSlots = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user] = User();
  console.log(user);

  const onSubmit = (data) => {
    const name = user?.name;
    const slots = [data.slot1, data.slot2, data.slot3, data.slot4];
    const updateData = { name, slots, user };

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
        toast.success("Successfully Add This Products");
        reset();
      });
    console.log(updateData);
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

            <input
              className="btn mt-5 w-full text-white"
              type="submit"
              value="ADD Slots"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSlots;
