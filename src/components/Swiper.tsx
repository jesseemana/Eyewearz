import React from 'react'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';

import { Pagination, Navigation, Scrollbar, } from 'swiper/modules';

import Slider from "react-slick";
import { GlassProps } from '../types';

const MySwiper = ({ glasses }: { glasses: GlassProps[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  return (
    <div className='flex gap-4 p-2'>
      <Slider {...settings}>
        {glasses.map((item, index) => (
          <img src={item.image} alt="" className='h-20' key={index} />
        ))}
      </Slider>
    </div>
  )
}

export default MySwiper
