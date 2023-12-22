import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { BsBagX } from 'react-icons/bs'
import { BiUser, BiSearch, BiHeart } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className='shadow-sm'>
      <Container>
        <div className='flex justify-between py-4 items-center'>
          <Link to={'/'}>
            <h1 className='capitalize font-bold text-gray-800'>Logo</h1>
          </Link>
          <div className='lg:flex gap-4 items-center capitalize font-semibold text-gray-800 hidden'>
            <Link to={'/eyeglasses'} className="navbar-brand">eyeglasses</Link>
            <Link to={'/sunglasses'} className="navbar-brand">sunglasses</Link>
            <Link to={'/tests'} className="navbar-brand">eye tests</Link>
            <Link to={'/'} className="navbar-brand">store</Link>
            <Link to={'/'} className="navbar-brand">deals</Link>
          </div>
          <div className='flex items-center gap-5 text-gray-500'>
            <BiSearch size={20} className='hover:cursor-pointer' />
            <BiUser size={20} className='hover:cursor-pointer' />
            <BiHeart size={20} className='hover:cursor-pointer' />
            <BsBagX size={20} className='hover:cursor-pointer' />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
