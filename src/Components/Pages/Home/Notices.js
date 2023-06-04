import React, { useEffect, useState } from 'react';
import Notice from './Notice';

const Notices = () => {
  const [notices, setNotice] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/notices`)
      .then(res => res.json())
      .then(data => setNotice(data));
  }, [notices]);
  return (
    <div>
      {notices.map((notice, index) => (
        <Notice key={notice._id} notice={notice} index={index}></Notice>
      ))}
    </div>
  );
};

export default Notices;
