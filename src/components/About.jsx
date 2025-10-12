import React from 'react'

export default function About(){
  return (
    <section id='about' className='py-20 bg-white dark:bg-[#071426] text-gray-900 dark:text-gray-100'>
      <div className='max-w-4xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-4 text-primary dark:text-white'>About Me</h2>
        <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
          I am a Frontend Developer focused on creating responsive and modern websites using React and Tailwind CSS. I enjoy turning designs into pixel-perfect interfaces and building fast, accessible user experiences.
        </p>
      </div>
    </section>
  )
}
