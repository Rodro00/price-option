/* eslint-disable no-undef */
import React from 'react';
import Feature from '../Features/Feature';

const Price = ({option}) => {
  const {name,price,features} = option;
  // console.log(option)
  return (
    <div className='bg-blue-500 rounded-md p-8 flex flex-col'>
     <h1 className='text-center text-white my-2'>
      <span className='text-5xl font-bold '>{price}</span>
      <span className='text-2xl'>/mon</span>
     </h1>
     <h4 className='text-2xl text-center text-white mb-2'>{name}</h4>
     <div className='m-12 flex-grow'>
     {
        features.map(feature=><Feature feature={feature}></Feature>)
     }
     </div>
     <button className='text-white text-2xl bg-green-600 w-full font-bold rounded-lg m-2'>Buy Now</button>
    </div>
  );
};


export default Price;