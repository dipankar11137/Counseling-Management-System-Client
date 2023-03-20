import React from "react";

const MyApplied = ({ counseling, handleRemove }) => {
  return (
    <tr className="text-center">
      <td className="border-r-2">{counseling?.teacherName}</td>
      <td className="border-r-2">{counseling?.appointmentDate}</td>
      <td className="border-r-2">{counseling?.slot}</td>
      <td className="border-r-2">{counseling?.problem}</td>

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

export default MyApplied;
