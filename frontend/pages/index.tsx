import Image from 'next/image'
import { Inter } from 'next/font/google'

import {Aboutproj,Faq,Footer,Funcstack,Hero,Navbar,Features,Team,Techstack} from '../components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-16 py-5 overflow-hidden sm:px-15">
      <Navbar/>
      <Hero/>
      <div className="relative">
        <div className="gradient-04 z-0" />
        <Techstack/>
      </div>
      <Aboutproj/>
      <Features/>
      <Team/>

      FAQ
      <Footer/>
    </main>
  )
}
