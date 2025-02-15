import React from "react";
import {toast} from "react-toastify";
import {motion} from "framer-motion"

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b1c1aa57-09a5-40bd-8da6-5c559b005a0e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message Sent Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult();
    }
  };
    return (
        <>
            <h2 
            className="text-white text-4xl md:text-8xl text-center cursor-pointer
            hover:underline decoration-4 underline-offset-4 flex gap-2 justify-center items-center"
            id="Contact with me"
            >
                Contact 
                <spna 
                className="text-3xl md:text-6xl 
                bg-gradient-to-bl from-gray-400 to-indigo-900 bg-clip-text text-transparent cursor-pointer">
                    with me
                </spna>
            </h2>

            {/* Contact Form */}
           
            <motion.form 
            initial={{opactiy:0,y:300}}
            transition={{duration:1}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            onSubmit={onSubmit}
            id="Contact"
            className="md:max-w-5xl w-3/4 mx-auto text-white text-base md:text-2xl pt-9 mb-2 border-2 border-sky-500
            md:p-20 p-5 mt-5 rounded-3xl">
                <div className="w-full md:w-3/4 text-left">
                    
                    <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2 mb-2" type="text"
                    placeholder="Your Name"
                    name="name" required/>
                </div>
                <div className="w-full md:w-3/4 text-left ">
                    
                    <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email"
                    placeholder="Your Email"
                    name="email" required/>
                </div>
                <div className='my-6 text-left w-full  md:w-3/4'>
                    
                    <textarea 
                    className="w-full border border-gray-300 rounded py-3 px-4 mt-2 
                    md:h-48 h-20 resize-none" 
                    name="message"
                    placeholder="Message" required>

                    </textarea>
                </div>
                <button 
                className="bg-sky-500 text-white md:py-2 md:px-12 py-2 px-4 mb-10 
                hover:bg-gradient-to-r hover:from-sky-500 hover:to-red-900 rounded-full cursor-pointer">
                    {result ? result:"Send Message"}
                </button>

            </motion.form>
            </>

    )
}

export default Contact;     