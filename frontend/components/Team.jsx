'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer,textVariant2 } from '../styles/motion';

const Team = () => {
  return (
    <div className='relative z-10 sm:p-16 xs:p-8 px-6 py-12'>
      <div className='absolute w-[50%] inset-0 z-0 blur-[300px] hero-gradient'/>
      <div className="gradient-02 z-0"/>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}>
          <motion.h2
            variants={textVariant2} initial="hidden" whileInView="show"
            className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-center text-[#323F5D]`}>
            Our team members
          </motion.h2>

          <motion.div variants={fadeIn('left', 'tween', 0.3, 1)} className="relative my-[8px] justify-center items-center flex w-full h-full">
            <div className='flex flex-col justify-center items-center '>
              <div className='flex justify-center items-center my-[8px]'>
                <motion.div variants={fadeIn('left', 'tween', 0.3, 1)} className='mx-[3px] flex flex-col justify-center items-center'>
                  <img src='/user.png' className='w-[15%] h-[15%] mb-[2px]'/>
                  <p className='font-bold text-[13px] mt-[5px]'>Sohaum Ghosh</p>
                  <p className=' text-[10px] mt-[1px]'>Frontend</p>
                </motion.div>

                <motion.div variants={fadeIn('left', 'tween', 0.3, 1)} className='mx-[3px] flex flex-col justify-center items-center'>
                  <img src='/user.png' className='w-[15%] h-[15%] mb-[2px]'/>
                  <p className='font-bold text-[13px] mt-[5px]'>Sampurna Ghosh</p>
                  <p className=' text-[10px] mt-[1px]'>Backend</p>
                </motion.div>

                <motion.div variants={fadeIn('left', 'tween', 0.3, 1)} className='mx-[3px] flex flex-col justify-center items-center'>
                  <img src='/user.png' className='w-[15%] h-[15%] mb-[2px]'/>
                  <p className='font-bold text-[13px] mt-[5px]'>Indra Mondal</p>
                  <p className=' text-[10px] mt-[1px]'>Frontend</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn('right', 'tween', 0.3, 1)} className="relative my-[8px] justify-center items-center flex w-full h-full">
            <div className='flex flex-col justify-center items-center '>
              <div className='flex justify-center items-center my-[8px]'>
                <motion.div variants={fadeIn('right', 'tween', 0.3, 1)} className='mx-[3px] flex flex-col justify-center items-center'>
                  <img src='/user.png' className='w-[15%] h-[15%] mb-[2px]'/>
                  <p className='font-bold text-[13px] mt-[5px]'>Nabin Ghosh</p>
                  <p className=' text-[10px] mt-[1px]'>Backend</p>
                </motion.div>

                <motion.div variants={fadeIn('right', 'tween', 0.3, 1)} className='mx-[3px] flex flex-col justify-center items-center'>
                  <img src='/user.png' className='w-[15%] h-[15%] mb-[2px]'/>
                  <p className='font-bold text-[13px] mt-[5px]'>Anustup Chakraborty</p>
                  <p className=' text-[10px] mt-[1px]'>Backend</p>
                </motion.div>

                <motion.div variants={fadeIn('right', 'tween', 0.3, 1)} className='mx-[3px] flex flex-col justify-center items-center'>
                  <img src='/user.png' className='w-[15%] h-[15%] mb-[2px]'/>
                  <p className='font-bold text-[13px] mt-[5px]'>Prakhar Satyam</p>
                  <p className=' text-[10px] mt-[1px]'>Backend</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
      </motion.div>
    </div>
  )
}

export default Team
