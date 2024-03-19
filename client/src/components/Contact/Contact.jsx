/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import {
  MdDriveFileRenameOutline,
  MdOutlineEmail,
  MdOutlineFeed,
  MdOutlineFeedback,
} from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn2, fadeIn4 } from "../Motion/variants";
import ContactImg from "../../assets/contact.jpg";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feed, setFeed] = useState("");
  const [customurl, setCustomurl] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch(process.env.MONGO_URL, {
      method: "post",
      body: JSON.stringify({ name, email, feed, customurl }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json;
    localStorage.setItem("users", JSON.stringify(result));
  };
  return (
    <>
        <span id="contact"></span>
        <section className="lg:w-[90%] bg-white border-red-800 flex flex-col lg:flex-row justify-around mx-auto py-10 lg:pb-20">
        <div className="w-full lg:w-[50%] flex flex-col justify-center mx-auto text-center">
          <h1 className="text-lg font-bold font-mono mt-10 lg:mt-0">
            Do you have any query related to the model?
          </h1>
          <span className="text-base font-serif">
            Please fill out the form to reach out to us.
          </span>
          <motion.img
            src={ContactImg}
            className="w-3/4 lg:w-5/6 mx-auto mt-10 mb-5 lg:mb-0"
            alt="image" variants={fadeIn2(2.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
          />
        </div>
        <div className="w-full lg:w-[50%] flex justify-center my-auto py-8 lg:py-0">
          <form className="w-5/6 lg:w-[70%] mx-auto" onSubmit={collectData}>
            <motion.div className="flex flex-row items-center pb-4" variants={fadeIn2(2.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
              <MdDriveFileRenameOutline className="w-10 h-10 bg-sky-50 rounded-xl mr-3" />
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Enter your name"
                className="outline-none bg-sky-50 border border-spacing-5 w-full h-10 lg:h-[3rem] rounded-xl px-3 shadow-lg active:animate-bounce"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>
            <motion.div className="flex flex-row items-center pb-4" variants={fadeIn2(2.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
              <MdOutlineEmail className="w-10 h-10 bg-sky-50 rounded-xl mr-3" />
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Enter your email"
                className="outline-none bg-sky-50 border border-spacing-5 w-full h-10 lg:h-[3rem] rounded-xl px-3 shadow-lg active:animate-bounce"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>
            <motion.div className="flex flex-row items-center pb-4" variants={fadeIn2(2.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
              <MdOutlineFeedback className="w-10 h-10 bg-sky-50 rounded-xl mr-3" />
              <input
                type="text"
                name="feed"
                id="feed"
                autoComplete="off"
                placeholder="Enter your query"
                className="outline-none bg-sky-50 border border-spacing-5 w-full h-10 lg:h-[3rem] rounded-xl px-3 shadow-lg active:animate-bounce"
                value={feed}
                onChange={(e) => setFeed(e.target.value)}
              />
            </motion.div>
            {/* <motion.div className="flex flex-row items-center pb-4" variants={fadeIn2(2.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
              <MdOutlineEmail className="w-10 h-10 bg-sky-50 rounded-xl mr-3" />
              <input
                type="text"
                name="userurl"
                id="userurl"
                autoComplete="off"
                placeholder="Enter your URL"
                className="outline-none bg-sky-50 border border-spacing-5 w-full h-10 lg:h-[3rem] rounded-xl px-3 shadow-lg active:animate-bounce"
                value={customurl}
                onChange={(e) => setCustomurl(e.target.value)}
              />
            </motion.div> */}
            <motion.button
              type="submit"
              className="flex mx-auto p-2 sm:p-3 mt-[1rem] text-white/70 md:px-6 px-4 bg-brandDark/60 hover:scale-105 duration-200 rounded-xl hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" variants={fadeIn4(2.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
