import React from 'react'
import { Link } from 'react-router-dom'
import { GlassProps } from '../types'

const ProductCard = ({ item }:{ item: GlassProps }) => {
  return (
    <Link
      to={`/product/${item.id}`}
      className='border rounded-md w-[250px] h-[230px] hover:shadow-lg hover:cursor-pointer hover:transition-all'
    >
      <img src={item.image} alt={item.name} className='p-4'/>
      <div className='flex flex-col p-2'>
        <p className='text-gray-800 font-normal'>{item.name}</p>
        <p className='font-semibold text-gray-700'>{item.price}</p>
      </div>
    </Link>
  )
}

export default ProductCard
