import React from 'react';
import { FaEye } from 'react-icons/fa';

const FinalRoutine = () => {
  return (
    <div>
      <a
        href="https://drive.google.com/file/d/1S9rIx5WXL-8jbA5E3YDNABBdWrIpvAEN/view?usp=sharing"
        target="_blank"
        className="btn btn-secondary text-white px-6 py-2 rounded-lg text-xl font-bold"
        rel="noreferrer"
      >
        Show Seat Plan <FaEye className="ml-4 text-2xl " />
      </a>
    </div>
  );
};

export default FinalRoutine;
