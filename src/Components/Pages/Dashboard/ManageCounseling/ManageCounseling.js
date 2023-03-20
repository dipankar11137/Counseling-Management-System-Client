import React, { useState } from "react";

const ManageCounseling = ({ counseling, handleRemove }) => {
  const [action, setAction] = useState(false);
  console.log(action);
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
        {action ? (
          <button className="text-blue-800 font-bold text-xl ">Accepted</button>
        ) : (
          <button
            onClick={() => setAction("true")}
            className=" text-white px-4 py-1 rounded-lg font-bold bg-green-800 uppercase hover:bg-green-600"
          >
            Accept
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleRemove(counseling?._id)}
          className="btn btn-sm"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ManageCounseling;
