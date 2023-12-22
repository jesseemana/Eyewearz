import React from 'react'
import Container from './Container'

const Promo = () => {
  return (
    <section id='promo' className='mt-10'>
      <Container>
        <img 
          src='./discount.webp' 
          alt='banner for discount/promom advertisment' 
          className='h-[80px] md:h-auto'
        />
      </Container>
    </section>
  )
}

export default Promo
