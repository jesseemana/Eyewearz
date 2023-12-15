import React from 'react'

const Hero = () => {
  return (
    <div className='h-[430px] bg-gray-50 flex flex-col items-center justify-center gap-10'>
      <h1 className='text-5xl font-semibold text-blue-400'>
        Find eyewear or book your appointment
      </h1>
      <div className='flex flex-col lg:flex-row gap-2 font-semibold'>
        <button className='text-xl rounded-full bg-blue-400 py-1 px-4 text-white'>Book eye test</button>
        <button className='text-xl rounded-full bg-blue-400 py-1 px-4 text-white'>Book contact lens appointment</button>
      </div>
    </div>
  )
}

export default Hero
