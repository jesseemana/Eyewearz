import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import Container from '../components/Container'

const Male = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getGlasses = async () => {
      setLoading(true)
      try {
        const response = await fetch('http://localhost:3030/api/products/filter?gender=male', {
          method: 'POST'
        })
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error('An error occcured fetching data')
      } finally {
        setLoading(false)
      }
    }
    getGlasses()
  }, [])

  if (loading) return <Loading />

  return (
    <Container>
      <div>Male Shades</div>
    </Container>
  )
}

export default Male
