import React from 'react'
import Hero from '../components/Hero'
import Picks from '../components/Picks'
import Promo from '../components/Promo'
import Header from '../components/Header'
import Explore from '../components/Explore'
import Reviews from '../components/Reviews'
import Categories from '../components/Categories'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <Header />
      <Categories />
      <Explore />
      <Picks />
      <Reviews />
      <Promo />
      <NewsLetter />
    </>
  )
}

export default Home
