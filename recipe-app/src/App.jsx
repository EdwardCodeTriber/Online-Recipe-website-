import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Navigation from './Components/Navigation'
import Login from './Pages/login'
import Register from './Pages/register'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Navigation' element={<Navigation/>}/>
    </Routes>
    </BrowserRouter>
     {/* <Navigation/> */}
    </>
  )
}

export default App
