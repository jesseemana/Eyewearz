import React, { useEffect, useState } from 'react'
import Container from './Container'
import GlassesSwiper from './Swiper'

const Explore = () => {
  const [glasses, setGlasses] = useState([])

  useEffect(() => {
    async function getGlasses() {
      try {
        const results = await fetch('http://localhost:3000/glasses')
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
      <div className='flex flex-col items-center gap-4 py-10'>
        <h1 className='text-4xl font-semibold text-gray-800'>Check out our available frames</h1>
        <p className='text-gray-700 text-[20px]'>
          Explore our wide range of eyewear. We may have what you're looking for.
        </p>

        <GlassesSwiper glasses={glasses} />
      </div>
    </Container>
  )
}

export default Explore
