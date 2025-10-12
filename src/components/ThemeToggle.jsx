import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle({theme, setTheme}){
  return (
    <button onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')} className='p-2 rounded-full border border-gray-200 dark:border-gray-700'>
      { theme === 'dark' ? <FaSun /> : <FaMoon /> }
    </button>
  )
}
