// import React from 'react'

// const Card = ({icon, heading, text}) => {
//   return (
//     <div className='flex flex-col bg-white text-[15px] p-5 min-w-[250px] max-w-[400px] w-full rounded-lg gap-2 shadow-blue-050'>
//       <div className='text-blue-500'>{icon}</div>
//       <div className='font-bold'>{heading}</div>
//       <div className='font-normal text-gray-400 text-[12px]'>{text}</div>
//     </div>
//   )
// }

// export default Card

import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ icon, heading, text }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-heading">{heading}</div>
      <div className="card-text">{text}</div>
    </div>
  );
};

export default Card;
