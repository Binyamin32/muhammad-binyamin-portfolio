import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className='min-h-[80vh] flex items-center' style={{background: 'linear-gradient(90deg,#071245 0%, #0f172a 100%)'}}>
      <div className='max-w-5xl mx-auto px-6 py-24 text-white'>
        <motion.h1 initial={{opacity:0, y: -20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className='text-5xl md:text-6xl font-extrabold mb-4'>
          Muhammad Binyamin
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className='text-lg md:text-xl text-gray-200 max-w-2xl mb-8'>
          I build modern, responsive websites and landing pages using React & Tailwind CSS — clean code, fast performance, and great UX.
        </motion.p>
        <div className='flex gap-4'>
          <a href='https://www.fiverr.com/s/e6pe6lE' target='_blank' rel='noreferrer' className='bg-yellow-400 text-black px-5 py-3 rounded-lg font-semibold shadow-lg hover:brightness-105'>Hire Me</a>
          <a href='#projects' className='px-5 py-3 rounded-lg border border-white/20'>View Projects</a>
        </div>
      </div>
    </section>
  )
}
