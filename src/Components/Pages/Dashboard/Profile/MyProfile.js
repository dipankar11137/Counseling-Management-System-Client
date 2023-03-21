import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import { FaEdit } from "react-icons/fa";
import User from "../../../Hooks/User";

const MyProfile = () => {
  const [edit, setEdit] = useState(false);
  const [authUser] = useAuthState(auth);
  const [users, setUser] = useState([]);
  const user = users[0];
  //   console.log(user);
  //   const [user] = User();
  //   console.log(user?.email);
  //   console.log(users[0]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${authUser?.email}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [user]);
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    console.log(e.target.bio.value);
    const name = e.target.name.value || user.name;
    const birthday = e.target.birthday.value || user.birthday;
    const phone = e.target.phone.value || user.phone;
    const sex = e.target.sex.value || user.sex;
    // const designation = e.target.name.value || user?.designation;
    // const department = e.target.department.value || user?.department;
    const bio = e.target.bio.value || user.bio;
    const image = e.target.photo.value || user.photo;

    // console.log(name, birthday, phone, sex, bio, photo);
    const updatedProfile = {
      name,
      birthday,
      phone,
      sex,
      bio,
      image,
      //   designation,
      //   department,
    };
    console.log(updatedProfile);
    fetch(`http://localhost:5000/create-user/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Profile Successfully Updated");
        e.target.reset();
        setEdit(false);
        // refetch();
      });
  };
  return (
    <div className="w-full md:flex">
      <div className="indicator bg-white rounded  m-4 w-1/3 h-fit  mt-40">
        <div className="-mt-6 ">
          {/* <img
                className="mask mask-pentagon indicator-item indicator-center bg-cyan-500 -mt-6 w-40"
                src={user?.photo || profilePic}
                alt=""
              /> */}

          <img
            style={{ margin: "-30px" }}
            className=" w-56 h-56 indicator-item indicator-center rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 "
            // src={user?.photo || profilePic}
            src={user?.image}
            alt=""
          />
        </div>
        <div className="mt-16 pl-4 w-full ">
          <div className="text-left py-8">
            <div className="flex items-baseline justify-between">
              <p className="font-bold w-1/3">Name</p>
              <span className="w-2/3">: {user?.name}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Email</p>
              <span className="w-2/3">: {user?.email}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Birthday</p>
              <span className="w-2/3">: {user?.birthday}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Phone</p>
              <span className="w-2/3">: {user?.phone}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Sex</p>
              <span className="w-2/3">: {user?.sex}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Bio</p>
              <span className="w-2/3">: {user?.bio}</span>
            </div>
            {/* <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Designation </p>
              <span className="w-2/3">: {user?.bio}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <p className="font-bold w-1/3">Department </p>
              <span className="w-2/3">: {user?.bio}</span>
            </div> */}
          </div>
          <button
            onClick={() => setEdit(true)}
            className="btn text-4xl border-0 w-2/3 my-6"
          >
            <FaEdit />
          </button>
        </div>
      </div>

      {edit && (
        <div className="w-2/3 bg-white rounded m-4 p-4 h-fit">
          <p className="text-2xl font-bold text-cyan-600 border-b-2 inline p-1">
            Update Your Profile
          </p>

          <form onSubmit={handleProfileUpdate}>
            <div className="mt-8">
              <div className="flex gap-4 justify-between">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>
                  <input
                    name="birthday"
                    type="date"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
              {/* contact and sex */}
              <div className="flex gap-4 justify-between mt-4">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Contact</span>
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Sex</span>
                  </label>
                  <select
                    name="sex"
                    className="select select-sm select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      {user?.sex}
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Common</option>
                  </select>
                </div>
              </div>
              {/* Deg and def */}
              {/* <div className="flex gap-4 justify-between">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Bio</span>
                  </label>
                  <input
                    name="bio"
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>
                  <input
                    name="birthday"
                    type="date"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                  />
                </div>
              </div> */}
              {/* bio  */}
              <div className="flex gap-4 justify-between mt-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Bio</span>
                  </label>
                  <textarea
                    name="bio"
                    type="text"
                    placeholder="Type here"
                    className="textarea textarea-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Profile Picture Link</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Type here"
                  className="input input-sm input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn bg-cyan-500 hover:bg-cyan-600 border-0 my-4"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
