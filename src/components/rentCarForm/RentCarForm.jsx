import { Field, Form, Formik } from 'formik'
import React from 'react'


const RentCarForm = () => {
  return (
    <Formik>
      <Form>
       <div className='  flex justify-center  items-start px-10 flex-col gap-2 p-2 bg-blue-50'>
       <label htmlFor="name" className='text-2xl font-serif'>Pickup</label>
        <input type="text" placeholder='Type in City or Airport Code'className='p-2 md:w-[75%]  w-[100%] border-2 font-serif border-black'/>
       <div className='flex'>
        <input type="checkbox" />
        <p className='font-serif ml-1 text-sm '>Return car to another location ?</p>
        </div>
        <div className=' flex flex-col md:flex md:flex-row md:justify-start md:gap-20'>
          
            <div className='flex flex-col '>
            <h2 className='font-serif text-xl p-1'>Rental Start </h2>
            <div className='flex gap-2  flex-col md:flex md:flex-row'> 
    
            <input type="date" name="date" id="date" className='p-2 border-2 w-40  border-black rounded-9' />
            <input type="time" name="time" id="time" placeholder="HH:mm" className=' p-2 border-2 w-30  border-black rounded-9' />
            </div>
            </div>
            
            <div className='flex flex-col md:flex md:flex-col '>
            <h2 className='font-serif text-xl p-1'>Rental End</h2>
            <div className='flex gap-2  flex-col md:flex md:flex-row'>   
              <input type="date" name="date" id="date" className='p-2 border-2 w-40  border-black rounded-9' />
              <input type="time" name="time" id="time" placeholder="HH:mm" className=' p-2 border-2 w-30  border-black rounded-9' />
              </div>
            </div>
        </div>
        <div className='flex flex-col w-[80%] p-2 gap-3 '>
       <div className='flex gap-1'>
         <input type="checkbox" />
        <p className='foot-serif text-sm '>Drivers Age at Rental start: 30-65</p></div>
        <button className='rounded-md bg-primary  p-2   text-white  w-[40%] font-bold'>Search</button>
        </div>
        <div className='flex justify-center gap-3 p-4 mb-3 md:flex flex-col flex-wrap md:flex-row'> 
          <p className='bg-blue-100 py-1 px-4 rounded-sm'>✔ No hidden fees </p>
          <p className='bg-red-100 p-1 rounded-sm'>✔ No credit card fees </p>
          <p className='bg-yellow-100 p-1 rounded-sm'>✔ No amendment fees </p>
        </div>
       </div>

      </Form>
    </Formik>
  )
}

export default RentCarForm
