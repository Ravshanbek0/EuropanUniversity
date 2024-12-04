import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/footer'
import Academics from './pages/Academics/Academics'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/academics' element={<Academics />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App