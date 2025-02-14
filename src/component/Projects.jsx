import React from "react";
import myImage from "../images/MyPortImage.jpeg";
import { FaLessThan ,FaGreaterThan } from "react-icons/fa";
import {motion} from "framer-motion";

const Projects = () => {
    return(
    <div
    className="flex flex-col  justify-center items-center min-h-screen">
        <h1 className="text-4xl md:text-8xl text-white text-center
        px-4 py-3 hover:underline decoration-4 underline-offset-4 cursor-pointer rounded-full mb-3
        " id="Projects">
            Pojects 
        </h1>
        <div>
        <motion.div 
        initial={{opacity:0,x:200}} 
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        className="flex flex-row gap-2 absolute md:right-[200px] md:top-[230%] right-[10px] top-[190vh] mb-12">
            <button className="md:p-3 p-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg"><FaLessThan /></button>
            <button className="md:p-3 p-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg"><FaGreaterThan /></button>
        </motion.div>


            
            
            <motion.div 
            initial={{opacity:0,x:200}} 
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className=" p-4 flex gap-5 justify-center items-center flex-row  border-2 border-sky-500 rounded-3xl">
                <div className="relative group">
                    <img className="md:w-[500px] md:h-[500px]" src={myImage} alt="" />
                    <p className="absolute inset-0 flex justify-center items-center  bg-opacity-60 
                                text-white text-5xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-gradient-to-r from-sky-500 to-red-900 
                        bg-clip-text text-transparent">This is my project</span>
                    </p>
                </div> 
            </motion.div>
        </div>
    </div>
    )
}
export default Projects;