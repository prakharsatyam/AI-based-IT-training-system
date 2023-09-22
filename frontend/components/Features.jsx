'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn,textVariant2 } from '../styles/motion';

const Features = () => {
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" 
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8`}>
        <motion.div variants={fadeIn('right', 'spring', 0.2, 1)} className='flex-1 flex justify-center items-center'>
          <img src="/features.png" alt="features" className="w-[90%] h-[90%] object-contain" />
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="flex-[0.75] flex justify-center flex-col" >
          <motion.h2 variants={textVariant2} initial="hidden" whileInView="show"
          className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-center text-[#323F5D]`}>
             Features
          </motion.h2> 

          <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>

            <div className={`flex justify-center items-center flex-row`}>
                <div className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
                  <p className="font-bold text-[20px] text-white">
                    1
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#432d48] leading-[32.4px]">
                  One on One sessions with teachers for in depth learning
                </p>
            </div>

            <div className={`flex justify-center items-center flex-row`}>
                <div className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
                  <p className="font-bold text-[20px] text-white">
                    2
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#432d48] leading-[32.4px]">
                  Course recommendations and user profiling with learning assessment
                </p>
            </div>

            <div className={`flex justify-center items-center flex-row`}>
                <div className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
                  <p className="font-bold text-[20px] text-white">
                    3
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#432d48] leading-[32.4px]">
                  Remedial Teaching Chatbot
                </p>
            </div>

            <div className={`flex justify-center items-center flex-row`}>
                <div className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
                  <p className="font-bold text-[20px] text-white">
                    4
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#432d48] leading-[32.4px]">
                  Career guidance and recommendations
                </p>
            </div>

            <div className={`flex justify-center items-center flex-row`}>
                <div className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
                  <p className="font-bold text-[20px] text-white">
                    5
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#432d48] leading-[32.4px]">
                  AI generated mock test questions
                </p>
            </div>

          </div>

        </motion.div>
      </motion.div>
    </section>
  )
}

export default Features
