import React from 'react'

const Skills = () => {
  return (
    <>
    <h2 className='text-4xl md:text-8xl 
    px-4 py-3 hover:underline decoration-4 underline-offset-4 cursor-pointer rounded-full
     text-white text-center' id='Skills'>Skills</h2>
    
    <div className='className="flex flex-col md:flex-row justify-center 
    items-center gap-12 w-[80%] mx-auto mt-0 md:mt-12 mb-20
    border-2 border-sky-500 rounded-4xl '>
      <div className='flex justify-center flex-wrap  md:gap-20 gap-5 items-center  md:px-14 md:py-14 p-7'>
        {["API","Arduino","Arduino IDE","HTML","CSS","Javascript","Bootstrap","Tailwind CSS","React","Redux","SQL","Python","Django","Jupyter Nootbook","PyCharm","phpMyAdmin"].map((item,index)=>(
          <p 
          className=' text-xl md:text-4xl 
          md:bg-gradient-to-r md:from-sky-500 md:to-white bg-clip-text text-transparent
          hover:bg-gradient-to-b hover:from-red-900 hover:to-sky-500 cursor-pointer
          bg-gradient-to-r from-white to-red-100'  
          key={index}>
            {item}
          
          </p>
        ))}
      </div>
      
    </div>
    </>
  )
}

export default Skills;
