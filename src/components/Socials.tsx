import React from 'react'
import { FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='flex items-center gap-6'>
      <a href='https://www.facebook.com/mybusinesspage' target='blank'>
        <FaFacebook 
          size={30} 
          className='fill-blue-500' 
        />
      </a>
      <a href='https://www.twitter.com/mybusinesspage' target='blank'>
        <FaTwitter 
          size={30} 
          className='fill-blue-400' 
        />
      </a>
      <a href='https://www.instagram.com/mybusinesspage' target='blank'>
        <FaInstagram 
          size={30} 
          className='fill-purple-500' 
        />
      </a>
      <a href='https://www.tiktok.com/mybusinesspage' target='blank'>
        <FaTiktok size={30} />
      </a>
      <a href='https://www.youtube.com/mybusinesspage' target='blank'>
        <FaYoutube 
          size={30} 
          className='fill-red-600'
        />
      </a>
    </div>
  )
}

export default Socials
