import React from "react";

const MyApplied = ({ counseling, handleRemove }) => {
  return (
    <tr className="text-center">
      <td className="border-r-2">{counseling?.teacherName}</td>
      <td className="border-r-2">{counseling?.appointmentDate}</td>
      <td className="border-r-2">{counseling?.slot}</td>
      <td className="border-r-2">{counseling?.problem}</td>
      {/* <td className="border-r-2">
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
    </td> */}
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
