'use client'
import React  from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4352ff14-50a2-4bad-a447-571868469c72");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div 
    initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1}}
    className='w-full px-6 sm:px-10 lg:px-[6%] xl:px-[8%] py-16 sm:py-20 lg:py-24 scroll-mt-20 bg-[#0b1020] text-white' id="contact">
       <h4 className='text-center mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300 font-bold'>Get in touch</h4>
        <h2 className='text-center text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight'>Contact with me</h2>
        <p className='text-center max-w-3xl mx-auto rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl shadow-cyan-950/40 mt-6 mb-12 text-slate-300 leading-7'>
            I'd love to hear from you! If you have any question,comments or feedback please use the form below.
        </p>
        <form className='max-w-3xl mx-auto rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl shadow-cyan-950/40' onSubmit={onSubmit}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-6 text-center text-cyan-200 mb-5'>
                <input type='text' placeholder='Enter your name' name='name' required className='flex-1 rounded-2xl p-3.5 sm:p-4 outline-none border border-white/10 bg-white/10 text-white placeholder:text-slate-400 focus:border-cyan-300 transition'/>
                 <input type='email' placeholder='Enter your email'  name='email' required className='flex-1 rounded-2xl p-3.5 sm:p-4 outline-none border border-white/10 bg-white/10 text-white placeholder:text-slate-400 focus:border-cyan-300 transition'/>
            </div>
            <textarea rows='6' placeholder='Enter your messsage' required  name='message' className='w-full rounded-2xl p-3.5 sm:p-4 outline-none border border-white/10 bg-white/10 text-white placeholder:text-slate-400 focus:border-cyan-300 transition'></textarea>
            <button className='mt-6 px-7 py-3.5 flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 font-black rounded-2xl mx-auto cursor-pointer hover:bg-cyan-300 hover:-translate-y-1 transition duration-300'>
                Send Message
                </button>
        </form>
        <p className='mt-6 text-center text-cyan-200'>{result}</p>
        </motion.div>
  )
}

export default Contact