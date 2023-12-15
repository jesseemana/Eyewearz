import React from 'react'
import { Link } from 'react-router-dom'
import { ProductProps } from '../types'

const ProductCard = ({ item }:{ item: ProductProps }) => {
  return (
    <div className=''>
      <p className='bg-yellow-600 w-10 rounded-full text-white px-2 font-semibold'>hot</p>
      <Link
        to={`/product/${item.id}`}
        className='hover:transition-all mt-2'
      >
        <img src={item.image} alt={item.name} className='h-[200px]'/>
        <div className='flex flex-row p-2 justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-800 capitalize font-semibold text-sm'>{item.name}</p>
            <p className='font-bold text-gray-900'>{item.price}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <button className='bg bg-blue-400 px-3 text-white rounded-sm'>cart</button>
              <button className='border border-blue-400 px-3 text-blue-400 rounded-sm'>fav</button>
            </div>
            <p className='text text-gray-400 text-sm'>{item.reviews} reviews</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
