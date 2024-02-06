import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='text-whiteMain flex justify-between px-4 tablet:px-10 shadow-md py-2 items-center'>
      <div className='border rounded-full p-2 text-md font-bold border-purple-600 drop-shadow-[0_0_0.3rem_#9333ea]'>JG</div>
      <div className='text-sm flex gap-5 font-light'>
        <NavLink className={({isActive})=>(isActive?'font-semibold drop-shadow-[0_0_0.1rem_#f2f2f2]':'text-whiteMain hover:text-purple-600 transition-all')} to='/' >Home</NavLink>
        <NavLink className={({isActive})=>(isActive?'font-semibold drop-shadow-[0_0_0.1rem_#f2f2f2]':'text-whiteMain hover:text-purple-600 transition-all')} to='/proyectos'>Proyectos</NavLink>
        <NavLink className={({isActive})=>(isActive?'font-semibold drop-shadow-[0_0_0.1rem_#f2f2f2]':'text-whiteMain hover:text-purple-600 transition-all')} to='/contacto'>Contacto</NavLink>
      </div>
    </nav>
  )
}
