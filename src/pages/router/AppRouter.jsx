import { Routes, Route } from 'react-router-dom'
import { Proyects, Contact, HomePage, Navbar } from '..'
export const AppRouter = () => {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/proyectos' element={<Proyects />}></Route>
        <Route path='/contacto' element={<Contact />}></Route>
      </Routes>
    </>
  )
}
