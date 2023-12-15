import React, { useEffect, useState } from 'react'
import Container from './Container'
import ProductCard from './ProductCard'

const Explore = () => {
  const [glasses, setGlasses] = useState([])

  useEffect(() => {
    async function getGlasses() {
      try {
        const results = await fetch('http://localhost:3030/sunglasses')
        const glasess =  await results.json()
        setGlasses(glasess)
      } catch (error: unknown) {
        console.error(`Couldn't fetch data: ${error}`)
      }
    }

    getGlasses()
  }, [])


  return (
    <Container>
      <div className='flex flex-col items-center gap-4 py-'>
        <h1 className='text-4xl font-semibold text-gray-800'>
          Check out our available frames
        </h1>
        <p className='text-gray-700 text-[20px]'>
          Explore our wide range of eyewear. We may have what you're looking for.
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 place-items-center gap-10 py-5'>
        {glasses.map(item => (
          <ProductCard item={item} />
        ))}
      </div>
    </Container>
  )
}

export default Explore
