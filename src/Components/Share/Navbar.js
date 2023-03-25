import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [booking, setBooking] = useState([]);
  const [userss, setUsers] = useState([]);
  const users = userss[0];
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  useEffect(() => {
    if (users?.role === "Teacher") {
      fetch(`http://localhost:5000/booking/${email}`)
        .then((res) => res.json())
        .then((data) => setBooking(data));
    } else {
      fetch(`http://localhost:5000/studentBooking/${email}`)
        .then((res) => res.json())
        .then((data) => setBooking(data));
    }
  }, [users]);

  const handleBook = () => {
    // navigate("/myOrders");
    // navigate("/myOrders");
  };

  const menuItems = (
    <>
      {users?.role === "Student" ? (
        <li className="font-bold hover:text-orange-400">
          <Link to="/appointment">Appointment</Link>
        </li>
      ) : (
        <></>
      )}

      {user && (
        <li className="font-bold hover:text-orange-400">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="  navbar dark:bg-gray-800 dark:border-gray-700  text-white ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black "
          >
            {menuItems}
          </ul>
        </div>
        <h1 className="btn btn-ghost normal-case font-bold lg:text-3xl  sm:text-sm text-amber-500">
          Counseling Management System
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex lg:pr-36 ml-40">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      {/* Image */}
      <div className="navbar-end">
        <label
          onClick={handleBook}
          tabindex="0"
          className="btn btn-ghost btn-circle mr-3"
        >
          <div className="indicator">
            <FaBell className="text-2xl" />

            <span className="badge badge-sm indicator-item">
              {booking.length}
            </span>
          </div>
        </label>
        {user ? (
          <div className="dropdown dropdown-end  mr-5 pr-10">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {users?.image ? (
                  <img src={users?.image} alt="" />
                ) : (
                  <img
                    src="https://cdn.imgbin.com/6/25/24/imgbin-user-profile-computer-icons-user-interface-mystique-aBhn3R8cmqmP4ECky4DA3V88y.jpg"
                    alt=""
                  />
                )}
              </div>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-purple-900"
            >
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <Link to="/">Settings</Link>
              </li>

              <li className=" font-bold ">
                {user ? (
                  <button
                    className=" font-bold text-orange-500"
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        ) : (
          <ul className="mr-5">
            <li>
              <Link className="font-bold text-2xl pr-10 pl-5" to="/login">
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
