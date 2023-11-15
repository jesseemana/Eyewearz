import React from 'react'
import { Link } from 'react-router-dom'

export type GlassProps = {
  name: string
  price: string
  image: string
}

const Glasses = ({ glasses }: { glasses: GlassProps[] }) => {
  return (
    // create carousel here 
    <div className='flex gap-4 p-2'>
      {glasses.map((glass, index) => (
      // navigate to glass page onclick 
      <Link
        to={'/'}
        key={index} 
        className='border rounded-md w-[250px] h-[230px] hover:shadow-lg hover:cursor-pointer hover:transition-all'
      >
        <img src={glass.image} alt={glass.name} className='p-4'/>
        <div className='flex flex-col p-2'>
          <p className='text-gray-800 font-normal'>{glass.name}</p>
          <p className='font-semibold text-gray-700'>{glass.price}</p>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Glasses
