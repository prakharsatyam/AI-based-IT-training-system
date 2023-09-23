'use client'
import react from "react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen ">
      <div className="bg-[#6C63FF] min-h-screen pl-[7px] flex flex-col flex-1 justify-center items-center">
        <h1 className="text-[#ffffff] font-bold  mt-[15px] text-3xl">New here?</h1>
        <p className="text-[#ffffff] mx-[5px] mt-[6px] text-xl">Wait no more and create your new account!</p>
        <Link href='/SignUp'><button className="mt-[15px] text-[#ffffff] border-2 border-[#ffffff] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[15px]">
          SIGN UP</button></Link>

        <img src="/info1.png" className="image" alt="" />
      </div>


      <div className="bg-[#ffffff] min-h-screen flex flex-col flex-1 justify-center items-center ">
        <form>
          <h1 className="text-[#000000] font-extrabold flex justify-center items-center mb-[20px] text-3xl">Sign in</h1>

          <div className="max-w-[380px] w-full bg-[#f0f0f0] ml-[10px] mr-[10px] my-[15px] rounded-[55px] py-[10px] flex items-center justify-center">
            <img src='/user.png' height="20" width="20" className='icon mr-[10px]'/> 
            <input type="text" placeholder="Username" className=" bg-[#f0f0f0]"/>
          </div>
          
          <div className="max-w-[380px] w-full bg-[#f0f0f0] my-[15px] ml-[10px] mr-[10px] rounded-[55px] py-[10px] flex items-center justify-center">
            <img src='/lock.png' height="20" width="20" className='icon mr-[10px]'/> 
            <input type="password" placeholder="Password" className=" bg-[#f0f0f0]"/>
          </div>

          <div className="flex items-center justify-center">
            <input type="submit" value="LOGIN" className="bg-[#6C63FF] w-[150px] my-[10px] py-[6px] rounded-[49px]
            text-[#ffffff] cursor-pointer font-medium"/>
          </div>

          <div className="flex flex-colitems-center justify-center my-[10px]">
            <p>Or sign in with social handles</p>
          </div>

          <div className="flex items-center justify-center my-[5px]">
            <a href="#" className="cursor-pointer">
              <img src="/google.png" height="35" width="35" className='mx-[7px] p-[3px] my-[5px] border-[#333333] border-2 rounded-full hover:border-[#3944bc]'/>
            </a>

            <a href="#" className="cursor-pointer">
              <img src="/linkedin.png" height="35" width="35" className='mx-[7px] p-[3px] my-[5px] border-[#333333] border-2 rounded-full hover:border-[#3944bc]'/> 
            </a>

            <a href="#" className="cursor-pointer">
              <img src="/facebook.png" height="35" width="35" className='mx-[7px] p-[3px] my-[5px] border-[#333333] border-2 rounded-full hover:border-[#3944bc]'/> 
            </a>
          </div>
        </form>
      </div>
    </main>
  )
}
