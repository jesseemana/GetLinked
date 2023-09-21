import React from 'react'
import Container from './Container'

const Overview = () => {
  return (
    <div className='border-[0.3px] border-l-0 border-r-0 border-b-0 border-gray-500 p-10'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center justify-around'>
          <div className='w-1/2 ml-20 relative'>
            <img 
              src='./overview.png' 
              alt='overview.png' 
              className=''
            />
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[170px]' />
            <img src='./arrow.png' alt='decorator icons' className='absolute right-[120px] top-[420px]' />
          </div>
          <div className='text-gray-300 w-1/2 p-7 relative'>
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[40px] right-[140px]' />
            <h1 className='text-white text-3xl font-bold'>Introduction to getlinked <br /> 
              <span className='text-text-color'>techHakacthon 1.0</span>
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
    </div>
  )
}

export default Overview 