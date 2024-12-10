import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Academics from './pages/Academics/Academics'
import Footer2 from './components/Footer/Footer2'
import About from './pages/About/About'
import Design from './pages/Design/Design'
import History from './pages/History/History'
import Art from './pages/Art/Art'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='/about' element={<About />} />
          <Route path='/design' element={<Design />} />
          <Route path='/history' element={<History />} />
          <Route path='/art' element={<Art />} />
        </Routes>
        <Footer2 />
      </BrowserRouter>
    </div>
  )
}

export default App