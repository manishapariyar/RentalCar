import React, { useState } from 'react'
import { FaCar } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import ResponsiveMenu from './ResponsiveMenu';


export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "CARS",
    link: "/#cars",
  },
  {
    id: 1,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 1,
    name: "BOOKING",
    link: "/#booking",
  },
];
const Navbar = ({theme,setTheme}) => {

  const [showMenu, setShowMenu] = useState(false);

  
  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300 border-gray-40 border-b-2
    ">
     <div className="flex py-4 justify-between items-center md:mx-5">
      <div className="font-bold text-2xl cursor-pointer flex gap-1 mx-5">
        RentalCar
        <span className='my-2  text-primary text-2xl'>
        <FaCar />
        </span>
      </div>
      <nav className="hidden md:block ">
        <ul className="flex items-center gap-8">
        {Navlinks.map(({ index, name, link }) => (
                <li key={index} className="py-4">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              {theme === 'dark'?(
               <MdOutlineLightMode 
               onClick={()=>setTheme('light')}
                className='text-2xl'/>
              ):(
                <MdDarkMode  onClick={()=>setTheme('dark')}
                className='text-2xl' />
              )}
        </ul>
      </nav>
            {  /*Mobile View*/}
      <div className="flex items-center gap-4 md:hidden mx-4">
          {theme === 'dark'?(
               <MdOutlineLightMode 
               onClick={()=>setTheme('light')}
                className='text-2xl
                text-yellow-500'/>
              ):(
                <MdDarkMode  onClick={()=>setTheme('dark')}
                className='text-2xl' />
              )}

              {showMenu ? (
                 <IoMdClose
                 onClick={()=>setShowMenu(!showMenu)}
                 className=" cursor-pointer transition-all text-green-400"
                 size={30} />
                
                
              ):(
                <MdOutlineMenu onClick={()=>setShowMenu(!showMenu)}
                 className="cursor-pointer transition-all text-primary"
                 size={30} />
              )}
      </div>
     </div>
     <ResponsiveMenu showMenu={showMenu}/>
    </div>
  )
}

export default Navbar
