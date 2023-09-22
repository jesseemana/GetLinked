import React from 'react'
import Button from './Button'
import Container from './Container'
import { useNavigate } from 'react-router'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <header className='border-[0.3px] border-l-0 border-r-0 border-b-0 border-gray-500'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center'>
          {/* LEFT SIDE */}
          <div className='flex flex-col gap-2 lg:gap-10'>
            <div className='relative py-1'>
              <h1 className='text-white text-5xl lg:text-6xl font-bold'>
                getlinked Tech <br/> Hackathon <span className='text-text-color'>1.0</span>
                <img src='./boom.png' alt='an svg icon' className='absolute bottom-10 right-[110px] h-[40px]'/>
                <img src='./chain.png' alt='an svg icon' className='absolute bottom-7 right-[190px] h-[40px]' />
                <img src='./creative.png' alt='an svg icon' className='absolute -top-4 right-[330px] h-[40px]'/>
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
              className='absolute lg:top-[110px] lg:h-[600px] h-[400px] top-[300px]' 
            />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Hero 