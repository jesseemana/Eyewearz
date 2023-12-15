import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="shadow-sm">
      <Container>
        <nav className='flex justify-between py-3 items-center'>
          <Link to={'/'}>
            <h1>logo</h1>
          </Link>
          <div className='lg:flex gap-4 items-center capitalize font-normal text-gray-800 hidden'>
            <Link to={'/eyeglasses'} className="navbar-brand">eyeglasses</Link>
            <Link to={'/sunglasses'} className="navbar-brand">sunglasses</Link>
            <Link to={'/tests'} className="navbar-brand">eye tests</Link>
            <Link to={'/'} className="navbar-brand">store</Link>
            <Link to={'/'} className="navbar-brand">deals</Link>
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
