import React from 'react'
import Socials from './Socials'
import Container from './Container'
import Benefits, { BenefitsTypes } from './Benefits'
import { FaShieldAlt } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import { 
  AiFillMessage, 
  AiOutlineMessage, 
  AiFillDollarCircle, 
  AiOutlineMail, 
  AiOutlinePhone, 
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-gray-100 py-8'>
      <Container>
        <div className='grid mb-8 grid-cols-3'>
          {benefits.map((item, index) => (
            <Benefits key={index} benefits={item} />
          ))}
        </div>
        <hr />
        <div className='grid grid-cols-4 py-5'>
          {/* Shop */}
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold capitalize text-gray-900'>shop</h1>
            <div className='font-normal text-gray-600 capitalize gap-1 flex flex-col'>
              <a href='#'>all eyeglasses</a>
              <a href='#'>all sunglasses</a>
              <a href='#'>women's eyeglasses</a>
              <a href='#'>men's eyeglasses</a>
              <a href='#'>kids's eyeglasses</a>
              <a href='#'>blue light blocker</a>
              <a href='#'>glassess accessories</a>
            </div>
          </div>
          {/* Help & Guides */}
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold capitalize text-gray-900'>help & guides</h1>
            <div className='font-normal text-gray-600 capitalize gap-1 flex flex-col'>
              <a href='#'>help center</a>
              <a href='#'>FAQs</a>
              <a href='#'>eye tests</a>
              <a href='#'>how to read prescriptions</a>
              <a href='#'>how to choose lenses</a>
            </div>
          </div>
          {/* About */}
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold capitalize text-gray-900'>about</h1>
            <div className='font-normal text-gray-600 capitalize gap-1 flex flex-col'>
              <a href='#'>about us</a>
              <a href='#'>privacy policy</a>
              <a href='#'>customer reviews</a>
              <a href='#'>terms and condition</a>
            </div>
          </div>
          {/* Contact */}
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold capitalize text-gray-900'>contact</h1>
            <div className=''>
              <div className='flex items-center gap-2 text-gray-600'>
                <AiOutlinePhone />
                <p>0881 234 567</p>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <AiOutlineMail />
                <p>mail@example.com</p>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <AiOutlineMessage />
                <p className='capitalize'>live chat</p>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <CiLocationOn />
                <p className='capitaliz'>Blantyre, abc builidng, room 42</p>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <CiLocationOn />
                <p className='capitaliz'>Lilongwe, abc builidng, room 47</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='grid place-items-center mt-4'>
          <Socials />
        </div>
      </Container>
    </footer>
  )
}

export default Footer

export const benefits: BenefitsTypes[] = [
  {
    title: '60-day exchange and return',
    icon: <AiFillDollarCircle size={40} className='fill-gray-700'/>,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam?'
  },
  {
    title: '365-day warranty',
    icon: <FaShieldAlt size={40} className='fill-gray-700'/>,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam?',
    styles: 'before:bg-gray-500 before:h-20 before:w-[3px] after:bg-gray-500 after:h-20 after:w-[2px]'
  },
  {
    title: 'live chat 24/7',
    icon: <AiFillMessage size={40} className='fill-gray-700'/>,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ullam?'
  },
]
