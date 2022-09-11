import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login/Login'
import Signup from './components/Auth/signup/Signup'
import Settings from './components/settings/Settings'
import Home from './components/Home/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App