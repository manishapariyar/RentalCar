import React from 'react'
import car1 from '../../assets/car1.png'
const About = () => {
  return (
    <div className='dark:bg-dark bg-blue-50 sm:min-h-[600px] sm:grid sm:place-items-center mt-4 '>
     <div className="container">
      <div className="flex justify-between items-center flex-col md:flex md:flex-row md:justify-between">
       <div className="">
       <img src={car1} alt="" />
       </div>
        <div className="my-5 sm:p-16 pb-6 flex md:w-[50%] flex-col items-start justify-around">
      <h1 className='text-3xl text-blue-700 font-serif ml-3 font-bold '>
        About Us
      </h1>
      <p className='p-4 font-serif font-medium'> Our websites simplify travel planning with easy bookings, competitive rates, and a wide selection of vehicles. Enhancing flexibility and choice in transportation,These services cater to both leisure and business travelers, streamlining the process of securing reliable transportation..</p>

      <button className='border-2 w-[150px] p-2 rounded-[5px] border-blue-700 text-blue-700 font-bold hover:bg-primary hover:text-black ml-4 hover:border-primary hover:dark:text-white'>Contact Us</button>
     </div>
      </div>
      
     </div>
    
    </div>
  )
}

export default About
