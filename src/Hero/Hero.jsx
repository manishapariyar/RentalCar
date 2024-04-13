import React, { useEffect, useState } from "react";
import blackCar from "../assets/car.png";
import blueCar from "../assets/banner-car.png";
import Modal from "../components/model/Modal";
import RentCarForm from "../components/rentCarForm/RentCarForm";


const Hero = ({ theme }) => {
  const [isOpen,setIsOpen] = useState(false);
  const OnOpen = () =>{
   setIsOpen(true);
   
  }
  const OnClose = () =>{
   setIsOpen(false);

  }
 
  return (
    <>
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div  className="order-1 sm:order-2">
            <img
              src={theme === "dark" ? blackCar : blueCar}
              alt=""
             
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1 className="text-5xl font-semibold font-serif ml-2">
              Car Rental
            </h1>
            <p className="p-2 font-serif font-medium">
            "Unlock Your Journey: Discover a Seamless Rental Experience with Our Wide Selection of Quality Vehicles."{" "}
            </p>
            <button
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black mb-2 hover:dark:text-white font-semibold"
              onClick={OnOpen}
            >
             Rent Cars
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} OnClose={OnClose}>
       <RentCarForm/>
    </Modal>
    </div>
   

    </>
  );
};

export default Hero;