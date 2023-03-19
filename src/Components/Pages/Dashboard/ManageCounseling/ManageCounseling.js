import React from "react";

const ManageCounseling = ({ counseling }) => {
  return (
    <tr>
      <th>
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={counseling?.studentImg} alt="img" />
          </div>
        </div>
      </th>
      <td>{counseling?.studentName}</td>
      <td>{counseling?.studentID}</td>
      <td>{counseling?.appointmentDate}</td>
      <td>{counseling?.slot}</td>
      <td>{counseling?.phone}</td>
      <td>{counseling?.problem}</td>
      <td>
        <button className="btn btn-sm font-bold">Accept</button>
      </td>
    </tr>
  );
};

export default ManageCounseling;
