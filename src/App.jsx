import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import OurServices from './components/ourServices/OurServices';
import ClientReviews from './components/clientReviews/ClientReviews';
import Footer from './components/footer/Footer';




const App = () => {

   // dark mode start
   const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end


 
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-y-hidden" >
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme = {theme}/>
      <About/>
      <Services/>
      <OurServices/>
      <ClientReviews/>
       <Footer/>
    </div>
  )
}

export default App
