import React from 'react'
import Container from './Container'
import { FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa'

const NewsLetter = () => {
  return (
    <section id='newsletter' className='py-10'>
      <Container>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl lg:text-4xl font-semibold text-gray-800 capitalize text-center'>
            professional stylish glasses at affordable prices
          </h1>
          <p className='text-sm text-gray-700 md:text-[18px] text-center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
            Officia quis sint nulla perspiciatis dignissimos doloribus assumenda<br/>
            commodi dolore nobis fugit.
          </p>
        </div>
        <div className='py-10 flex items-center gap-4 justify-center flex-col lg:flex-row'>
          <p className='capitalize font-semibold md:text-2xl text-xl'>join us now and get 15% off</p>
          <div className='flex'>
            <input 
              type='text' 
              placeholder='enter your email address' 
              className='px-4 py-2 rounded-sm border border-black h-10 lg:w-[300px]' 
            />
            <button className='bg-black text-white py-2 px-2 rounded-sm'>subscribe</button>
          </div>
          <div className='flex items-center gap-6 sm:hidden md:flex'>
            <FaFacebook size={30} className='fill-blue-500' />
            <FaTwitter size={30} className='fill-blue-400' />
            <FaInstagram size={30} className='fill-purple-500' />
            <FaTiktok size={30} />
            <FaYoutube size={30} className='fill-red-600'/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NewsLetter
