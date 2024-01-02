import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ProductProps } from '../types'
import { SiAdguard } from 'react-icons/si'
import { CiCircleCheck } from 'react-icons/ci'
import { TbArrowsExchange } from 'react-icons/tb'
import { FaStar, FaRegHeart } from 'react-icons/fa'
import Loading from '../components/Loading'
import Container from '../components/Container'
import useDocumentTitle from '../hooks/useDocumentTitle'

const Product = () => {
  const { id } = useParams()

  // @ts-ignore
  const [product, setProduct] = useState<ProductProps>({})
  const [loading, setLoading] = useState(false)

  useDocumentTitle(product.name)

  const handleFav = () => {}

  const handleSelect = () => {}

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true)
        const results = await fetch(`http://localhost:3030/api/products/${id}`, {
          method: 'GET' 
        })
        const data = await results.json()
        setProduct(data)
      } catch (error) {
        console.error(`Something went wrong ${error}`)
      } finally {
        setLoading(false)
      }
    }
    getProduct()
  }, [])

  if (loading) return <Loading />

  return (
    <>
      <Container>
        <div className='py-2 justify-around flex flex-col lg:flex-row'>
          <div>
            <img 
              src={product.image} 
              alt={`image for ${product.name}`} 
              className='lg:border'
            />
          </div>
          <hr />
          <div className='flex flex-col lg:w-[500px] w-full max-w-full justify-start gap-5 text-gray-800 p-4'>
            <div className='flex items-center justify-between'>
              <p className='font-semibold capitalize'>{product.name}</p>
              <button onClick={handleFav}>
                <FaRegHeart 
                  size={20} 
                  className='text-gray-500' 
                />
              </button>
            </div>
            <p className='font-semibold text-2xl'>MWK{product.price}</p>
            <div className='flex items-center gap-2 text-gray-600'>
              <FaStar size={20} className='fill-yellow-400' />
              <FaStar size={20} className='fill-yellow-400' />
              <FaStar size={20} className='fill-yellow-400' />
              <FaStar size={20} className='fill-yellow-400' />
              <p>91 reviews</p>
            </div>
            <p className='capitalize font-semibold'>size: L</p>
            <hr />
            <div className='flex justify-between'>
              <p className='capitalize text-[16px] text-gray-950'>available color: black</p>
              <p className='text-green-600'>in stock</p>
            </div>
            <button 
              onClick={handleSelect} 
              className='bg-blue-400 text-white lg:py-3 py-1 capitalize font-semibold text-md rounded-sm'
            >
              select lenses
            </button>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-2 text-gray-600'>
                <CiCircleCheck size={20} />
                <p className='capitalize'>free accessories included</p>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <TbArrowsExchange size={20} />
                <p className='capitalize'>60-day return & exchange</p>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <SiAdguard size={20} />
                <p className='capitalize'>365-day warranty</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className='font-semibold capitalize text-blue-500 text-xl py-2'>specifications</h1>
        <hr />
        <div className='p-4'>
          <div className='text-gray-800 lg:grid lg:grid-cols-4 flex flex-col lg:gap-4 lg:mt-5 capitalize font-normal'>
            <p className='before-styles'>size: L</p>
            <p className='before-styles'>width: 144mm</p>
            <p className='before-styles'>diagonal: 52mm</p>
            <p className='before-styles'>weight: 10g</p>
            <p className='before-styles'>bifocal: no</p>
            <p className='before-styles'>hinge: no</p>
            <p className='before-styles'>material: plastic</p>
          </div>
          <p className='capitalize mt-4 text-gray-800'>features: fashion</p>
          <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quibusdam ipsam accusantium modi repellat iste totam enim culpa esse reiciendis amet. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Incidunt, error saepe reprehenderit rem illum.
          </p>
        </div>
      </Container>
    </>
  )
}

export default Product
