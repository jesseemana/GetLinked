import React from 'react'
import Container from '@/components/Container'

const Overview = () => {
  return (
    <section id='overview' className='border-t border-gray-500 p-10'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center justify-around'>
          <div className='lg:w-1/2 lg:ml-20 relative'>
            <img 
              src='./overview.png' 
              alt='overview.png' 
              className='h-[300px] lg:h-[500px]'
            />
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[40%]' />
            <img src='./arrow.png' alt='decorator icons' className='absolute right-[40%] lg:right-[30%] top-[90%]' />
          </div>
          <div className='text-gray-300 lg:w-1/2 p-7 relative text-xl text-center lg:text-start'>
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[40px] right-[4%]' />
            <h1 className='text-white text-3xl font-bold mb-2'>Introduction to getlinked <br /> 
              <span className='text-text-color'>techHakacthon 1.0</span>
            </h1>
            <p>
              Our tech hackathon is a melting pot of visionaries, and its purpose is as
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

export default Overview 