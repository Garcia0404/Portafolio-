import React from 'react'
import { CardProyect } from './components/CardProyect'
import eshopProyect from '../../assets/eshop.png'
import ApiRick from '../../assets/ApiRick.png'
export const Proyects = () => {
  return (
    <main className='grid grid-cols-1a gap-5 mx-auto max-w-[700px] p-6'>
      <h1 className='text-purple-600 font-bold text-2xl'>Mis Proyectos</h1>
      <CardProyect title='Eshop' img={eshopProyect} n='0'>
      Tienda virtual que ofrece una experiencia de compras en línea, destacano por su carrito de compra funcional.
      </CardProyect>
      <CardProyect title='Rick and Morty' img={ApiRick} n='0.2'>
        Buscador de personajes de Rick and Morty en donde se consume una API.
      </CardProyect>
      <CardProyect title='Eshop' img={eshopProyect} n='0.4'>
      Tienda virtual que ofrece una experiencia de compras en línea, destacando por su carrito de compra funcional.
      </CardProyect>
      <CardProyect title='Eshop' img={eshopProyect} n='0.6'>
      Tienda virtual que ofrece una experiencia de compras en línea, destacando por su carrito de compra funcional.
      </CardProyect>
      <CardProyect title='Eshop' img={eshopProyect} n='0.8'>
      Tienda virtual que ofrece una experiencia de compras en línea, destacando por su carrito de compra funcional.
      </CardProyect>
      <CardProyect title='Eshop' img={eshopProyect} n='1'>
      Tienda virtual que ofrece una experiencia de compras en línea, destacando por su carrito de compra funcional.
      </CardProyect>
    </main>
  )
}
