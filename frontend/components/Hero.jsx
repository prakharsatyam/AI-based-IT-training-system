'use client'
import {motion} from 'framer-motion'
import React from 'react'
import { slideIn,staggerContainer,textVariant } from '@/styles/motion'

const Hero = () => {
  return (
    <section className={`sm:py-16 xs:py-8 py-12 `}>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}>
      
        <div className="flex flex-col justify-center relative items-center z-10">
          <motion.h1 variants={textVariant(1.1)} 
          className={`font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-blue-500 `}>
            AINNOVATION
          </motion.h1>
        </div>

        <motion.div
        variants={slideIn('right','tween',0.2,1)} className='relative w-full md:-mt-[20px] -mt-[12px]'>
          {/* <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]'/> */}
          <img src="/aimage.jpg" alt="ai_hand" className="w-full rounded-[5px] shadow-2xl sm:h-[500px] h-[350px] object-cover z-10 relative"/>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
