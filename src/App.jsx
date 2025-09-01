import './App.css'
import AboutMe from './Components/AboutMe.jsx'
import Projects from './Components/Projects.jsx'
import Certifications from './Components/Certifications.jsx'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx'
import ProfileSelector from './Components/ProfileSelector.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProfileSelector />} />
          <Route path='/home' element={<Home title='Front End' txt="I'm Mati, this is my web portfolio, I hope you like it"/>} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certifications' element={<Certifications/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
