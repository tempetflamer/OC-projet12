import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Error404 from './pages/Error404/Error404.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Login from './pages/Login/Login.jsx'
import Header from './components/Header/Header.jsx'
import logo from './assets/logo.svg'

function App() {
  return (
    <Router>
      <Header img={logo} alt="Logo de SportSee" />
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/dashboard/:userID" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
