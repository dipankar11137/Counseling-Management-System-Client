import React from 'react';
import Marquee from 'react-fast-marquee';

const Notice = ({ notice, index }) => {
  return (
    <div className="mt-1 ">
      {notice ? (
        <>
          {index % 2 === 0 ? (
            <Marquee className="bg-green-300 rounded-lg">
              <h1 className="text-xl text-red-600 mr-10 p-3 font-bold">
                <span className="mr-5"> ***</span> {notice?.notice}
              </h1>
              <h1 className="text-xl text-red-600 mr-10 p-3 font-bold">
                {notice.user.name}
              </h1>
              <h1 className="text-xl text-red-600 mr-10 p-3 font-bold">
                {notice.date} <span className="ml-5">***</span>
              </h1>
            </Marquee>
          ) : (
            <Marquee className="bg-blue-400 rounded-lg">
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
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Notice;