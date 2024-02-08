import React from 'react'
import eshopProyect from '../../../assets/eshop.png'

export const CardProyect = () => {
  return (
    <article className='w-full tablet:w-96 flex'>
      <main className='overflow-hidden rounded-md'>
        <div className='flex bg-white gap-1 p-2'>
          <div className='bg-red-500 rounded-full h-4 w-4'></div>
          <div className='bg-yellow-500 rounded-full h-4 w-4'></div>
          <div className='bg-green-500 rounded-full h-4 w-4'></div>
        </div>
        <img src={eshopProyect} alt="Eshop"/>
      </main>
      <section className='text-white'>
        <h2>Eshop</h2>
        <p>Este sitio es una tienda virtual en donde se tiene un carrito funcional y se usan rutas internas, privadas y dinámicas.</p>
      </section>
    </article>
  )
}
