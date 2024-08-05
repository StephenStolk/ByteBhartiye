
import React, { useState } from "react";
// import {FiMenu} from "react-icons/fi"
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const LinksUrl = [
    { name: "Home", link: "/", id: 0 },
    { name: "Benefits", link: "#benefits", id: 1 },
    { name: "Services", link: "#services", id: 2 },
    { name: "Contact", link: "#contact", id: 3 },
    { name: "Testimonial", link: "#testimonial", id: 4 },
    { name: "App Store", link: "#appstore", id: 4 },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="w-full bg-brandDark md:flex items-center z-[20] justify-between fixed top-0 left-0">
        <div className="flex items-center px-2 md:px-12 py-4 justify-between">
          <span className="text-3xl font-semibold font-[Poppins] text-white/70 ml-[2rem]">
            ByteUnity
          </span>

          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-8 h-8 cursor-pointer md:hidden"
              onClick={() => setOpen(!open)}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-8 h-8 cursor-pointer md:hidden"
              onClick={() => setOpen(!open)}
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>

        <ul
          className={`md:flex ml-0 items-center justify-center pt-[1rem] text-center md:pt-0 transition-all duration-500 ease-in ${
            open ? "top-[12]" : "hidden"
          }`}
        >
          {LinksUrl.map((item) => (
            <li
              className="pt-[0.5rem] sm:pt-[1rem] lg:pt-0 md:ml-[3rem] text-xl text-white/70 hover:bg-blue-500 md:px-[1rem] text-center items-center"
              key={item.id}
            >
              <a className="my-[1rem]" key={item.id} href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
          <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 px-6 py-2 rounded-xl pt-[0.5rem] ml-0 mt-4 md:mt-2 mb-6 md:mb-2 md:mr-[1rem] text-white/70">
            Download
          </button>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
