import React from 'react'
import "./styles/General.css"
import Navbar from './components/GeneralComponents/Navbar'
import { OwnRoutes } from './components/Routing/OwnRoutes'

const App = () => {
  return (
    <>
      <Navbar />
      <OwnRoutes />
    </>
  )
}

export default App