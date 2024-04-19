import React from 'react'
import reviewStar from "../../assets/ReviewerImg/reviewStar.png";
const RevierwBox = ({name,image,review}) => {
  return (
  <div className='relative inline-block'>
      <div className=" relative flex flex-col items-center gap-3 md:w-[300px] w-[250px]  bg-white h-[200px] p-6 border-2 border-gray-500 rounded-sm ">
    <div className=" flex flex-row gap-3 ">
      <img src={image} className="w-10 rounded-full h-10" />
      <div className="flex flex-col ml-6">
        <img src={reviewStar} alt="" className="h-4 " />
        <p className="text-black text-center font-serif font-bold">
          {name}
        </p>
      </div>
    </div>
     <div className="  w-[100%] h-[100%] flex flex-col justify-center items-center   ">
      <p className="text-black font-serif text-sm  text-wrap leading-2 mt-2
      ">{review}</p>
       <div className="flex self-end ">
       <p className="text-black font-serif text-xs">
          {name} -
        </p>
       <p className="text-black self-end text-xs">2024/3/33</p>
       </div>
     </div>
       
  </div>
  </div>
  )
}

export default RevierwBox
