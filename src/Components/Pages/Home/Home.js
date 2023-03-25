import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Appointment from "../Appointment/Appointment/Appointment";
import Dashboard from "../Dashboard/Dashboard";

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
    <div>{users?.role === "Student" ? <Appointment /> : <Dashboard />}</div>
  );
};

export default Home;
