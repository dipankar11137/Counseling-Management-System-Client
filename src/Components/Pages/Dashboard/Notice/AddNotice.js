import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
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
    const updateData = { ...data, user: user, email: user.email };

    const url = `http://localhost:5000/notices`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Successfully Add Notice');
        reset();
      });
    // console.log(updateData);
  };
  return (
    <div>
      <div className="flex justify-center mt-20">
        <div className="shadow-lg mt-5 p-4 bg-white rounded-lg mb-20">
          <form
            className=" flex justify-center gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <h1 className="text-3xl  text-center font-bold mb-3">
                Write Your Reason For Notice
              </h1>

              {/* date */}
              <label className="label">
                <span className="label-text text-xl font-bold">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered bg-white  w-full  hover:shadow-xl shadow-inner text-xl"
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
                <span className="label-text text-xl font-bold">Notice</span>
              </label>
              <textarea
                type="textarea"
                placeholder="Write Your Notice"
                className="input input-bordered bg-white  h-28 sm:w-full  hover:shadow-xl shadow-inner text-xl"
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
