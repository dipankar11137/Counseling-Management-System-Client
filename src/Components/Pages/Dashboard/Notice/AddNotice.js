import React from 'react';
import { useForm } from 'react-hook-form';
import User from '../../../Hooks/User';

const AddNotice = () => {
  const [user] = User();
  // console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    //  const name = user?.name;
    //  const email = user?.email;
    const updateData = { ...data, user: user };

    // const url = `http://localhost:5000/appointments`;
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(updateData),
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     toast.success('Successfully Add This Slots');
    //     reset();
    //   });
    console.log(updateData);
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="shadow-lg mt-5 p-4 bg-white rounded-lg mb-20">
          <form
            className=" flex justify-center gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <h1 className="text-3xl  text-center font-bold mb-3">
                Write Complain
              </h1>

              {/* date */}
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered bg-white  sm:w-full  hover:shadow-xl shadow-inner"
                {...register('date', {
                  required: {
                    value: true,
                    size: 20,
                    message: 'Date is Required',
                  },
                })}
              />
              <label className="label">
                {errors.date?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors?.date?.message}
                  </span>
                )}
              </label>

              {/* Notice */}
              <label className="label">
                <span className="label-text">Notice</span>
              </label>
              <textarea
                type="textarea"
                placeholder="Write Your Notice"
                className="input input-bordered bg-white lg:w-96 h-28 sm:w-full  hover:shadow-xl shadow-inner"
                {...register('notice', {
                  required: {
                    value: true,
                    message: 'Notice is Required',
                  },
                })}
              />
              <label className="label">
                {errors.notice?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors?.notice?.message}
                  </span>
                )}
              </label>

              {/* submit */}

              <input
                className="btn mt-5 w-full text-white"
                type="submit"
                value="SUBMIT"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNotice;
