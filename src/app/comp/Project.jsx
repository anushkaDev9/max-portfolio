'use client'
import React from 'react'
import { projects } from '../assets/assets'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}} 
      className='w-full px-6 sm:px-10 lg:px-[6%] xl:px-[8%] py-16 sm:py-20 lg:py-24 scroll-mt-20 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 text-white'
      id="project"
    >
      
      <motion.h2 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.3,duration:0.5}}
        className='text-center text-4xl sm:text-5xl lg:text-6xl mb-10 lg:mb-12 font-black tracking-tight'
      >
        Projects
      </motion.h2>

      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.7}}
        className='grid gap-5 lg:gap-6 max-w-6xl mx-auto sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
      >
        {projects.map(({ id, name, description, stack, githuLink, livelink }) => (
          
          <motion.div
            whileHover={{scale:1.02}}
            key={id}
            className='relative overflow-hidden border border-white/10 bg-white/[0.05] backdrop-blur-md p-5 sm:p-6 rounded-[1.75rem] shadow-xl shadow-black/30 hover:-translate-y-2 hover:shadow-cyan-900/40 duration-500 before:absolute before:top-0 before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-cyan-400 before:to-violet-500'
          >
            
            <h3 className='text-xl font-black text-white mb-3'>{name}</h3>

            <p className='text-sm text-slate-300 mb-5 leading-6'>
              {description}
            </p>

            <ul className='flex flex-wrap gap-2 text-sm text-slate-400 mb-5 list-none pl-0'>
              {stack[0]
                .split(',')
                .filter(Boolean)
                .map((tech, index) => (
                  <li 
                    key={index}
                    className='px-2 py-1 bg-white/10 rounded-lg text-xs'
                  >
                    {tech.trim()}
                  </li>
                ))}
            </ul>

            <div className='flex flex-wrap gap-4 mt-2'>
              {githuLink && (
                <a
                  href={githuLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-bold text-cyan-300 hover:text-white transition'
                >
                  GitHub
                </a>
              )}
              {livelink && (
                <a
                  href={livelink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-bold text-emerald-300 hover:text-white transition'
                >
                  Site
                </a>
              )}
            </div>

          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Project