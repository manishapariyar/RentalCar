import React from 'react'
import whyUs from '../assets/whyUs.jpg'
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Discover unbeatable deals on car rentals with competitive pricing.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Enjoy swift and dependable service that prioritizes your safety.",
    aosDelay: "500",
  },
  {
    name: "Experienced Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Our seasoned drivers ensure a smooth and enjoyable journey for you.",
    aosDelay: "1000",
  },
];

const OurServices = () => {
  return (
    <div className='"dark:bg-black  dark:text-white py-14 sm:min-h-[300px] sm:grid sm:place-items-center"'>
       <div className="container">
        <div className="p-2 text-center">
        <h1 className='text-3xl p-2 font-bold font-serif'>Why Choose Us ? </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-2 sm:py-6  sm:pt-8 bg-slate-800 hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-1 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
       </div>

      
    </div>
  )
}

export default OurServices
