'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.div
      id='work'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-6 sm:px-10 lg:px-[6%] xl:px-[8%] py-16 sm:py-20 lg:py-24 scroll-mt-20 bg-slate-950 text-white'
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='max-w-6xl mx-auto text-left text-4xl sm:text-5xl lg:text-6xl mb-10 lg:mb-12 font-black tracking-tight'
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='relative grid gap-5 lg:gap-6 max-w-6xl mx-auto sm:grid-cols-1 md:grid-cols-2'
      >
        {workData.map(({ id, role, company, date, points, skills }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.02 }}
            className='border border-white/10 bg-white/5 p-5 sm:p-6 lg:p-7 rounded-[1.75rem] shadow-lg shadow-black/20 cursor-pointer hover:-translate-y-2 hover:bg-white/10 hover:border-cyan-300/40 duration-500 backdrop-blur-md'
          >
            <h3 className='text-xl font-black text-white'>
              {role}
            </h3>

            <p className='text-cyan-300 text-sm mb-1 font-bold'>
              {company}
            </p>

            <p className='text-slate-400 text-sm mb-5 italic'>
              {date}
            </p>

            {points && points.length > 0 && (
              <ul className='mt-4 space-y-2'>
                {points.map((point, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-3 text-sm text-slate-300 leading-6'
                  >
                    <span className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0'></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {skills && skills.length > 0 && (
              <div className='flex flex-wrap gap-2 mt-5'>
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 text-xs font-semibold rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20 transition'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work