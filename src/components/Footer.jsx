import React from 'react'

export default function Footer(){
  return (
    <footer className='py-8 text-center text-sm text-gray-500 dark:text-gray-400'>
      <div className='max-w-4xl mx-auto'>
        © {new Date().getFullYear()} Muhammad Binyamin · Built with React & Tailwind
      </div>
    </footer>
  )
}
