import React from "react";
import myImage from "../images/MYPortImage.jpeg";
import {motion} from "framer-motion";


const AboutSection = () => {
  return (
    <>
      <h1 className="text-4xl md:text-8xl text-white text-center  
       px-4 py-3 hover:underline decoration-4 underline-offset-4 cursor-pointer rounded-full"
       id="About">
        About Me 
      </h1>
    <div className="flex flex-col md:flex-row justify-center 
    items-center gap-12 w-[80%] mx-auto mt-0 md:mt-12 mb-20
    border-2 border-sky-500 rounded-4xl
    hover:bg-gradient-to-r hover:from-sky-500 hover:to-red-900 cursor-pointer
    ">
      {/* Left Side Content */}
      <motion.div 
        initial={{opacity:0,x:-300}} 
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
      className="flex justify-center items-center md:p-4
      ">
        <img
          className="rounded-full w-60 h-60 md:w-80 md:h-100 mt-12 shadow-lg mb-0"
          src={myImage}
          alt="Aditya's Profile image"
        />
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        initial={{opacity:0,x:300}} 
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}} 
      className="max-w-lg text-center md:text-left text-base md:text-lg">
        {/* For Larger Screens */}
        <p className="text-white font-medium text-2xl leading-relaxed md:block hidden">
            I’m <strong className="text-sky-500 ">Aditya</strong>, a skilled Full-Stack Developer with expertise in HTML, CSS, JavaScript, React, Redux, Tailwind, Bootstrap, Django, Python, SQL, Git, and GitHub. I am passionate about building efficient, scalable, and secure web applications.

            I hold a B.Tech in Electronics and Communication Engineering from Lyallpur Khalsa College Technical Campus, Jalandhar, with an overall SGPA of 7.5/10.

            Feel free to explore my work and connect with me!</p>

        {/* For Mobile Screens */}
        <p className="text-white font-medium leading-relaxed md:hidden text-center p-3">
          I’m <strong className="text-blue-600">Aditya</strong>, a Full-Stack Developer skilled in React, Django, and SQL.  
          B.Tech in ECE from Lyallpur Khalsa College (SGPA: 7.5/10).  
          Passionate about building secure and scalable applications.  
        </p>
      </motion.div>
    </div>
    </>
  );
};

export default AboutSection;
