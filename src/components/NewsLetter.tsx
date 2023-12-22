import React from 'react'
import Container from './Container'
import { FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa'

const NewsLetter = () => {
  return (
    <section className='py-10'>
      <Container>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-semibold text-gray-800 capitalize'>
            professional stylish glasses at affordable prices
          </h1>
          <p className='text-gray-700 text-[18px] text-center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/>
            Officia quis sint nulla perspiciatis dignissimos doloribus assumenda 
            commodi dolore nobis fugit<br/>
            odio aperiam explicabo mollitia tempora blanditiis.<br/>
          </p>
        </div>
        <div className='py-10 flex items-center gap-4 justify-center'>
          <p className='capitalize font-semibold text-2xl'>join us now and get 15% off</p>
          <div>
            <input 
              type='text' 
              placeholder='enter your email address' 
              className='px-4 py-2 rounded-sm border border-black h-10 w-[300px]' 
            />
            <button className='bg-black text-white py-2 px-2 rounded-sm'>subscribe</button>
          </div>
          <div className='flex items-center gap-4 '>
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
            <FaTiktok size={30} />
            <FaYoutube size={30} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NewsLetter
