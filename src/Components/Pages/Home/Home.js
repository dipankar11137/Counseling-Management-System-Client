import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Appointment from "../Appointment/Appointment/Appointment";
import Dashboard from "../Dashboard/Dashboard";
import Name from "./Name";

const Home = () => {
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
    <div>
      <div>
        {/* <Name /> */}
        <div className="grid grid-cols-2   ">
          <div className="flex justify-center p-4 ">
            <h1
              style={{ boxShadow: "0px 5px 10px blue" }}
              className="text-8xl uppercase text-center pt-28 font-extrabold items-center rounded-xl"
            >
              Welcome to our web App <br /> <Name />
            </h1>
          </div>
          <div className="p-4">
            <img
              style={{ boxShadow: "0px 5px 10px blue", height: "600px" }}
              className="rounded-xl"
              // style={{ height: "600px" }}
              src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1659634197/BestColleges.com/BC_What-Is-Student-Teaching_247733fd61/BC_What-Is-Student-Teaching_247733fd61.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    // <div>{users?.role === "Student" ? <Appointment /> : <Dashboard />}</div>
  );
};

export default Home;
