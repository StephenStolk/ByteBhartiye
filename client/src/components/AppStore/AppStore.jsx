/* eslint-disable no-unused-vars */
import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/website/coffee-beans-bg.png";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const AppStore = () => {
  return (
    <>
      <div className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* text section */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                Our Services are available here.
              </h1>
              {/* img section */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
               <button className="bg-gray-600 py-3 px-5 rounded-xl mr-[1rem] mt-[1rem]">
               <a href="https://github.com/adityajhakumar/WEBSITE-TRANSLATOR-INDIAN-LANGUAGE" className="text-xl font-serif">
                  Github
                  </a>
               </button>
               <button className="bg-gray-600 py-3 px-5 rounded-xl mt-[1rem]">
               <a href="https://drive.google.com/drive/folders/1F_BjaonSESlm-9v2SemSiiS0T1d6VqSA" className="text-xl font-serif">
                  Download Resources
                  </a>
               </button>
              </div>
            </div>
            {/* Empty div */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
