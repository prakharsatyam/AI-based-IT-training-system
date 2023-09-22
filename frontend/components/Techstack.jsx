'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer,textVariant2 } from '../styles/motion';

{/* <motion.h2
    variants={textVariant2} initial="hidden" whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}>
    {title}
</motion.h2> */}

const Techstack = () => {
  return (
    <div className='relative z-10 sm:p-16 xs:p-8 px-6 py-12'>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}>
          <motion.h2
            variants={textVariant2} initial="hidden" whileInView="show"
            className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-center text-[#323F5D]`}>
            Technologies we used
          </motion.h2>

          <motion.div variants={fadeIn('left', 'tween', 0.3, 1)} className="relative mt-[68px] justify-center items-center flex w-full h-full">
            <img src='tech1.png' />
          </motion.div>
      </motion.div>
    </div>
  )
}

export default Techstack
