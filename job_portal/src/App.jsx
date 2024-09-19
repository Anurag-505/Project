import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './module_1/Home'
import Login from './module_1/Login'
import Signup from './module_1/Signup'
import Nav from './module_1/Nav'
import Adminlogin from './module_1/Adminlogin'
import Adminsignup from './module_1/Adminsignup'


function App() {
  const [] = useState(0)

  return (   
    <>
      <Nav />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/adminlogin" element={<Adminlogin />}/>
          <Route path="/adminsignup" element={<Adminsignup />}/>
        </Routes>
        
        
      
    </>
  )
}

export default App

