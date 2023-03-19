import React, { useEffect, useState } from "react";
import ManageCounseling from "./ManageCounseling";

const ManageCounselings = () => {
  const [counselings, setCounselings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings`)
      .then((res) => res.json())
      .then((data) => setCounselings(data));
  }, []);
  console.log(counselings);
  return (
    <div>
      <table className="table w-full">
        {/* head*/}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>ID</th>
            <th>Date</th>
            <th>Slot</th>
            <th>Phone</th>
            <th>Problem</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {counselings.map((counseling) => (
            <ManageCounseling
              key={counseling._id}
              counseling={counseling}
            ></ManageCounseling>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCounselings;
