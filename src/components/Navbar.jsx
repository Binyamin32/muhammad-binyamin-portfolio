import React from 'react'
import ThemeToggle from './ThemeToggle'
import { FiMenu } from 'react-icons/fi'

export default function Navbar({theme, setTheme}){
  return (
    <header className='sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-[#041426]/60 border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-5xl mx-auto px-6 py-3 flex items-center justify-between'>
        <div className='font-bold text-lg'>Muhammad Binyamin</div>
        <nav className='hidden md:flex gap-6 items-center'>
          <a href="#about" className='hover:text-accent'>About</a>
          <a href="#projects" className='hover:text-accent'>Projects</a>
          <a href="#skills" className='hover:text-accent'>Skills</a>
          <a href="#contact" className='hover:text-accent'>Contact</a>
          <a href="https://www.fiverr.com/s/e6pe6lE" target="_blank" rel="noreferrer" className='px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700'>Hire Me</a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </nav>
        <div className='md:hidden flex items-center gap-3'>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button aria-label='menu' className='p-2 rounded-md border'><FiMenu /></button>
        </div>
      </div>
    </header>
  )
}
