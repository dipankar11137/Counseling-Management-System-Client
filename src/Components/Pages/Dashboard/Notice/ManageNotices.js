import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import ManageNotice from './ManageNotice';

const ManageNotices = () => {
  const [users] = useAuthState(auth);
  const email = users?.email;
  const [notices, setNotice] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/notice/${email}`)
      .then(res => res.json())
      .then(data => setNotice(data));
  }, [email, notices]);
  const handleDelate = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/notices/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = notices.filter(product => product._id !== id);
          setNotice(remaining);
          toast.success('Successfully Remove');
        });
    }
  };
  return (
    <div className="p-3">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Notice</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {notices.map(notice => (
              <ManageNotice
                key={notices._id}
                notice={notice}
                handleDelate={handleDelate}
              ></ManageNotice>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageNotices;
