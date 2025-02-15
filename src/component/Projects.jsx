import React from "react";
import LandHost from "../images/LandHost.png";
import BharatCafe from "../images/BharatCafe.png";
import DataMang from "../images/DataMang.png";
import {motion} from "framer-motion";

const Projects = () => {
    return(
    <div
    className="flex flex-col  justify-center items-center min-h-screen">
        <h1 className="text-4xl md:text-8xl text-white text-center
        px-4 py-3 hover:underline decoration-4 underline-offset-4 cursor-pointer rounded-full mb-3
        " id="Projects">
            Projects 
        </h1>
        <div>
        
        {/* Project Content  */}
            <motion.div 
            initial={{opacity:0,x:200}} 
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className=" p-4  flex flex-wrap  gap-4">
                {projectData.map((items,index)=>(
                    <div 
                    className="px-6 
                    hover:border-2 border-sky-500 hover:rounded-3xl" 
                    key={index}>
                        <div className="py-10">
                            <h2 
                            className=" text-3xl text-center mb-3
                            bg-gradient-to-r from-indigo-400 to-white bg-clip-text text-transparent">{items.name}
                            </h2>
                            <img className="h-50 w-3/4" src={items.image} alt="" />
                            <p className="text-sky-500 mt-5">
                                <a href={items.url} target="_blacn"  className="underline text-blue-400 hover:text-blue-600">
                                    {items.url}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
                    
            </motion.div>
        </div>
    </div>
    )
}
export default Projects;


const projectData=[
    {
        id:'1',
        name:'LandHost',
        image:LandHost,
        url:'https://landhost.vercel.app/'
    },
    {
        id:'2',
        name:'Bharat-Cafe',
        image:BharatCafe,
        url:'https://coffee-cafe-theta.vercel.app/'
    },
    {
        id:'3',
        name:'Data Management',
        image:DataMang,
        url:'https://github.com/AdityaExplorer/Data-Management'
    },
]