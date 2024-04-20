import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import play_store from "../../assets/appStore/play_store.png"
import app_store from "../../assets/appStore/app_store.png"
const FooterLinks = [
  {
    title: "Home",
  
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Links = [
  {
    title: "Book a car",
    link: "/#",
  },
  {
    title: "Weddings",
    link: "/#about",
  },
  {
    title: "Trust $ safety",
    link: "/#contact",
  },
  {
    title: "Get help",
    link: "/#blog",
  },
];
const Types = [
  {
    title: "Car rental",
    
  },
  {
    title: "Classic car rental",
   
  },
  {
    title: "Convertible car rental",
    
  },
  {
    title: "Electric vehicle rental",
    
  },
  {
    title: "Minivan rental",
    
  },
];

const Footer = () => {

  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className='container w-[80%]'>
      <div className="flex justify-center items-center">
      <div className='flex flex-col'>
      <h1 className="sm:text-2xl m-4 text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-2 font-serif">
              wheelsOnRent
            </h1>
       <p className='text-[12px] m-4'>† Any personal insurance you may have that covers damage to the host’s vehicle would kick in before your protection plan, except in limited situations for trips booked in Maryland, but this protects your own wallet. Liability insurance is provided under a policy issued to Turo by Travelers Excess and Surplus Lines Company. Terms, conditions, and exclusions apply. The policy does not provide coverage for damage to a host’s vehicle.</p>
       <p className='text-[12px] m-4'>When a trip is booked in the state of Washington, physical damage to the host’s vehicle is covered by insurance purchased by Turo, but the Turo insurance does not change the contractual responsibilities of hosts or guests with respect to physical damage to a host’s vehicle.</p>
       </div>
       </div>
       <div className=' grid md:grid-cols-4  grid-cols-2 py-5 gap-2'>
          <div className="py-2 px-2">
            <h1 className='sm:text-[16px] text-[16px] font-bold sm:text-left text-justify mb-3'>Important link</h1>
            <ul className='flex flex-col gap-2'>
            {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200 text-[12px]">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
            </ul>
          </div>
         
         <div className="">
              <div className="py-2 px-2 ">
                <h1 className="sm:text-[16px] text-[16px] font-bold sm:text-left text-justify mb-3 ">
                  Explore
                </h1>
                <ul className="flex flex-col gap-2">
                  {Links.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200 text-[12px]">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
         <div className="">
              <div className="py-2 px-2">
                <h1 className="sm:text-[16px] text-[16px] font-bold sm:text-left text-justify mb-3 ">
                 Vehicle Types
                </h1>
                <ul className="flex flex-col gap-2">
                  {Types.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200 text-[12px]">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
             <div className="py-2 px-2">
              <div className="flex flex-col gap-4">
              <div className="flex gap-3 text-2xl" >
                <FaFacebook className='hover:text-primary'  />
                <CiLinkedin  className='hover:text-primary' />
                <FaInstagram  className='hover:text-primary' />
               </div>
               <div className='flex gap-2 md:flex-row flex-col '>
                 <img src={play_store} alt="" className='w-[200px] h-[40px]'/>
                 <img src={app_store} alt="" className='w-[200px] h-[40px]' />

               </div>
              </div>
             </div>
            </div>
           
            <div className="py-8 px-2 flex flex-col border-t-2"> 
            <div className="flex md:gap-4 text-[12px] md:flex-row flex-col gap-1 ">
              <p>&copy;WheelOnRent</p>
               <p>Terms</p>
               <p>Privacy</p>
               <p>Sitemap</p>
               <p>Cookie preferences</p>
            </div>
             <p className='text-[12px] md:p-2 md:mt-0 mt-2 hover:text-red-400'>Do not sell or share my personal information</p>
            </div>
           </section>
    
    </div>
  )
}

export default Footer
