import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [userss, setUsers] = useState([]);
  const users = userss[0];

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/${email}`)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }
  }, [email]);
  return (
    <div className="bg-slate-100">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>

            <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
              <li>
                <div className="avatar online">
                  <div className="w-60 rounded-full">
                    {users?.image ? (
                      <img src={users?.image} alt="" />
                    ) : (
                      <img
                        src="https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg"
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </li>
              <hr />
              <li>
                <Link
                  to="/dashboard"
                  className="font-bold  text-xl hover:text-orange-600"
                >
                  Profile
                </Link>
              </li>
              <hr />
              {users?.role === "Teacher" && (
                <li>
                  <Link
                    to="/dashboard/addSlot"
                    className="font-bold  text-xl hover:text-orange-600"
                  >
                    Add Slots
                  </Link>
                </li>
              )}
              <hr />
              {users?.role === "Teacher" && (
                <li>
                  <Link
                    to="/dashboard/manageCounseling"
                    className="font-bold text-xl hover:text-orange-600"
                  >
                    Manage Counseling
                  </Link>
                </li>
              )}
              <hr />

              {users?.role === "Student" && (
                <li>
                  <Link
                    to="/dashboard/myApplied"
                    className="font-bold text-xl hover:text-orange-600"
                  >
                    My Applied
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
