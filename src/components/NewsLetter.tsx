import React from 'react'
import Container from './Container'
import Socials from './Socials'

const NewsLetter = () => {
  const doStuff = () => {
    alert('Subscribed to newsletter!')
  }

  return (
    <section id='newsletter' className='py-10'>
      <Container>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl lg:text-4xl font-semibold text-gray-800 capitalize text-center'>
            professional stylish glasses at affordable prices
          </h1>
          <p className='text-lg text-gray-700 md:text-[18px] text-center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
            Officia quis sint nulla perspiciatis dignissimos doloribus assumenda<br/>
            commodi dolore nobis fugit.
          </p>
        </div>
        <div className='py-10 flex items-center gap-4 justify-center flex-col lg:flex-row'>
          <p className='capitalize font-semibold md:text-2xl text-xl text-center'>join us now and get 15% off</p>
          <div className='flex'>
            <input 
              type='text' 
              placeholder='enter your email address' 
              className='px-4 py-2 rounded-sm border border-black h-10 lg:w-[300px]' 
            />
            <button 
              onClick={doStuff} 
              className='bg-black text-white py-2 px-4 rounded-sm'
            >
              subscribe
            </button>
          </div>
          {/* use tailwind merge for custom display or hidden */}
          <div className='hidden md:flex'> 
            <Socials />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NewsLetter
