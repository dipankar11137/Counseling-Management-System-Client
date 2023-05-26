import React from 'react';
import Marquee from 'react-fast-marquee';

const Notice = () => {
  const notice = false;
  return (
    <div>
      {notice ? (
        <Marquee className='bg-green-300'>
          <h1 className='text-xl text-red-600 mr-10 p-3 font-bold'>
            {' '}
            I can be a React component, multiple React components, or just some
            text. I can be a React component, multiple React components, or just
            some text.
          </h1>
          <h1 className='text-xl text-red-600 mr-10 p-3 font-bold'>
            {' '}
            I can be a React component, multiple React components, or just some
            text. I can be a React component, multiple React components, or just
            some text.
          </h1>
          
        </Marquee>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Notice;