import React from 'react'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects(){
  return (
    <section id='projects' className='py-20 bg-gray-50 dark:bg-transparent text-gray-900 dark:text-gray-100'>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-8 text-primary dark:text-white'>Projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((p, i)=> (
            <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className='p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#021221]'>
              <h3 className='text-xl font-semibold mb-2'>{p.title}</h3>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>{p.description}</p>
              <div className='flex gap-3'>
                <a href={p.link} target='_blank' rel='noreferrer' className='px-4 py-2 border rounded-md hover:bg-white/5 flex items-center gap-2'>
                  Live Demo <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
