'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer,textVariant2} from '../styles/motion';

const Aboutproj = () => {
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col`}>
        <motion.h2 variants={textVariant2} initial="hidden" whileInView="show"
        className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-center text-[#323F5D]`}>
            About Us
        </motion.h2> 
        
        <motion.p variants={fadeIn('down', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[#333333]">
          Ever felt stuck while going through a course? Skipping topics because lack of understanding? 
          SAY NO MORE! <span className="font-extrabold text-[#0c356a]">AINNOVATION</span> is the next generation 
          thing to help you study as per your capabilities and make you boost your academics. The power of AI 
          is now in your hands.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Aboutproj
