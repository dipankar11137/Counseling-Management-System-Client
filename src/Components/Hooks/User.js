import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const User = () => {
  const [users] = useAuthState(auth);
  const email = users?.email;
  const [getUser, setGetUser] = useState([]);
  // console.log(getUser);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/${email}`)
        .then((res) => res.json())
        .then((data) => setGetUser(data));
    }
  }, [email]);
  return [getUser[0]];
};

export default User;
