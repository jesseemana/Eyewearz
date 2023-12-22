import React from 'react'
import Container from './Container'
import { ItemProps } from '../types'

const Picks = () => {
  return (
    <section id='picks'>
      <Container>
        <div className='grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-none gap-2 p-2'>
          {picksData.map((item: ItemProps, index) => (
            <div 
              key={index} 
              className='flex flex-col items-center gap-2'
            >
              <img src={item.image} alt={item.title} />
              <p className='text-center font-semibold text-gray-900 capitalize text-2xl'>{item.title}</p>
              <button className='bg-gray-600 text-white font-semibold p-2 rounded-md w-[100px] capitalize'>
                view more
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Picks

export const picksData = [
  {
    title: 'top picks of the year',
    image: './toppicks.webp',
  },
  {
    title: 'best selling',
    image: 'newcollections.webp',
  },
]
