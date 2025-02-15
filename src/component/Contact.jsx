import React from "react";


const Contact = () => {
    return (
        <>
            <h2 
            className="text-white text-4xl md:text-8xl text-center cursor-pointer
            hover:underline decoration-4 underline-offset-4 flex gap-2 justify-center items-center">
                Contact 
                <spna 
                className="text-3xl md:text-6xl 
                bg-gradient-to-bl from-gray-400 to-indigo-900 bg-clip-text text-transparent cursor-pointer">
                    with me
                </spna>
            </h2>

            {/* Contact Form */}
           
            <form 
            className="md:max-w-5xl w-3/4 mx-auto text-white text-base md:text-2xl pt-9 mb-2 border-2 border-sky-500
            md:p-20 p-5 mt-5 rounded-3xl" id="Contact">
                <div className="w-full md:w-3/4 text-left">
                    
                    <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2 mb-2" type="text"
                    placeholder="Your Name"
                    name="Name" required/>
                </div>
                <div className="w-full md:w-3/4 text-left ">
                    
                    <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email"
                    placeholder="Your Email"
                    name="Email" required/>
                </div>
                <div className='my-6 text-left w-full  md:w-3/4'>
                    
                    <textarea 
                    className="w-full border border-gray-300 rounded py-3 px-4 mt-2 
                    md:h-48 h-20 resize-none" 
                    name="Message"
                    placeholder="Message" required>

                    </textarea>
                </div>
                <button 
                className="bg-sky-500 text-white md:py-2 md:px-12 py-2 px-4 mb-10 
                hover:bg-gradient-to-r hover:from-sky-500 hover:to-red-900 rounded-full cursor-pointer">
                    Send Message
                </button>

            </form>
            </>

    )
}

export default Contact;     