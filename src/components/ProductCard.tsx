import React from 'react'
import { Link } from 'react-router-dom'
import { ProductProps } from '../types'
import { BiHeart } from 'react-icons/bi'


const ProductCard = ({ item }: { item: ProductProps }) => {
  const { _id, name, price, image } = item

  const handleCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    alert('Cart triggered')
  }

  function handleFave(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.stopPropagation()
    alert('Favorites triggered')
  }

  return (
    <Link to={`/product/${_id}`}>
      <div className='hover:transition-all mt-2'>
        <img 
          src={image} 
          alt={name} 
          className='lg:h-[200px]'
        />
        <div className='flex flex-col lg:flex-row p-2 gap-2 justify-between'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 py-1'>
              <p className='text-gray-800 capitalize font-semibold text-[12px]'>{name}</p>
              <BiHeart 
                size={20} 
                className='text-blue-500' 
                onClick={handleFave}
              />
            </div>
            <p className='font-semibold lg:font-bold text-gray-900 text-[16px]'>{price}</p>
          </div>
          <div className='  flex flex-col gap-2'>
            <button 
              onClick={handleCart}
              className='border-2 border-blue-500 text-blue-500 lg:px-2 lg:py-1 py-[4px] rounded-[4px] capitalize md:text-[16px] text-[14px] font-semibold'
            >
              add to cart
            </button>
            {/* <p className='text text-gray-400 text-sm'>{reviews} reviews</p> */}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
