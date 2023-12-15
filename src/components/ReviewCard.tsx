import React from 'react'
import { Review } from '../types'

const ReviewCard = ({ info }: { info: Review }) => {
  return (
    <div className='bg-gray-100 rounded-md p-6 flex flex-col gap-2'>
      <div className='flex items-center gap-3 p-1'>
        <img src={info.image} alt={info.name} className='h-[60px]' />
        <div className='flex flex-col'>
          <p className='font-bold capitalize text-lg md:text-2xl text-gray-700'>{info.name}</p>
          <p className='font-semibold capitalize text-lg md:text-2xl text-blue-400'>{info.review}</p>
        </div>
      </div>
      <hr/>
      <p className='text-gray-600 text-[17px] p-2'>{info.content}</p>
    </div>
  )
}

export default ReviewCard
