import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppContext } from './context/AppContext'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContext>
      <AppRouter></AppRouter>
    </AppContext>
  </BrowserRouter>

)
