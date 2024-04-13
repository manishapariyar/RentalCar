import React from 'react'
import { RxCross1 } from "react-icons/rx";

const Model = ({OnClose, isOpen, children}) => {

  return (
   <>

  {isOpen && ( 
  <>
  
  <div className='z-50 relative min-h-[200px] md:max-w-[60%]  max-w-[80%] bg-blue-100 m-auto bottom-96 md:bottom-70 text-black'>
    
    <div className='flex justify-end bg-blue-50'>
     
    <RxCross1 onClick={OnClose} className="text-black text-2xl self-end m-3 " />
    
    </div>
    {children}
    </div>
    <div onClick={OnClose} className='absolute top-0 z-40 h-screen w-full backdrop-blur'/>
  </>)}
 
   </>
  )
}

export default Model
