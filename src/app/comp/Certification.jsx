'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { certifications } from '../assets/assets'

const Certification = () => {
  return (
    <motion.section
      id='certifications'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-5 sm:px-8 lg:px-[5%] xl:px-[7%] py-12 sm:py-14 lg:py-16 scroll-mt-20 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 text-white'
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='max-w-5xl mx-auto mb-8 lg:mb-10'
      >
        <p className='text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-cyan-300 mb-3'>
          Credentials
        </p>

        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight'>
          Certifications
        </h2>

        <p className='mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-7'>
          Verified learning, professional development, and technical training completed through recognized platforms.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='grid gap-5 lg:gap-6 max-w-5xl mx-auto md:grid-cols-2'
      >
        {certifications.map(({ id, title, issuer, date, hours, description, skills, credentialLink }) => (
          <motion.article
            key={id}
            whileHover={{ scale: 1.01 }}
            className='relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6 shadow-xl shadow-black/30 backdrop-blur-md duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08] hover:shadow-cyan-900/30 before:absolute before:top-0 before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-cyan-400 before:to-violet-500'
          >
            <div className='flex items-start gap-4'>
              <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-lg font-black text-cyan-200'>
                ✓
              </div>

              <div>
                <p className='text-xs font-bold uppercase tracking-[0.2em] text-slate-400'>
                  Course Certificate
                </p>

                <h3 className='mt-1 text-lg sm:text-xl font-black text-white'>
                  {title}
                </h3>

                <p className='mt-1 text-sm font-bold text-cyan-300'>
                  {issuer}
                </p>
              </div>
            </div>

            <div className='mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-300'>
              {date && (
                <span className='rounded-full border border-white/10 bg-white/10 px-3 py-1'>
                  {date}
                </span>
              )}

              {hours && (
                <span className='rounded-full border border-white/10 bg-white/10 px-3 py-1'>
                  {hours}
                </span>
              )}
            </div>

            {description && (
              <p className='mt-5 text-sm leading-6 text-slate-300'>
                {description}
              </p>
            )}

            {skills && skills.length > 0 && (
              <div className='mt-5 flex flex-wrap gap-2'>
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className='rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-300/20'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {credentialLink && (
              <a
                href={credentialLink}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100'
              >
                View credential →
              </a>
            )}
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Certification