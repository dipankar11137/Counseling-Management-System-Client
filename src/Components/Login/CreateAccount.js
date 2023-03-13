import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import login from "../../Images/Login/login.jpg";

const CreateAccount = () => {
  const [role, setRole] = useState("Student");
  console.log(role);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let signInError;
  if (gUser) {
    navigate("/");
  }

  const createDBUser = (name, email, iId) => {
    const profile = { name, email, iId, role };
    console.log(profile);

    fetch(`http://localhost:5000/create-user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const onSubmit = (data) => {
    // createUserWithEmailAndPassword(data.email, data.password);
    // updateProfile({ displayName: data.name });
    createDBUser(data.name, data.email, data.iId);
    toast.success("Updated profile");
    // navigate("/");
  };
  return (
    <div className="flex justify-center  bg-slate-700">
      <div className="w-4/12 pt-40">
        <img className="w-11/12 rounded-xl" src={login} alt="" />
      </div>
      <div className="flex mt-5 mb-10 justify-center items-center  ">
        <div className="card w-96 shadow-xl bg-violet-50">
          <div className="card-body ">
            <h2 className="text-center text-2xl font-bold">SignUp</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Teacher Or student */}
              <select
                onChange={(e) => setRole(e.target.value)}
                className="select select-info w-full max-w-xs"
              >
                <option disabled selected>
                  Student
                </option>
                <option>Teacher</option>
                <option>Student</option>
              </select>
              {/* name */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered bg-white w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Email */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-white w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Id */}
              {role === "Student" ? (
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Student Id</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your Student ID"
                    className="input input-bordered bg-white w-full max-w-xs"
                    {...register("iId", {
                      required: {
                        value: true,
                        message: "ID is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.iId?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.iId.message}
                      </span>
                    )}
                    {errors.iId?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.iId.message}
                      </span>
                    )}
                  </label>
                </div>
              ) : (
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Teacher Id</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your Teachers ID"
                    className="input input-bordered bg-white w-full max-w-xs"
                    {...register("iId", {
                      required: {
                        value: true,
                        message: "ID is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.iId?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.iId.message}
                      </span>
                    )}
                    {errors.iId?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.iId.message}
                      </span>
                    )}
                  </label>
                </div>
              )}
              {/* password */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered bg-white w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className="btn w-full text-white"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              <small>
                Already Have an Account ?{" "}
                <Link to="/login" className="text-orange-600 font-bold">
                  Please Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
