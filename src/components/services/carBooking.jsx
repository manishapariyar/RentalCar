import React from 'react'
import { BiCommentDetail } from 'react-icons/bi';

const CarBooking = ({name,img}) => {
  const overlayStyles= `p-5 m-2 absolute z-30 flex
  h-[230px] w-[290px] flex-col items-center justify-center
  whitespace-normal bg-blue-100 
  opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <div className="relative  inline-block ">
    <div className={overlayStyles}>
      <p className="text-2xl text-black">{name}</p>
     <BiCommentDetail  className="text-2xl text-black"/>
    </div>
    <img
       // Remember to add a unique key for each element in a list
      className="  relative md:w-[300px] w-[390px] p-1 m-1 inline-block md:p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
      src={img}
      alt="car"
    />
    
  </div>
  )
}

export default CarBooking
