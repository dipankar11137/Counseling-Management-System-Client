import React, { useEffect, useState } from "react";

const ManageCounselings = () => {
  const [counselings, setCounselings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings`)
      .then((res) => res.json())
      .then((data) => setCounselings(data));
  }, []);
  return (
    <div>
      <h1>Hello{counselings.length}</h1>
    </div>
  );
};

export default ManageCounselings;
