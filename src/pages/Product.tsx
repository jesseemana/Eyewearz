import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Container from '../components/Container'
import { GlassProps } from '../components/Glasses'

const Product = () => {
  const { id } = useParams()

  const [product, setProduct] = useState<GlassProps>()

  useEffect(() => {
    const getProduct = async () => {
      const results = await fetch(`http://localhost:3000/glasses/${id}`, { method: 'GET' })
      const product = await results.json()
      setProduct(product)
    }

    getProduct()
  }, [])

  return (
    <Container>
      <div className='py-10'>
        <h1>single item page</h1>
      </div>
    </Container>
  )
}

export default Product
