'use client'
import {motion} from 'framer-motion'
import { navmotion } from '@/styles/motion'
import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <motion.nav variants={navmotion} whileInView="show" initial="hidden" className={`py-5 relative`}>
     
      <div className='absolute w-[40%] inset-0 gradient-01'/>

      <div className={`flex mx-auto align-center items-center justify-between gap-8`}>
        <img src='./logo2.png' className='w-[80px] h-[80px] object-contain'/>
        <h2 className='font-extrabold text-[24px] leading-[30px] text-[#a509ff]'>BREEZE</h2>
        <Link href='/LogIn'><button
        className={'bg-green-400 font-bold hover:bg-green-700 hover:text-white py-2 px-4 rounded-lg items-center'}>
          Get started
        </button></Link>
      </div>

     
    </motion.nav>
  )
}

export default Navbar
