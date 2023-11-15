import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="shadow-sm">
      <Container>
        <nav className='flex justify-between py-4 items-center'>
          <div>
            <h1>logo</h1>
          </div>
          <div className='flex gap-4 items-center capitalize font-semibold text-gray-800'>
            <Link to={'/'} className="navbar-brand">glasses</Link>
            <Link to={'/'} className="navbar-brand">eye tests</Link>
            <Link to={'/'} className="navbar-brand">offers</Link>
            <Link to={'/'} className="navbar-brand">store</Link>
          </div>
          <button className='bg-blue-400 py-2 px-4 rounded-full capitalize font-semibold text-white'>
            book appointment
          </button>
        </nav>
      </Container>
    </nav>
  )
}

export default Navbar
