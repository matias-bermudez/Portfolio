import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import AboutMe from './Components/AboutMe.jsx'
import Projects from './Components/Projects.jsx'
import Certifications from './Components/Certifications.jsx'
import Contact from './Components/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
