import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
  // console.log(feature)
  return (
    <div className='gap-4 text-white '>
     
      <p className='items-center flex gap-4 '><AiFillCheckCircle className='text-green-500'></AiFillCheckCircle>{feature}</p>
    </div>
  );
};

export default Feature;