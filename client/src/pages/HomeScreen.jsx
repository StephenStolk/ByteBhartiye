import React from 'react'
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Banner from '../components/Banner/Banner';
import AppStore from '../components/AppStore/AppStore';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
// import Navbar from "./components/Navbar/Navbar.jsx";

const HomeScreen = () => {
  return (
    <>
          <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden sm:py-[2%] py-[10%]">
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default HomeScreen