'use client'
import React from 'react'
import { assets, infoList } from '../assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-6 sm:px-10 lg:px-[6%] xl:px-[7%] py-16 sm:py-20 lg:py-24 scroll-mt-20 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 text-white overflow-hidden relative'
      id="about"
    >
      <div className='absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl'></div>

      <div className='relative z-10 max-w-6xl mx-auto'>
        
        <motion.h4 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300 font-semibold'
        >
          Introduction
        </motion.h4>
     
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-center text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent'
        >
          About me
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='grid lg:grid-cols-1 gap-10 items-center justify-items-center my-14 lg:my-16'
        >

          {/* TEXT SECTION */}
          <motion.div 
            initial={{ scale: 0, opacity:0.9}}
            whileInView={{ opacity: 1,scale: 1 }}
            transition={{ duration: 0.6 }}
            className='w-full  flex flex-col items-center'
          >
            <p className='mb-10 text-base sm:text-lg lg:text-xl leading-8 lg:leading-9 text-slate-300 max-w-3xl'>
              Aspiring Product Manager with hands-on experience in UX research, user testing, and cross-functional collaboration focused on building intuitive, user-centered products. Skilled in conducting user interviews, moderating usability sessions, analyzing behavioral data, and translating research insights into actionable product improvements. Experienced in working with product, design, engineering, vendors, and operations teams to identify user pain points and improve workflows. Backed by a strong foundation in Economics, analytics, and customer engagement, with technical skills in SQL, Python, Excel, Qualtrics, and Figma to support product analysis, user insights, and business decisions. 

            </p>

            <ul className='grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full'>
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <li
                  key={index}
                  className='group border border-white/10 rounded-3xl p-5 sm:p-6 cursor-pointer bg-white/[0.06] backdrop-blur-md shadow-xl shadow-black/20 hover:bg-white/[0.11] hover:border-cyan-300/40 hover:-translate-y-2 duration-500 text-center'
                >
                  <div className='w-12 h-12 mx-auto rounded-2xl bg-cyan-300/10 border border-cyan-300/20 flex items-center justify-center group-hover:scale-110 duration-500'>
                    <Image src={icon} alt={title} className='w-7' />
                  </div>

                  <h3 className='my-4 font-bold text-white text-lg'>{title}</h3>

                  {Array.isArray(description) ? (
                    typeof description[0] === 'string' ? (
                      <ul className='list-disc pl-5 text-slate-300 text-sm leading-6 text-left'>
                        {description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : title === 'Education' ? (
                      <ul className='text-sm space-y-3 text-left'>
                        {description.map((edu, i) => (
                          <li key={i} className='border-l-2 border-cyan-300/50 pl-3'>
                            <p className='text-white font-bold'>{edu.degree}</p>
                            <p className='text-slate-300'>{edu.college}</p>
                            <p className='text-slate-400 italic'>{edu.year}</p>
                          </li>
                        ))}
                      </ul>
                    ) : title === 'Links' ? (
                      <ul className='text-slate-300 text-sm space-y-3'>
                        {description.map((link, i) => (
                          <li key={i} className='flex gap-4 justify-center'>
                            {link.github && (
                              <a
                                href={link.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-cyan-300 font-semibold hover:text-white underline underline-offset-4 duration-300'
                              >
                                GitHub
                              </a>
                            )}
                            {link.linkedln && (
                              <a
                                href={link.linkedln}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-cyan-300 font-semibold hover:text-white underline underline-offset-4 duration-300'
                              >
                                LinkedIn
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : null
                  ) : (
                    <p className='text-slate-300 text-sm leading-6'>{description}</p>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About