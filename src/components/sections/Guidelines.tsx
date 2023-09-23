import React from 'react'
import Container from '@/components/Container'

const Guidelines = () => {
  return (
    <section id='guidelines' className='border-t border-gray-500 p-10'>
      <Container>
        <div className='flex flex-col lg:flex-row-reverse items-center justify-around'>
          <div className='lg:w-1/2  lg:ml-20 relative'>
            <img 
              src='./woman.png' 
              alt='woman.png' 
              className='h-[200px] md:h-[300px] lg:h-[500px]'
            />
            <img 
              src='./star.png' 
              alt='decorator icons' 
              className='absolute top-[170px]' 
            />
          </div>
          <div className='text-gray-300 lg:w-1/2 p-7 relative text-sm md:text-xl text-center lg:text-start'>
            <img 
              src='./star.png' 
              alt='decorator icons' 
              className='absolute top-[40px] left-[230px] lg:right-[140px]' 
            />
            <h1 className='text-white text-2xl md:text-4xl font-bold mb-2'>Rules and <br /> 
              <span className='text-text-color'>Guidelines</span>
            </h1>
            <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you're a coding genius, a 
              design maverick, or a concept wizard, you'll have the chance to transform 
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world,
              that's what we're all about!
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Guidelines   