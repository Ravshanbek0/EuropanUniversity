import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
      <div className="nav">
        <Link to={'/'}><div className="logo">
          <img src="./imgs/logo.png" alt="" />
        </div>
        </Link>
        <ul>
          <NavLink to={'/'}><li>About</li></NavLink>
          <NavLink to={'/academics'}><li>Academics</li></NavLink>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar