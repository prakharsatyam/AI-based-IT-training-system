'use client'
import React from 'react'

const Footer = () => {
  return (
    <div >
     
      <div className="flex flex-col ">
        <div className="mb-[50px] h-[2px] bg-[#ada8bd] opacity-10" />
     
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-[#ada8bd]">
            AINNOVATION
          </h4>
          <p className="font-normal text-[14px] text-[#ada8bd] opacity-50">
            Copyright © 2023 - 2024 Ainnovation. All rights reserved.
          </p>

          <div className="flex gap-4">
           
            <img src="/twitter3.png" alt="x"
            className="w-[24px] h-[24px] object-contain cursor-pointer"/>
 
            <img src="/linkedin2.png" alt="x"
            className="w-[24px] h-[24px] object-contain cursor-pointer"/>

            <img src="/instagram2.png" alt="x"
            className="w-[24px] h-[24px] object-contain cursor-pointer"/>

            <img src="/facebook2.png" alt="x"
            className="w-[24px] h-[24px] object-contain cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer