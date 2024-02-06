import { createContext,useState } from 'react'
export const Contexto = createContext()

export const AppContext = ({ children }) => {
  
  const [ theme,setTheme ] = useState(false)
  
  return (
    <Contexto.Provider value={{theme,setTheme}}>
      {children}
    </Contexto.Provider>
  )
}
