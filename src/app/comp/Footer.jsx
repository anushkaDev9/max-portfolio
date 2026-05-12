import React from 'react'
import { assets } from '../assets/assets'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-slate-950 text-slate-200 px-6 sm:px-10 lg:px-[8%] py-10 sm:py-12'>
       <div className='text-center '>
         <p className='text-2xl sm:text-3xl font-black mb-4 tracking-tight  '>Maximiliano Villa</p>
         <div className='w-full max-w-max flex items-center gap-3 mx-auto mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-3'>
            <Image src={assets.mail_icon} alt="" className="w-5"/>
             <h4 className='text-center mb-0 text-xs sm:text-sm text-slate-300  '>maxvilla4000@gmail.com</h4>
         </div>
        <div className='text-center text-slate-500 border-t border-t-white/10 pt-6 '>
            <p>@2026 Maximiliano Villa.All rigits reserved</p>
        </div>
       </div>
    </div>
  )
}

export default Footer