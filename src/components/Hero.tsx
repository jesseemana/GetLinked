import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-around'>
      <div className='w-1/2 flex flex-col gap-20'>
        <div className='relative py-10'>
        <h1 className='text-white text-6xl font-bold'>
          getlinked Tech Hackathon <span className='text-text-color'>1.0</span>
          <img src='./boom.png' alt='' className='absolute bottom-10 right-[110px]'/>
          <img src='./chain.png' alt='' className='absolute bottom-7 right-[170px]' />
          <img src='./creative.png' alt='' className='absolute -top-4 right-[260px]'/>
        </h1>
        </div>
        <div>
          <Button 
            label='register' 
            onClick={() => navigate('/register')} 
          />
        </div>
      </div>
      <div>
        <img 
          src='./man.png' 
          alt='man wearing shades touching glowing ball' 
          className='relative' />
        <img 
          src='./Image.png' 
          alt='glowing ball' 
          className='absolute top-20' 
        />
      </div>
    </div>
  )
}

export default Hero 