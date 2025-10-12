import React, {useState} from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setSent(true)
    setTimeout(()=> setSent(false), 3000)
  }
  return (
    <section id='contact' className='py-20 bg-gray-50 dark:bg-transparent text-gray-900 dark:text-gray-100'>
      <div className='max-w-3xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-4 text-primary dark:text-white'>Contact</h2>
        <p className='mb-6 text-gray-700 dark:text-gray-300'>Want to work together? Reach out via Fiverr or send a message below.</p>
        <form onSubmit={handleSubmit} className='grid gap-4'>
          <input required className='p-3 rounded border' placeholder='Your name' />
          <input required type='email' className='p-3 rounded border' placeholder='Your email' />
          <textarea required className='p-3 rounded border' rows='5' placeholder='Message'></textarea>
          <div className='flex items-center gap-4'>
            <button className='bg-accent text-black px-5 py-3 rounded font-semibold'>Send Message</button>
            <a href='https://www.fiverr.com/s/e6pe6lE' target='_blank' rel='noreferrer' className='px-4 py-2 border rounded-md'>Hire on Fiverr</a>
            {sent && <span className='text-sm text-green-500'>Message prepared (demo)</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
