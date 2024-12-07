import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Academics from './pages/Academics/Academics'
import Footer2 from './components/Footer/Footer2'
import About from './pages/About/About'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer2 />
      </BrowserRouter>
    </div>
  )
}

export default App