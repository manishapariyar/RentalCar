import React from "react";
import data from "../../shared/images"; // Correct import without curly braces
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import CarBooking from "./carBooking";
const Services = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

 

  return (
    <div className="w-full mt-10 flex items-center flex-col gap-4">
      <div className="flex items-center justify-center flex-col w-[80%] gap-3">
        <h1 className="text-2xl font-serif font-bold ">Endless options</h1>
        <p className=" font-serif font-bold text-center p-2 dark:text-white">
          Browse the world’s largest car sharing marketplace
        </p>
        <p className="text-center font-serift p-2">
          Whether it’s an SUV for a family road trip, a pickup truck for some
          errands, or a classic sports car for a special night out, find the
          perfect car for all kinds of occasions and budgets on WheelsOnRent.
        </p>
        <button className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6    dark:text-white text-black mb-2 hover:dark:text-white font-semibold">
          Book the perfect Car
        </button>
      </div>
      <h1 className="text-3xl font-bold font-serif"> Car by Category</h1>
      <div className="md:w-[80%] md:flex ">
       
        <div className="relative flex items-center ">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100 relative"
            size={40}
            onClick={slideLeft}
          />
          <div
            id="slider"
            className="w-full h-full overflow-x-auto whitespace-nowrap overflow-y-hidden scrollbar-hide  mb-4 scroll-smooth"
          >
              {data.map((item) => (
                
                  <CarBooking key={item.id} name ={item.name} img ={item.img} />
              
              ))}
            
          </div>
          <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
          onClick={slideRight}
        />
        </div>
       
      </div>
    </div>
  );
};

export default Services;

// <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap overflow-y-hidden scrollbar-hide '>
// {data.map((item) => (

// ))}
// </div>
