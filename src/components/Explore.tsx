import React, { useEffect, useState } from 'react'
import Container from './Container'
import ProductCard from './ProductCard'
import { ProductProps } from '../types'

const Explore = () => {
  const [glasses, setGlasses] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getGlasses() {
      try {
        setLoading(true)
        const results = await fetch('http://localhost:3030/sunglasses')
        const glasess =  await results.json()
        setGlasses(glasess)
      } catch (error: unknown) {
        console.error(`Couldn't fetch data: ${error}`)
      } finally {
        setLoading(false)
      }
    }
    getGlasses()
  }, [])


  return (
    <section id='explore'>
      <Container>
        <div className='flex flex-col items-center gap-4 py-'>
          <h1 className='lg:text-4xl text-2xl font-semibold text-gray-800 capitalize text-center'>
            check out our featured frames
          </h1>
          <p className='text-gray-700 text-[17px] lg:text-[20px] text-center'>
            Explore our wide range of eyewear. We may have what you're looking for.
          </p>
        </div>
       {loading ? <p>loading...</p> :
        <div className='grid grid-cols-2 md:grid-cols-3 place-items-center gap-10 py-5'>
          {glasses.map((item: ProductProps) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>}
      </Container>
    </section>
  )
}

export default Explore
