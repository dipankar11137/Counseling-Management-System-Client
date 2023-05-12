import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import MyApplied from "./MyApplied";

const MyApplieds = () => {
  const [users] = useAuthState(auth);
  const email = users?.email;
  const [counselings, setCounselings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/studentBooking/${email}`)
      .then((res) => res.json())
      .then((data) => setCounselings(data));
  }, [counselings, email]);
  console.log(counselings);
  const handleRemove = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `http://localhost:5000/bookings/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = counselings.filter((product) => product._id !== id);
          setCounselings(remaining);
          toast.success("Successfully Remove");
        });
    }
  };
  return (
    <div>
      <div className="mx-5 mt-3">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr className="text-center">
              <th>Teacher Name</th>
              <th>Date</th>
              <th>Slot</th>
              <th>Problem</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {counselings.map((counseling) => (
              <MyApplied
                key={counseling._id}
                counseling={counseling}
                handleRemove={handleRemove}
              ></MyApplied>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplieds;
