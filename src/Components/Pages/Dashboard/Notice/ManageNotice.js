import React from 'react';

const ManageNotice = ({ notice, handleDelate }) => {
  return (
    <tr>
      <th>{notice?.user?.name}</th>
      <td>{notice?.date}</td>
      <td>{notice?.notice}</td>
      <td>
        <button onClick={() => handleDelate(notice._id)} className="btn">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageNotice;
