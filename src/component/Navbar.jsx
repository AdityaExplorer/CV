import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import {motion} from "framer-motion";

const Navbar = () => {

    const[isOpen,setIsOpen] = useState(false);


  return (
    <div className="flex justify-between items-center px-6 py-4
       text-white border-gray-300 relative ">
    <motion.h1 
    initial={{opacity:0,x:0}} 
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className="text-xl md:text-3xl font-bold flx-1 text-left">Welcome To The Portfolio</motion.h1>
    
    <motion.nav 
    initial={{opacity:0,y:100}} 
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className=" hidden md:flex text-xl gap-8 
    absolute left-1/2 transform -translate-x-1/2 
        ">
          {["Home","About","Projects","Skills","Contact with me"].map((item)=>(
            <a href={`#${item}`} className="hover:underline decoration-4 underline-offset-4 
            decoration-sky-500 text-[2vw] md:text-2xl">
                {item}
            </a>
          ))}
            {/*  */}
    </motion.nav>
    <button className='md:hidden text-3xl'
    onClick={()=>setIsOpen(!isOpen)}> <IoReorderThreeOutline /></button>


        {/* -----Mobile DropDown Menu -------- */}
        {isOpen && (
        // <div className='md:hidden fixed top-0 w-[40vw] right-[6%]
        //  mt-12 h-screen 
        //  text-white shadow-md p-5 flex flex-col gap-4
        // bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] overflow-auto'>
        <div className='md:hidden fixed top-0 left-0 w-[40vw] z-50
         mt-12 h-screen 
         text-white shadow-md p-5 flex flex-col gap-4
        bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] overflow-auto'>

          {["Home","About","Projects","Skills","Contact with me"].map((item)=>(
            <a href={`#${item}`} className="hover:underline decoration-4 underline-offset-4 
            decoration-sky-500 text-[5vw]">
                {item}
            </a>
          ))}

            
          
        </div>
         )}
  </div>
  )
}

export default Navbar
