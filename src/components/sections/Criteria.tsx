import React from 'react'
import Container from '../Container'
import Point from '../Inputs/Points'
import Button from '../Button'

const Criteria = () => {
  return (
    <div className='border-[0.3px] border-l-0 border-r-0 border-b-0 border-gray-500 p-10'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center justify-around'>
          <div className='lg:w-1/2 ml-20 relative'>
            <img 
              src='./criteria.png' 
              alt='criteria.png' 
              className=''
            />
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[170px]' />
          </div>
          <div className='text-gray-300 lg:w-1/2 p-7 relative flex flex-col gap-4 text-lg md:text-xl text-center lg:text-start'>
            <img src='./star.png' alt='decorator icons' className='absolute top-[40px] right-[14%]' />
            <h1 className='text-white text-3xl lg:text-4xl font-bold'>Judging criteria <br /> 
              <span className='text-text-color'>Key attributes</span>
            </h1>
            <Point 
              span='Innovation and Creativity' 
              text='Evaluate the uniqueness and creativity of the
              solution. Consider whether it addresses a real-world problem in a novel 
              way or introduces innovative features.' 
            />
            <Point 
              span='Functionality' 
              text='Assess how well the solution works. Does it perform its 
              intended functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.' 
            />
            <Point 
              span='Impact and Relevance' 
              text='Determine the potential impact of the solution 
              in the real world. Does it address a significant problem, and is it relevant 
              to the target audience? Judges would assess the potential social, 
              economic, or environmental benefits.' 
            />
            <Point 
              span='Technical Complexity' 
              text='Evaluate the technical sophistication of the solution. 
              Judges would consider the complexity of the code, the use of advanced 
              technologies or algorithms, and the scalability of the solution.' 
            />
            <Point 
              span='Adherence to Hackathon Rules' 
              text='Judges will Ensure that the team adhered 
              to the rules and guidelines of the hackathon, including deadlines, use of 
              specific technologies or APIs, and any other competition-specific requirements.' 
            />
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