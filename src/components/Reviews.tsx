import React from 'react'
import Container from './Container'
import ReviewCard from './ReviewCard'
import { Review } from '../types'

const Reviews = () => {
  return (
    <div className='py-10'>  
      <Container>
        <div className='flex flex-col items-center gap-4 text-sm py-10'>
          <h1 className='text-4xl font-semibold text-gray-800 capitalize'>
            what others are saying
          </h1>
          <p className='text-gray-700 text-[20px]'>
            Read what other satisified customers are saying about us.
          </p>
        </div>

        <div className='grid grid-cols-3 gap-4 p-4'>
          {reviews.map((review: Review, index) => (
            <ReviewCard info={review} key={index} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Reviews

export const reviews = [
  {
    image: './avatar1.png',
    name: 'shelly',
    review: 'easy to buy',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores consequatur dicta fugiat autem ullam quas ipsa ratione illum! Veniam nihil dolores eaque error rem quis velit voluptates assumenda voluptatibus?'
  },
  {
    image: './avatar2.png',
    name: 'matt',
    review: 'excellent quality',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores consequatur dicta fugiat autem ullam quas ipsa ratione illum! Veniam nihil dolores eaque error rem quis velit voluptates assumenda voluptatibus?'
  },
  {
    image: './avatar3.png',
    name: 'allison',
    review: 'affordable',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores consequatur dicta fugiat autem ullam quas ipsa ratione illum! Veniam nihil dolores eaque error rem quis velit voluptates assumenda voluptatibus?'
  },
]
