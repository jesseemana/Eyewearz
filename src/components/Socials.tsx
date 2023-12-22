import React from 'react'
import { 
  FaFacebook, 
  FaTwitter, 
  FaTiktok, 
  FaYoutube, 
  FaInstagram 
} from 'react-icons/fa'
import{ Link } from 'react-router-dom'


const Socials = () => {
  return (
    <div className='flex items-center gap-5'>
      <Link 
        target='blank'
        to='https://www.facebook.com/mybusinesspage' 
      >
        <FaFacebook 
          size={30} 
          className='fill-blue-500' 
        />
      </Link>
      <Link 
        target='blank'
        to='https://www.twitter.com/mybusinesspage' 
      >
        <FaTwitter 
          size={30} 
          className='fill-blue-400' 
        />
      </Link>
      <Link 
        target='blank'
        to='https://www.instagram.com/mybusinesspage' 
      >
        <FaInstagram 
          size={30} 
          className='fill-purple-500' 
        />
      </Link>
      <Link 
        target='blank'
        to='https://www.tiktok.com/mybusinesspage' 
      >
        <FaTiktok size={30} />
      </Link>
      <Link 
        target='blank'
        to='https://www.youtube.com/mybusinesspage' 
      >
        <FaYoutube 
          size={30} 
          className='fill-red-600'
        />
      </Link>
    </div>
  )
}

export default Socials
