import React from 'react'
import { motion } from 'framer-motion'

export const CardProyect = ({ img, title, children, n, url='#' }) => {
  return (
    <motion.a
      href={url}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: n }}
      className='w-full grid grid-cols-1img mobileXL:grid-cols-2 gap-4 border-gray-500 border rounded-xl overflow-hidden group/item'
      loading='lazy'>
      <main className='h-full'>
        <img className='h-full' src={img} alt={title} />
      </main>
      <section className='pt-3 pb-7 px-3 text-white flex flex-col mobileXL:min-h-60'>
        <div className='flex justify-end opacity-0 group/edit group-hover/item:opacity-100 transition-all'>
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 19.5 4.5M8.25 4.5H19.5M19.5 4.5v11.25" />
          </svg>
        </div>
        <h2 className='font-bold text-xl text-blue-300'>{title}</h2>
        <p className='font-extralight'>{children}</p>
        <button href="#" className='px-3 py-1 border rounded-md mt-3 mobileXL:mt-auto w-28 hover:scale-[1.05] transition-all active:scale-[0.95] hover:bg-purple-400'>Visitar Sitio</button>
      </section>
    </motion.a>
  )
}
