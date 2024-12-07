import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav-bar">
      <div className='container'>
        <div className="nav">
          <Link to={'/'}><div className="logo">
            <img src="./imgs/logo.png" alt="" />
          </div>
          </Link>
          <ul>
            <NavLink to={'/about'}><li className='nav-to'>About</li></NavLink>
            <NavLink to={'/academics'}><li className='nav-to'>Academics</li></NavLink>
            <li className='nav-to'>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar