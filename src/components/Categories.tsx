import React from 'react'

const Categories = () => {
  return (
    <div className='grid grid-cols-3 lg:grid-cols-5 place-items-center py-10'>
      {categories.map((item, index) => (
        <div key={index} className='flex flex-col items-center'>
          <img src={item.image} alt="" className='lg:h-40 h-20' />
          <p className='capitalize font-semibold text-gray-800'>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Categories

export const categories = [
  {
    name: 'women',
    image: './women.webp'
  },
  {
    name: 'men',
    image: './men.webp'
  },
  {
    name: 'kids',
    image: './kids.webp'
  },
  {
    name: 'sunglasses',
    image: './sunglasses.webp'
  },
  {
    name: 'bluelight',
    image: './bluelight.webp'
  },
]
