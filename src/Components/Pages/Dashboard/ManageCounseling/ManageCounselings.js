import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import ManageCounseling from "./ManageCounseling";

const ManageCounselings = () => {
  const [users] = useAuthState(auth);
  const email = users?.email;
  const [counselings, setCounselings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${email}`)
      .then((res) => res.json())
      .then((data) => setCounselings(data));
  }, [counselings]);

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
    <div className="mx-5 mt-3">
      <table className="table w-full">
        {/* head*/}
        <thead>
          <tr className="text-center">
            <th></th>
            <th>Student Name</th>
            <th>ID</th>
            <th>Date</th>
            <th>Slot</th>
            <th>Phone</th>
            <th>Problem</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {counselings.map((counseling) => (
            <ManageCounseling
              key={counseling._id}
              counseling={counseling}
              handleRemove={handleRemove}
            ></ManageCounseling>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCounselings;
