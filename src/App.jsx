import React from 'react'
import "./App.css"
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from "./Components/About"
import Contact from "./Components/Contact"

const App = () => {
  const location = useLocation()

  return (
    <div className='App'>
      <Navbar/>
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App