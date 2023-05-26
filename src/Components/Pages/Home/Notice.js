import React from 'react';
import Marquee from 'react-fast-marquee';

const Notice = ({ notice }) => {
  return (
    <div>
      {notice ? (
        <Marquee className="bg-green-300">
          <h1 className="text-xl text-red-600 mr-10 p-3 font-bold">
            <span className="mr-5">***</span> {notice?.notice}
          </h1>
          <h1 className="text-xl text-red-600 mr-10 p-3 font-bold">
            {notice.user.name}
          </h1>
          <h1 className="text-xl text-red-600 mr-10 p-3 font-bold">
            {notice.date} <span className="ml-5">***</span>
          </h1>
          <h1 className="text-xl text-red-600 mr-10 p-3 font-bold">
            <span className="mr-5">***</span> {notice?.notice}
          </h1>
          <h1 className="text-xl text-red-600 mr-10 p-3 font-bold">
            {notice.user.name}
          </h1>
          <h1 className="text-xl text-red-600 mr-10 p-3 font-bold">
            {notice.date} <span className="ml-5">***</span>
          </h1>
        </Marquee>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Notice;