/* eslint-disable no-unused-vars */
import React from "react";
import HeroPng from "../../assets/front1.png";
import {motion} from 'framer-motion'
import { fadeIn2 } from "../Motion/variants";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className="container sm:pb-0 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono"
              >
                Search in your own {" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive"
                >
                  language
                </span>{" "}
              
              </h1>
              <motion.div variants={fadeIn2(2.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="mt-[1rem] flex md:flex-row flex-col items-center">
                <a href="https://youtu.be/tsQYajSWxt0" target="blank">
               <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-3 px-6 rounded-full w-48">
                  How to Setup ?
                </button>
               </a>
               <a href="https://youtu.be/hXFjvwvc87s" target="blank">
               <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-3 px-6 sm:ml-[1rem] rounded-full w-48 sm:mt-0 mt-[1rem]">
                  Working
                </button>
               </a>
              </motion.div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="biryani img"
                className="w-[300px] sm:w-[350px] sm:scale-125 mx-auto"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-white">Hey User</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
              >
                <h1 className="text-white">Your own language</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
