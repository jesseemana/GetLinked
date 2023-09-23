import React from 'react'
import Container from '../Container'
import Button from '../Button'
import Points from '../Points'
import { points } from '../constants/points'

const Criteria = () => {
  return (
    <div className='border-[0.3px] border-l-0 border-r-0 border-b-0 border-gray-500 p-10'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center justify-around'>
          <div className='lg:w-1/2 lg:ml-20 relative'>
            <img src='./criteria.png' alt='criteria.png' className='h-[200px] md:h-[300px] lg:h-[500px]' />
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[170px]'/>
          </div>
          <div className='text-gray-200 lg:w-1/2 p-7 relative flex flex-col gap-4 text-center lg:text-start'>
            <img src='./star.png' alt='decorator icons' className='absolute top-[40px] right-[14%]'/>
            <h1 className='text-white text-2xl md:text-4xl font-bold'>Judging criteria <br /> 
              <span className='text-text-color'>Key attributes</span>
            </h1>
            {points.map((item ,index) => (
              <Points 
                key={index} 
                point={item.title} 
                text={item.text} 
              />
            ))}
            <div>
              <Button 
                type='button' 
                label='read more' 
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Criteria 