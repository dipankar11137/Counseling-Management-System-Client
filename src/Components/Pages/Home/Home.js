import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Appointment from "../Appointment/Appointment/Appointment";
import Dashboard from "../Dashboard/Dashboard";
import MyProfile from "../Dashboard/Profile/MyProfile";

const Home = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [userss, setUsers] = useState([]);
  const users = userss[0];
  console.log(users);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/${email}`)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }
  }, [users]);
  return (
    <div>{users?.role === "Teacher" ? <Dashboard /> : <Appointment />}</div>
  );
};

export default Home;
