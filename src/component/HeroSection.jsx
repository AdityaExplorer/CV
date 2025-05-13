import React from "react";
import myImage from "../images/MYPortImage.jpeg";
import { motion } from "framer-motion";
import myresume from "../assets/CV_Aditya_Verma.pdf";

const HeroSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center 
                mt-3 mb-12 md:mt-[150px] md:mb-[200px] 
                sm:mb-36"
      >
        <div className="" id="Home">
          <img
            className="rounded-full w-40 h-43 md:w-80 md:h-80 mt-12 md:mt-0 border-sky-500 border-2 "
            src={myImage}
            alt=""
          />
        </div>
        <div className="max-w-xl mx-auto text-center p-6">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight font-[Inter]">
            <span className="bg-gradient-to-r from-sky-500 to-red-800 bg-clip-text text-transparent">
              I'm Aditya Verma,
            </span>
            I enjoy working with others, learning new things, and growing through every experience.          
          </h1>
          <p className="text-gray-400 text-lg mt-4 font-[Inter]">
            Inserting in doing project on Real-World-Datasets
          </p>
        </div>

        <div className="flex flex-wrap flex-row md:gap-5 gap-2" >
          <button
            className="md:py-2 md:px-12 py-2 px-6 bg-sky-500 
                    md:text-xl text-base rounded-full text-white cursor-pointer
                            hover:bg-gradient-to-r hover:from-sky-500 hover:to-red-900"
            
          >
           <a href="#Contact with me">Contact with me</a>
          </button>

          <button className="text-white hover:border-sky-500 cursor-pointer text-xl border-2 border-white p-4 rounded-full">
            <a href={myresume} target="_blank">My resume</a>
          </button>
        </div>
      </motion.div>
    </>
  );
};
export default HeroSection;
