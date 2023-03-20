import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                    <img
                      src="https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg"
                      alt=""
                    />
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
              <li>
                <Link
                  to="/dashboard/addSlot"
                  className="font-bold  text-xl hover:text-orange-600"
                >
                  Add Slots
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  to="/dashboard/manageCounseling"
                  className="font-bold text-xl hover:text-orange-600"
                >
                  Manage Counseling
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  to="/dashboard/manageCounseling"
                  className="font-bold text-xl hover:text-orange-600"
                >
                  My Applied
                </Link>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
