/* eslint-disable no-unused-vars */
import React from "react";
import BannerImg from "../../assets/loading.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { BsFiletypeExe } from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa";
import BgImg from "../../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <>
      <span id="benefits"></span>
      <div style={bgImage} className="mt-[5rem]">
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container py-6 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  Benefits
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Purchaase anything by typing and speaking in your own local/Indian language.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <IoExtensionPuzzle  className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span>Plug-ins</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaRegKeyboard className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span>Keys</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <BsFiletypeExe className="text-xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>Apk</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                      Search in your language
                    </h1>
                    <p className="text-sm text-gray-500">
                      Download and install the exe file. Setup the system and use it to freely search for anything you want to buy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
