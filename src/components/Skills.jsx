import React from 'react'
export default function Skills(){
  const skills = ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git', 'Netlify']
  return (
    <section id='skills' className='py-20 bg-white dark:bg-[#071426] text-gray-900 dark:text-gray-100'>
      <div className='max-w-4xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-6 text-primary dark:text-white'>Skills</h2>
        <div className='flex flex-wrap justify-center gap-3'>
          {skills.map((s,i)=> <span key={i} className='px-4 py-2 bg-gray-100 dark:bg-[#09202b] rounded-full border'>{s}</span>)}
        </div>
      </div>
    </section>
  )
}
