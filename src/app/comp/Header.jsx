'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className='relative w-full min-h-[88vh] lg:min-h-screen overflow-hidden px-6 sm:px-10 lg:px-[6%] xl:px-[8%] text-left flex flex-col items-start justify-center gap-6 lg:gap-7 bg-[#0b1020] text-slate-100 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.18),transparent_30%)] before:pointer-events-none'>
      <div className='relative z-10 w-full max-w-6xl mx-auto flex flex-col items-start text-left gap-5'>
        <motion.div
          initial={{ scale:0 }}
          whileInView={{ scale:1 }}
          transition={{duration:0.8,type:'spring',stiffness:100}}
        >
          <Image src={assets.profile} alt='' className='rounded-2xl w-28 sm:w-32 lg:w-34 xl:w-36 mb-2 border border-cyan-300/30 shadow-2xl shadow-cyan-500/20 rotate-[-3deg]' />
        </motion.div>

        <motion.h3
          initial={{ y:-20, opacity:0}}
          whileInView={{ y:0, opacity:1 }}
          transition={{duration:0.6,delay:0.3}}
          className='inline-flex items-center text-sm sm:text-base lg:text-lg gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 sm:px-5 py-2 backdrop-blur-md text-cyan-100'
        >
          Hi! I'm Maximiliano Villa
          <Image src={assets.hand_icon} alt='' className='w-5 mb-[2px]' />
        </motion.h3>

        <motion.h1
          initial={{ y:-30, opacity:0}}
          whileInView={{ y:0, opacity:1 }}
          transition={{duration:0.8,delay:0.5}}
          className='max-w-5xl text-[clamp(2.5rem,6vw,4.75rem)] font-black leading-[0.98] tracking-tight bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent'
        >
          Product Manager based in California, USA
        </motion.h1>

        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2'>
          <motion.a
            initial={{ y:30, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{duration:0.6,delay:0.8}}
            href='#contact'
            className='px-6 sm:px-7 py-3.5 rounded-2xl bg-cyan-400 text-slate-950 font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:-translate-y-1 hover:bg-cyan-300 transition duration-300'
          >
            Contact Me <Image src={assets.right_arrow} alt='' className='w-4'/>
          </motion.a>

          <motion.a
            initial={{ y:30, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{duration:0.6,delay:1}}
            href='/Max_Resume.pdf'
            download
            className='px-6 sm:px-7 py-3.5 rounded-2xl border border-white/20 bg-white/10 text-white font-bold flex items-center gap-2 backdrop-blur-md hover:-translate-y-1 hover:border-violet-300/60 transition duration-300'
          >
            My resume <Image src={assets.download_icon} alt='' className='w-4'/>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Header
