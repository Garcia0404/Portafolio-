import React from 'react'
import { motion } from 'framer-motion'

export const CardProyect = ({img,title,children,n}) => {
  return (
    <motion.article 
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.3,delay:n}}
    className='w-full grid grid-cols-1img mobileL:grid-cols-2 gap-4 border-gray-500 border rounded-xl overflow-hidden hover:scale-1'
    loading='lazy'>
      <main className='h-full'>
        <img  className='h-full' src={img} alt={title}/>
      </main>
      <section className='p-3 text-white flex flex-col'>
        <h2 className='font-bold text-xl text-blue-300'>{title}</h2>
        <p className='font-extralight'>{children}</p>
        <a href="#" className='px-3 py-2 border rounded-md mt-auto w-28 hover:scale-[1.05] transition-all active:scale-[0.95] hover:bg-purple-400'>Visitar Sitio</a>
      </section>
    </motion.article>
  )
}
