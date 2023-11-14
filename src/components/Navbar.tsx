import React from 'react'
import Container from './Container'

const Navbar = () => {
  return (
    <nav className="shadow-sm">
      <Container>
        <nav className='flex justify-between py-4 items-center'>
          <div>
            <h1>logo</h1>
          </div>
          <div className='flex gap-4 items-center capitalize font-semibold text-gray-800'>
            <a className="navbar-brand" href="#">glasses</a>
            <a className="navbar-brand" href="#">eye tests</a>
            <a className="navbar-brand" href="#">offers</a>
            <a className="navbar-brand" href="#">store</a>
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
