import React from 'react'
import Button from './Button'
import Container from './Container'
import { useNavigate } from 'react-router'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className='border-[0.3px] border-l-0 border-r-0 border-b-0 border-gray-500'>
      <Container>
        <div className='flex items-center'>
          {/* LEFT SIDE */}
          <div className='flex flex-col gap-10'>
            <div className='relative py-10'>
              <h1 className='text-white text-6xl font-bold'>
                getlinked Tech Hackathon <span className='text-text-color'>1.0</span>
                <img src='./boom.png' alt='an svg icon' className='absolute bottom-10 right-[110px]'/>
                <img src='./chain.png' alt='an svg icon' className='absolute bottom-7 right-[190px]' />
                <img src='./creative.png' alt='an svg icon' className='absolute -top-4 right-[330px]'/>
              </h1>
            </div>
            <div>
              <Button 
                type='button'
                label='register' 
                onClick={() => navigate('/register')} 
              />
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div>
            <img 
              src='./man.png' 
              alt='man wearing shades touching glowing ball' 
              className='relative -mb-3' 
            />
            <img 
              src='./Image.png' 
              alt='glowing ball' 
              className='absolute top-[110px] h-[600px]' 
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero 